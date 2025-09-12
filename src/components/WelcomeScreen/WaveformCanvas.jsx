import React, { useEffect, useRef } from "react";

/**
 * WaveformCanvas.jsx
 * Компонент рисует временную форму (time-domain waveform) аудио.
 *
 * Props:
 * - audioRef: React ref на <audio> элемент (обязательно)
 * - height: высота канвы в px (по умолчанию 48)
 *
 * Особенности:
 * - Использует WebAudio AnalyserNode (fftSize = 2048)
 * - Подключается к audio element при событии 'play' (избегаем проблем со стартом AudioContext)
 * - Останавливает requestAnimationFrame при размонтировании
 * - Рисует линию волны с учётом devicePixelRatio для чёткости
 */

export default function WaveformCanvas({
  audioRef,
  height = 48,
  className = "",
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const analyserRef = useRef(null);
  const audioCtxRef = useRef(null);
  const dataRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let mounted = true;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function connectAudio() {
      const audioEl = audioRef?.current;
      if (!audioEl) return;
      if (analyserRef.current) return;

      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContext();
        }
        const audioCtx = audioCtxRef.current;

        const source = audioCtx.createMediaElementSource(audioEl);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        analyserRef.current = analyser;
        dataRef.current = new Uint8Array(analyser.fftSize);

        source.connect(analyser);
        analyser.connect(audioCtx.destination);
      } catch (err) {
        console.warn("Waveform: could not create audio context/analyser", err);
        return;
      }

      draw();
    }

    function draw() {
      if (!mounted) return;
      const canvasW = canvas.clientWidth;
      const canvasH = height;
      ctx.clearRect(0, 0, canvasW, canvasH);

      const analyser = analyserRef.current;
      if (!analyser) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      analyser.getByteTimeDomainData(dataRef.current);

      const data = dataRef.current;
      const len = data.length;
      ctx.lineWidth = 2;
      const cssColor =
        getComputedStyle(document.documentElement).getPropertyValue(
          " --sand"
        ) || "#e4c988";
      ctx.strokeStyle = cssColor.trim();
      ctx.beginPath();

      for (let i = 0; i < len; i++) {
        const x = (i / (len - 1)) * canvasW;
        const v = data[i] / 128.0;
        const y = (v * canvasH) / 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      rafRef.current = requestAnimationFrame(draw);
    }

    function onPlay() {
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume().catch(() => {});
      }
      connectAudio();
    }

    const audioEl = audioRef?.current;
    if (audioEl) {
      audioEl.addEventListener("play", onPlay);
      if (!audioEl.paused) {
        onPlay();
      }
    }

    return () => {
      mounted = false;
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (audioEl) audioEl.removeEventListener("play", onPlay);
    };
  }, [audioRef, height]);

  return (
    <div className={`w-full ${className}`} style={{ height: `${height}px` }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
}
