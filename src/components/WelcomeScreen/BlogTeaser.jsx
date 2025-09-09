import React from "react";

export default function BlogTeaser() {
  return (
    <section id="blog" className="mt-20">
      <h2 className="font-heading text-2xl sm:text-3xl tracking-tight">
        Mein Blog · Erste Schritte
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <article className="card">
          <h3 className="font-heading text-lg">#1 – Ankommen in Berlin</h3>
          <p className="mt-2 text-sm text-foreground/80">
            Neue Wörter im Alltag, Kaffee am Morgen, kleine Gespräche im Kiez.
            Ich sammle Vokabeln, Fehler und Fortschritte – jeden Tag ein
            bisschen besser.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-sm underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
          >
            Weiterlesen
          </a>
        </article>

        <article className="card">
          <h3 className="font-heading text-lg">
            #2 – Erste Grammatik, echter Kontext
          </h3>
          <p className="mt-2 text-sm text-foreground/80">
            Nicht perfekt, sondern echt: Verben im Präsens, Höflichkeit, kleine
            Nuancen, die Gespräche fließender machen. Mit Spickzetteln zum
            Klicken.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-sm underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
          >
            Weiterlesen
          </a>
        </article>
      </div>
    </section>
  );
}
