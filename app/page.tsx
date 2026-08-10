import Link from "next/link";
import { emails } from "@/lib/registry";
import { renderEmail } from "@/lib/renderEmail";

export default async function Home() {
  const rendered = await Promise.all(
    emails.map(async (entry) => ({ entry, html: await renderEmail(entry) })),
  );

  return (
    <>
      <h1 style={{ margin: 0, fontSize: 32, color: "var(--teal-dark)" }}>E-maildesigns</h1>
      <p style={{ color: "#6b6b6b", margin: "8px 0 0" }}>
        Alle e-mailontwerpen van ViaLuxury op één plek. Klik op een ontwerp voor een grote preview,
        mobiel/desktop-weergave en de productie-HTML.
      </p>
      <div className="grid">
        {rendered.map(({ entry, html }) => (
          <Link key={entry.slug} href={`/emails/${entry.slug}`} className="card">
            <div className="card-thumb">
              <iframe srcDoc={html} tabIndex={-1} loading="lazy" scrolling="no" />
            </div>
            <div className="card-body">
              <h2>{entry.title}</h2>
              <p>{entry.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
