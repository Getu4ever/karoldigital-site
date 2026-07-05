export interface BlogRelatedLink {
  label: string;
  href: string;
}

export function getBlogServiceLinks(
  slug: string,
  keywords?: string[] | null
): BlogRelatedLink[] {
  const haystack = `${slug} ${(keywords ?? []).join(" ")}`.toLowerCase();
  const links: BlogRelatedLink[] = [];

  const add = (label: string, href: string) => {
    if (!links.some((link) => link.href === href)) {
      links.push({ label, href });
    }
  };

  if (haystack.match(/immigration|oisc|visa|legal/)) {
    add("Immigration law firm web design", "/industries/immigration-services");
  }
  if (haystack.match(/financial|mortgage|accountant|ifa|advisor/)) {
    add("Financial services web design", "/industries/financial-services");
  }
  if (haystack.match(/construction|builder|trade|contractor/)) {
    add("Construction & trades web design", "/industries/building-services");
  }
  if (haystack.match(/catering|restaurant|food|menu|hospitality/)) {
    add("Catering & food brand websites", "/industries/catering-services");
  }
  if (haystack.match(/audit|conversion|speed|performance|seo|accessibility/)) {
    add("Website audits", "/services/website-audits");
    add("Request a website audit", "/book?service=Website+Audit");
  }
  if (haystack.match(/pricing|cost|package|diy/)) {
    add("View pricing packages", "/pricing");
  }
  if (haystack.match(/london/)) {
    add("Small business web design in London", "/services/small-business-web-design-london");
  }

  add("Web design services", "/services/web-design");
  add("Book a free consultation", "/book");

  return links.slice(0, 5);
}
