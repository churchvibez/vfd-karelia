import type { WPPage } from "@/types/wordpress";

const WP_BASE = process.env.WORDPRESS_URL;

if (!WP_BASE) {
    throw new Error("wordpress url is not defined in env file");
}

function buildApiUrl(endpoint: string, params: string = ""): string {
    const separator = params ? "&" : "";
    return `${WP_BASE}?rest_route=/wp/v2/${endpoint}${separator}${params}`;
}

async function fetchPages(query: string): Promise<WPPage[]> {
    const params = query.startsWith("?") ? query.slice(1) : query;
    const res = await fetch(buildApiUrl("pages", params), {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
    return res.json();
  }

  export async function getPageByPath(segments: string[]): Promise<WPPage | null> {
    let parentId = 0;
    let page: WPPage | null = null;

    for (const seg of segments) {
      const results = await fetchPages(
        `?slug=${encodeURIComponent(seg)}&parent=${parentId}&per_page=1`
      );
      page = results[0] ?? null;
      if (!page) return null;
      parentId = page.id;
    }

    return page;
  }


export async function getPageBySlug(slug: string): Promise<WPPage | null> {
    const res = await fetch(
    buildApiUrl("pages", `slug=${encodeURIComponent(slug)}`),
    { next: {revalidate: 5 } }
    );

    if (!res.ok) {
        throw new Error(`failed to get the page: ${res.status}`);
    }

    const pages: WPPage[] = await res.json();
    return pages[0] ?? null;

}

export async function getAllPagesSlugs(): Promise<string[]> {

    const res = await fetch(buildApiUrl("pages", "per_page=100"), {
        next: { revalidate: 5 },
    });

    if (!res.ok) throw new Error (`failed to find pages list: ${res.status}`);

    const pages: WPPage[] = await res.json();
    return pages.map((p) => p.slug);
}

export async function getAllPages(): Promise<WPPage[]> {
    const res = await fetch(buildApiUrl("pages", "per_page=100"), {
        next: { revalidate: 5 },
    });

    if (!res.ok) throw new Error(`failed to fetch pages: ${res.status}`);

    return res.json();
}