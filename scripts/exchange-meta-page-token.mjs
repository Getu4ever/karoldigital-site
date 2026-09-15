/**
 * Exchange a short-lived User token (Graph Explorer) for a long-lived Page token.
 *
 * Usage:
 *   node --env-file=.env.local scripts/exchange-meta-page-token.mjs
 *
 * Requires in .env.local:
 *   META_APP_ID, META_APP_SECRET
 *   FACEBOOK_PAGE_ID
 *   And either FACEBOOK_USER_ACCESS_TOKEN (short-lived) or paste when prompted via argv:
 *   node --env-file=.env.local scripts/exchange-meta-page-token.mjs <user_token>
 *
 * Prints Page + IG IDs and a Page access_token to copy into
 * FACEBOOK_PAGE_ACCESS_TOKEN / INSTAGRAM_ACCESS_TOKEN (do not commit).
 */
const version = process.env.META_GRAPH_API_VERSION || "v22.0";
const appId = process.env.META_APP_ID;
const appSecret = process.env.META_APP_SECRET;
const pageId = process.env.FACEBOOK_PAGE_ID;
const userToken =
  process.argv[2] ||
  process.env.FACEBOOK_USER_ACCESS_TOKEN ||
  process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

if (!appId || !appSecret) {
  console.error("Set META_APP_ID and META_APP_SECRET in .env.local");
  process.exit(1);
}
if (!userToken) {
  console.error("Pass a User access token as argv or FACEBOOK_USER_ACCESS_TOKEN");
  process.exit(1);
}

async function getJson(url) {
  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok || json.error) {
    throw new Error(json.error?.message || `HTTP ${res.status}`);
  }
  return json;
}

const exchangeUrl = new URL(
  `https://graph.facebook.com/${version}/oauth/access_token`
);
exchangeUrl.searchParams.set("grant_type", "fb_exchange_token");
exchangeUrl.searchParams.set("client_id", appId);
exchangeUrl.searchParams.set("client_secret", appSecret);
exchangeUrl.searchParams.set("fb_exchange_token", userToken);

const longLivedUser = await getJson(exchangeUrl);
const longUserToken = longLivedUser.access_token;
if (!longUserToken) {
  throw new Error("No long-lived user token returned");
}

const accountsUrl = new URL(`https://graph.facebook.com/${version}/me/accounts`);
accountsUrl.searchParams.set(
  "fields",
  "id,name,access_token,instagram_business_account"
);
accountsUrl.searchParams.set("access_token", longUserToken);
const accounts = await getJson(accountsUrl);
const pages = Array.isArray(accounts.data) ? accounts.data : [];

let page =
  (pageId && pages.find((p) => p.id === pageId)) ||
  pages.find((p) => /karol/i.test(p.name || "")) ||
  pages[0];

if (!page?.access_token && pageId) {
  const direct = await getJson(
    `https://graph.facebook.com/${version}/${pageId}?fields=id,name,access_token,instagram_business_account&access_token=${encodeURIComponent(longUserToken)}`
  );
  page = direct;
}

if (!page?.access_token) {
  console.error(
    "Could not resolve a Page token. me/accounts returned:",
    pages.map((p) => ({ id: p.id, name: p.name }))
  );
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      pageId: page.id,
      pageName: page.name,
      instagramBusinessAccountId: page.instagram_business_account?.id || null,
      expiresInUserTokenSeconds: longLivedUser.expires_in || null,
      pageAccessToken: page.access_token,
      hint: "Copy pageAccessToken into FACEBOOK_PAGE_ACCESS_TOKEN and INSTAGRAM_ACCESS_TOKEN (Page tokens from long-lived user tokens typically do not expire).",
    },
    null,
    2
  )
);
