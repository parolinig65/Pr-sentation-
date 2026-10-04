import { useState, useEffect } from 'react';
import { Activity, ArrowRight, Play, Pause, ExternalLink, Sliders, CheckCircle2 } from 'lucide-react';

interface Props {
  onGoToFilm?: () => void;
}

export function Slide07Vasomotion({ onGoToFilm }: Props) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [phase, setPhase] = useState<'narrow' | 'wide'>('wide');
  const [frequency, setFrequency] = useState<number>(3); // Contractions per minute nominal

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPhase((prev) => (prev === 'wide' ? 'narrow' : 'wide'));
    }, 2400 / (frequency / 3));

    return () => clearInterval(interval);
  }, [isPlaying, frequency]);

  return (
    <div className="w-full h-full min-h-[560px] p-6 md:p-10 rounded-2xl bg-white border border-[#D8CFCB] shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>07</span>
            <span aria-hidden="true">·</span>
            <span>Gefäßdynamik</span>
          </div>
          <span className="text-xs text-[#6F6D73] font-mono">Spontane Kontraktilität</span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#171717] tracking-tight font-display leading-tight">
          Vasomotion: der Rhythmus kleiner Gefäße
        </h2>
        <p className="mt-1.5 text-sm md:text-base text-[#4B4A50] leading-relaxed max-w-3xl">
          Kleine Gefäße verändern ihre Weite fortlaufend – und verteilen den Blutfluss damit immer wieder bedarfsgerecht neu.
        </p>
      </div>

      {/* Main Interactive Rhythm Visualizer (Bright, Warm, Medical Aesthetic) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left: Dynamic Vessel Pulsation Stage */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-[#ECE3DC]/30 border border-[#D8CFCB] flex flex-col justify-between space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-[#EB5A23] uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#EB5A23]" />
              <span>Rhythmische Weitenänderung (Vasomotion)</span>
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-xs bg-white hover:bg-neutral-50 text-[#4B4A50] px-3 py-1.5 rounded-lg border border-[#D8CFCB] shadow-xs flex items-center gap-1.5 transition-all cursor-pointer font-medium"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#EB5A23]" /> : <Play className="w-3.5 h-3.5 text-[#EB5A23]" />}
              <span>{isPlaying ? 'Pulsation anhalten' : 'Pulsation starten'}</span>
            </button>
          </div>

          {/* Animated Vessel Channel in Light Medical Design */}
          <div className="relative py-6 px-4 bg-white rounded-xl border border-[#D8CFCB] shadow-xs flex flex-col items-center justify-center overflow-hidden">
            {/* Upper Vessel Wall */}
            <div
              className={`w-full bg-rose-200/90 border-b border-rose-300 transition-all duration-1000 ease-in-out rounded-t-lg flex items-center px-4 ${
                phase === 'narrow' ? 'h-8 translate-y-1.5' : 'h-4 translate-y-0'
              }`}
            >
              <span className="text-[10px] text-rose-800 font-mono font-medium">Gefäßwand / Glatte Muskulatur</span>
            </div>

            {/* Lumen / Inside Blood Stream */}
            <div
              className={`w-full transition-all duration-1000 ease-in-out flex items-center justify-between px-6 bg-rose-50/50 overflow-hidden ${
                phase === 'narrow' ? 'h-11' : 'h-22'
              }`}
            >
              <div className="flex items-center gap-2 overflow-hidden w-full justify-around">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`rounded-full bg-[#EB5A23] text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-xs transition-all duration-1000 ${
                      phase === 'narrow' ? 'w-6 h-8 scale-90' : 'w-9 h-9'
                    }`}
                  >
                    RBC
                  </div>
                ))}
              </div>
            </div>

            {/* Lower Vessel Wall */}
            <div
              className={`w-full bg-rose-200/90 border-t border-rose-300 transition-all duration-1000 ease-in-out rounded-b-lg flex items-center px-4 ${
                phase === 'narrow' ? 'h-8 -translate-y-1.5' : 'h-4 translate-y-0'
              }`}
            >
              <span className="text-[10px] text-rose-800 font-mono font-medium">Kontraktion / Dilatation</span>
            </div>

            {/* Live Indicator Tag */}
            <div className="absolute top-2 right-3 text-xs font-mono px-2.5 py-1 rounded-md bg-[#ECE3DC] text-[#4B4A50] border border-[#D8CFCB] flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  phase === 'wide' ? 'bg-emerald-500' : 'bg-[#EB5A23]'
                }`}
              />
              <span>
                Status: <strong>{phase === 'wide' ? 'Erweitert (Dilatation)' : 'Verengt (Kontraktion)'}</strong>
              </span>
            </div>
          </div>

          {/* Interactive Rhythm Slider */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#4B4A50] bg-white p-3 rounded-xl border border-[#D8CFCB]/80">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#EB5A23] shrink-0" />
              <span>Simulierte Frequenz:</span>
              <strong className="font-mono text-[#EB5A23]">{frequency} Zyklen / Min.</strong>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-[11px] text-[#6F6D73]">1/min</span>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={frequency}
                onChange={(e) => setFrequency(parseInt(e.target.value, 10))}
                className="w-32 accent-[#EB5A23] cursor-pointer"
              />
              <span className="text-[11px] text-[#6F6D73]">6/min</span>
            </div>
          </div>
        </div>

        {/* Right: Key Explanations */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-4 rounded-xl border border-[#D8CFCB] bg-[#ECE3DC]/25 space-y-1.5">
            <h4 className="text-sm font-bold text-[#171717]">
              Eigendynamik unabhängig vom Herzschlag
            </h4>
            <p className="text-xs text-[#4B4A50] leading-relaxed">
              Kleine Arteriolen und Präkapillaren besitzen eine eigene spontane rhythmische Kontraktilität. Sie federn Druckspitzen ab und verteilen das Blut dorthin, wo der Stoffwechselbedarf am höchsten ist.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#D8CFCB] bg-[#ECE3DC]/25 space-y-1.5">
            <h4 className="text-sm font-bold text-[#171717]">
              Alters- und stressbedingte Verlangsamung
            </h4>
            <p className="text-xs text-[#4B4A50] leading-relaxed">
              Bei Bewegungsmangel, chronischem Stress, Rauchen oder im Alter kann diese spontane Weitenänderung von physiologischen ~3–5/min auf bis zu ~1/min absinken.
            </p>
          </div>

          {onGoToFilm && (
            <button
              onClick={onGoToFilm}
              className="w-full p-3.5 rounded-xl border border-[#EB5A23]/30 bg-orange-50/70 hover:bg-orange-100/70 text-[#EB5A23] font-semibold text-xs transition-all flex items-center justify-between group cursor-pointer shadow-xs"
            >
              <span>Direkt weiter zum Mikroskopie-Originalfilm (Folie 08)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 p-3 rounded-xl bg-[#ECE3DC]/40 border border-[#D8CFCB] text-xs text-[#4B4A50] flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Didaktische Brücke:</strong> Die Vasomotion ist der Hebel, an dem gezielte physikalische Impulse ansetzen.
          </span>
        </span>
        <span className="font-mono text-[11px] text-[#6F6D73] shrink-0">
          Gefäßmotorik & Mikrozirkulation
        </span>
      </div>
    </div>
  );
}
