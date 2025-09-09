import React from "react";
import { motion } from "framer-motion";
import { SpeechBubble } from "./SpeechBubble";
import WaveformCanvas from "./WaveformCanvas";
import { Button } from "../ui/button";
import backgroundImg from "../Assets/photo-1623345805780-8f01f714e65f.jpeg";

export default function Hero({ portraitSrc, audioRef }) {
  return (
    <section
      className="relative w-full p-16 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div
        className="absolute inset-0 
        bg-gradient-to-b 
        from-white/80 via-white/75 to-white/90 
        dark:from-black/80 dark:via-black/70 dark:to-black/85"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className=" mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight"
            >
              Dein Weg zum Deutsch–Lernen.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-20 text-lg sm:text-xl text-foreground/80 max-w-prose"
            >
              Ich bin eine leidenschaftliche Entwicklerin, neu in Deutschland,
              und baue ein offene, leichtes und modernes Lern-Erlebnis. Hier
              lernst du Deutsch über echte Geschichten, innere Dialoge und eine
              Community, die dich motiviert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-20 flex flex-wrap items-center gap-3"
            >
              <Button asChild variant="default" size="lg">
                <a href="#blog">Starte mit meiner Geschichte</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#roadmap">Roadmap ansehen</a>
              </Button>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              {[
                "Minimalistisch",
                "Ehrlich",
                "Community-first",
                "Open Tools",
              ].map((tag) => (
                <Button key={tag} variant="tag" size="sm">
                  {tag}
                </Button>
              ))}
            </div>

            <div className="mt-6">
              <WaveformCanvas audioRef={audioRef} height={56} />
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem]"
            >
              <div className="absolute inset-0 rounded-full bg-background/60 backdrop-blur border border-muted/60 shadow-lg z-0" />

              <img
                src={portraitSrc}
                alt="Mein Porträt"
                className="relative z-10 w-full h-full object-cover rounded-full"
                loading="eager"
                decoding="async"
              />

              <SpeechBubble className="-left-6 -top-6 z-30" delay={0.2}>
                „Ich kann das schaffen.“
              </SpeechBubble>
              <SpeechBubble className="right-0 -top-8 z-30" delay={0.35}>
                „Heute ein neues Verb.“
              </SpeechBubble>
              <SpeechBubble className="-left-4 bottom-0 z-30" delay={0.5}>
                „Weniger perfekt, mehr echt.“
              </SpeechBubble>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
