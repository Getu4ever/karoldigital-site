/**
 * Exchange / inspect a Meta User access token and print Page access tokens.
 *
 * 1. Open Graph API Explorer: https://developers.facebook.com/tools/explorer/
 * 2. Select your app, generate a User token with at least:
 *    pages_show_list, pages_manage_posts, pages_read_engagement,
 *    instagram_basic, instagram_content_publish (if posting to IG)
 * 3. Run:
 *    META_USER_ACCESS_TOKEN='paste-user-token' node scripts/get-meta-page-token.mjs
 *
 * Never commit the token. Prefer pasting it only in the terminal env for one run.
 */
const TOKEN = process.env.META_USER_ACCESS_TOKEN?.trim();
const VERSION = process.env.META_GRAPH_API_VERSION || "v22.0";

if (!TOKEN) {
  console.error(`
Missing META_USER_ACCESS_TOKEN.

Example:
  META_USER_ACCESS_TOKEN='EAAB...' node scripts/get-meta-page-token.mjs
`);
  process.exit(1);
}

async function graphGet(path, params = {}) {
  const url = new URL(`https://graph.facebook.com/${VERSION}/${path}`);
  url.searchParams.set("access_token", TOKEN);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value));
  }
  const response = await fetch(url);
  const json = await response.json();
  if (!response.ok || json.error) {
    const message = json.error?.message || `HTTP ${response.status}`;
    throw new Error(message);
  }
  return json;
}

async function main() {
  console.log("=== Debug token (app / type / scopes) ===");
  try {
    const debug = await graphGet("debug_token", {
      input_token: TOKEN,
    });
    // debug_token usually needs an app access token; if this fails, continue.
    console.log(JSON.stringify(debug, null, 2));
  } catch (error) {
    console.log(
      "(debug_token skipped — normal with a user token alone)",
      error instanceof Error ? error.message : error
    );
  }

  console.log("\n=== Facebook Pages linked to this user ===");
  const pages = await graphGet("me/accounts", {
    fields: "id,name,access_token,tasks,instagram_business_account",
  });

  console.log(JSON.stringify(pages, null, 2));

  const list = Array.isArray(pages.data) ? pages.data : [];
  if (!list.length) {
    console.error(`
No pages returned. Check that:
- the token is a USER token (not an app token)
- your Facebook user is an admin of https://www.facebook.com/karolgraphics
- the token includes pages_show_list / pages_manage_posts
`);
    process.exit(1);
  }

  console.log("\n=== Copy these into .env.local / Vercel ===\n");
  for (const page of list) {
    console.log(`# Page: ${page.name}`);
    console.log(`FACEBOOK_PAGE_ID=${page.id}`);
    console.log(`FACEBOOK_PAGE_ACCESS_TOKEN=${page.access_token}`);
    if (page.instagram_business_account?.id) {
      console.log(
        `INSTAGRAM_BUSINESS_ACCOUNT_ID=${page.instagram_business_account.id}`
      );
      console.log(
        `# You can reuse the Page token for Instagram if scopes include instagram_content_publish:`
      );
      console.log(`INSTAGRAM_ACCESS_TOKEN=${page.access_token}`);
    } else {
      console.log(
        `# No instagram_business_account on this Page — link IG Professional to the Page in Meta Business Suite.`
      );
    }
    console.log("");
  }

  console.log(`Tip: Page tokens from a long-lived User token do not expire.
If your User token is short-lived (~1–2h), exchange it first:
  GET https://graph.facebook.com/${VERSION}/oauth/access_token?grant_type=fb_exchange_token&client_id=APP_ID&client_secret=APP_SECRET&fb_exchange_token=SHORT_USER_TOKEN
`);
}

main().catch((error) => {
  console.error("Error:", error instanceof Error ? error.message : error);
  process.exit(1);
});
