import { getEmail } from "@/lib/registry";
import { renderEmail } from "@/lib/renderEmail";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const entry = getEmail(slug);
  if (!entry) {
    return new Response("Not found", { status: 404 });
  }

  const html = await renderEmail(entry);
  const headers = new Headers({ "Content-Type": "text/html; charset=utf-8" });

  const { searchParams } = new URL(request.url);
  if (searchParams.has("download")) {
    headers.set("Content-Disposition", `attachment; filename="${slug}.html"`);
  }

  return new Response(html, { headers });
}
