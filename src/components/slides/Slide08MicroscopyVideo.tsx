import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Eye, Film, ExternalLink, Info } from 'lucide-react';

export function Slide08MicroscopyVideo() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(18); // seconds into 1:53
  const [simulationSpeed, setSimulationSpeed] = useState<'slow' | 'active'>('active');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const totalDuration = 113; // 1:53 in seconds

  const cuePoints = [
    { time: 0, label: "0:00 Start: Ausgangssituation", note: "Geringe Strömung, einzelne stockende Zellen in feinen Kapillaren" },
    { time: 28, label: "0:28 Beobachtung der Verzweigung", note: "Zellen bewegen sich unregelmäßig; verharren teilweise an Verengungen" },
    { time: 55, label: "0:55 Einsetzen der Vasomotionsdynamik", note: "Spontane Gefäßweitenveränderung im mikrovaskulären Bett wird greifbar" },
    { time: 82, label: "1:22 Gleichmäßige Perfusion", note: "Regelmäßiger Durchfluss und kontinuierliche Passage der Erythrozyten" }
  ];

  // Playback timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= totalDuration) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, totalDuration]);

  // Canvas animated microscopy visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: { x: number; y: number; speed: number; radius: number; alpha: number }[] = [];

    // Create 30 cellular particles flowing along capillary curve
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * 600,
        y: 120 + Math.sin(i) * 25,
        speed: (simulationSpeed === 'active' ? 2.4 : 0.6) + Math.random() * 0.8,
        radius: 4.5 + Math.random() * 2,
        alpha: 0.7 + Math.random() * 0.3
      });
    }

    const render = () => {
      ctx.fillStyle = '#06160e'; // Deep green microscopic base
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle microscopic texture & grid
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw Capillary 1 (Main diagonal path)
      ctx.strokeStyle = 'rgba(74, 222, 128, 0.28)';
      ctx.lineWidth = 32;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(30, 80);
      ctx.bezierCurveTo(200, 160, 380, 70, 580, 160);
      ctx.stroke();

      // Capillary branch
      ctx.strokeStyle = 'rgba(74, 222, 128, 0.2)';
      ctx.lineWidth = 20;
      ctx.beginPath();
      ctx.moveTo(280, 115);
      ctx.quadraticCurveTo(360, 210, 520, 220);
      ctx.stroke();

      // Flowing blood cells
      particles.forEach((p, idx) => {
        p.x += (simulationSpeed === 'active' ? p.speed : p.speed * 0.3);
        if (p.x > canvas.width + 20) {
          p.x = -10;
        }

        const t = p.x / canvas.width;
        const mainY = 80 * (1 - t) * (1 - t) * (1 - t) +
          3 * 160 * (1 - t) * (1 - t) * t +
          3 * 70 * (1 - t) * t * t +
          160 * t * t * t;

        // Draw Erythrocyte with distinctive biconcave red-green hue
        ctx.beginPath();
        ctx.arc(p.x, mainY + (idx % 2 === 0 ? -4 : 4), p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 68, 68, ${p.alpha})`; // Erythrocyte red
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Overlay text HUD inside microscope
      ctx.fillStyle = '#4ade80';
      ctx.font = '11px monospace';
      ctx.fillText('VITALMIKROSKOPIE · 400x VERGRÖSSERUNG', 15, 25);
      ctx.fillText(`FLUSSPERFUSION: ${simulationSpeed === 'active' ? 'OPTIMIERT' : 'TRÄGE'}`, 15, 42);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [simulationSpeed]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="w-full h-full min-h-[580px] p-6 md:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>08</span>
            <span aria-hidden="true">·</span>
            <span>Vitalmikroskopie</span>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Originalaufnahme · 1:53 Min</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 tracking-tight font-display">
          Mikrozirkulation live unter dem Mikroskop
        </h2>
        <p className="mt-1 text-sm md:text-base text-neutral-600">
          Mikroskopische Aufnahmen machen die Bewegung des Blutes in kleinsten Gefäßen greifbar.
        </p>
      </div>

      {/* Main Feature: The Green Film Simulation & Playback Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 items-center">
        {/* Left: Microscopy Screen Canvas */}
        <div className="lg:col-span-7 bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800 shadow-md">
          {/* Microscope Header Bar */}
          <div className="px-4 py-2 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
            <span className="font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              GRÜNER ORIGINALCLIP · BEARBEITET
            </span>
            <span className="font-mono">{formatTime(currentTime)} / 1:53</span>
          </div>

          {/* Interactive Canvas */}
          <div className="relative">
            <canvas
              ref={canvasRef}
              width={600}
              height={260}
              className="w-full h-[240px] md:h-[260px] object-cover block"
            />

            {/* In-canvas indicator controls */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <button
                onClick={() => setSimulationSpeed('slow')}
                className={`text-xs px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                  simulationSpeed === 'slow'
                    ? 'bg-amber-600 text-white border-amber-500 font-medium'
                    : 'bg-black/60 text-neutral-300 border-neutral-700 hover:bg-black/90'
                }`}
              >
                Träger Fluss
              </button>
              <button
                onClick={() => setSimulationSpeed('active')}
                className={`text-xs px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                  simulationSpeed === 'active'
                    ? 'bg-[#EB5A23] text-white border-[#EB5A23] font-medium'
                    : 'bg-black/60 text-neutral-300 border-neutral-700 hover:bg-black/90'
                }`}
              >
                Gleichmäßiger Fluss
              </button>
            </div>
          </div>

          {/* Timeline & Player Bar */}
          <div className="p-3 bg-neutral-900 border-t border-neutral-800 flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-lg bg-[#EB5A23] text-white flex items-center justify-center hover:bg-[#EF7D30] transition-colors cursor-pointer shrink-0"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setCurrentTime(0)}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Zurück zum Anfang"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Scrubber rail */}
            <input
              type="range"
              min={0}
              max={totalDuration}
              value={currentTime}
              onChange={(e) => setCurrentTime(Number(e.target.value))}
              className="w-full accent-[#EB5A23] cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Speaker Cue Points & Didactic Guideline */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs text-neutral-800">
            <div className="flex items-center gap-1.5 font-semibold text-[#EB5A23] text-sm mb-1">
              <Eye className="w-4 h-4" />
              <span>Didaktische Empfehlung</span>
            </div>
            <p className="leading-relaxed">
              <strong>Keine Theorie vorwegnehmen – erst anschauen!</strong>
              <br />
              Lass die Person zunächst beschreiben, was sie im Bild sieht. Erst danach die Brücke zur Vasomotion, den roten Blutkörperchen und der Mikrozirkulation schlagen.
            </p>
          </div>

          {/* Cue Points List */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider font-mono">
              Videomarker & Kernphasen
            </span>
            {cuePoints.map((cue, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentTime(cue.time)}
                className={`p-2 rounded-lg border text-xs cursor-pointer transition-all ${
                  currentTime >= cue.time && (idx === cuePoints.length - 1 || currentTime < cuePoints[idx + 1].time)
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                    : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                <div className="font-semibold">{cue.label}</div>
                <div className="text-[11px] opacity-80 mt-0.5">{cue.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Canva & Film Reference */}
      <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <Film className="w-3.5 h-3.5 text-neutral-500" />
          <span>
            <strong>Vorlage:</strong> „Bearbeiteter Grüner Film“ (Canva / MP4, 1:53 Min / Original 2:36 Min mit Pfeil-Overlays).
          </span>
        </span>
        <a
          href="https://www.canva.com/d/ltqm1T15o0pty3J"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-700 hover:text-[#EB5A23] inline-flex items-center gap-1 font-mono transition-colors shrink-0"
        >
          <span>Canva Vorlage öffnen</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
