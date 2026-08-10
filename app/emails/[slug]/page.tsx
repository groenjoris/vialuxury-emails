import { notFound } from "next/navigation";
import { emails, getEmail } from "@/lib/registry";
import { renderEmail } from "@/lib/renderEmail";
import PreviewShell from "./PreviewShell";

export function generateStaticParams() {
  return emails.map(({ slug }) => ({ slug }));
}

export default async function EmailPreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEmail(slug);
  if (!entry) notFound();

  const html = await renderEmail(entry);
  return <PreviewShell title={entry.title} slug={entry.slug} html={html} />;
}
