import { absoluteUrl } from "../../lib/absolute-url";

export const dynamic = "force-dynamic"; // o quita esto y usa { cache: 'no-store' } en cada fetch

export default async function AboutPage() {
  // GET a /api/hello (SSR)
  const resGet = await fetch(absoluteUrl("/api/hello"), { cache: "no-store" });
  if (!resGet.ok) throw new Error("Falló el GET /api/hello");
  const dataGet = await resGet.json();

  // POST a /api/hello (SSR)
  const resPost = await fetch(absoluteUrl("/api/hello"), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "Marcelo" }),
    cache: "no-store",
  });
  if (!resPost.ok) throw new Error("Falló el POST /api/hello");
  const dataPost = await resPost.json();

  return (
    <main style={{ maxWidth: 720, margin: "2rem auto", lineHeight: 1.5 }}>
      <h1>About</h1>

      <h2>GET /api/hello</h2>
      <pre>{JSON.stringify(dataGet, null, 2)}</pre>

      <h2>POST /api/hello</h2>
      <pre>{JSON.stringify(dataPost, null, 2)}</pre>
    </main>
  );
}
