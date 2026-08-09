export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  mediaUrls?: string[];
  dateScheduled?: string;
  updatedAt?: string;
  markdown: string;
}

const ENDPOINT = "https://ai.marblism.com/api/penny/blog-posts";

/**
 * Fetch published blog posts from Penny at build time.
 *
 * Resilient by contract: never throws. On a missing API key, a non-OK
 * response, a parse error, or any thrown exception it logs ONE warning and
 * returns an empty list, so the page still builds (the very first production
 * build may run before PENNY_API_KEY is set).
 */
export async function getPosts(): Promise<BlogPost[]> {
  const apiKey = import.meta.env.PENNY_API_KEY;
  if (!apiKey) {
    console.warn("[blog] PENNY_API_KEY is not set — rendering an empty blog.");
    return [];
  }

  try {
    const res = await fetch(ENDPOINT, {
      headers: { "x-penny-api-key": apiKey },
    });

    if (!res.ok) {
      console.warn(`[blog] Penny responded with ${res.status} — treating post list as empty.`);
      return [];
    }

    const data = await res.json();
    const posts = data?.posts;
    return Array.isArray(posts) ? (posts as BlogPost[]) : [];
  } catch (err) {
    console.warn("[blog] Failed to fetch posts — treating post list as empty.", err);
    return [];
  }
}

/** Format an ISO date string as e.g. "September 12, 2035". Returns "" if absent/invalid. */
export function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
