import React from "react";
import { motion } from "framer-motion";

export default function Roadmap() {
  const items = [
    {
      title: "MVP Landing",
      desc: "Willkommen, Story, ruhige Musik, Sprechblasen.",
    },
    {
      title: "Blog & Wörter",
      desc: "Klickbare Wörter → Karte mit Übersetzung & Audio.",
    },
    {
      title: "Grammatik Spickzettel",
      desc: "Kontextbezogen, leicht verständlich, minimalistisch.",
    },
    {
      title: "Profil & Freunde",
      desc: "Öffentlich/privat, Abos, Benachrichtigungen.",
    },
    {
      title: "Training",
      desc: "Karten, Konjugation, Wiederholung mit Rhythmus.",
    },
    { title: "Live-Austausch", desc: "Chats & Sessions mit Community." },
  ];

  return (
    <section id="roadmap" className="mt-20">
      <h2 className="font-heading text-2xl sm:text-3xl tracking-tight">
        Roadmap · Ich bin
      </h2>
      <p className="mt-3 text-foreground/80 max-w-prose">
        Transparent und ehrlich: Ich baue Schritt für Schritt. Folge meinem Weg
        und sieh, wie aus einer Idee ein Produkt wird – mit Fokus auf Qualität,
        Nachhaltigkeit und Sinn für Details.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: i * 0.05 }}
            className="card"
          >
            <h3 className="font-heading text-lg">{item.title}</h3>
            <p className="mt-1 text-sm text-foreground/80">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
