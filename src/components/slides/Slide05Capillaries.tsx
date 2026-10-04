import { useState } from 'react';
import { ExternalLink, CheckCircle2, RefreshCw, Zap, ArrowRight } from 'lucide-react';

export function Slide05Capillaries() {
  const [transitState, setTransitState] = useState<'normal' | 'deformed'>('deformed');

  return (
    <div className="w-full h-full min-h-[560px] p-6 md:p-10 rounded-2xl bg-white border border-[#D8CFCB] shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Mikrovaskuläre Physiologie</span>
          </div>
          <span className="text-xs text-[#6F6D73] font-mono">Kapillarer Austausch</span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#171717] tracking-tight font-display leading-tight">
          Die kleinsten Gefäße: eine enge Lieferstrecke
        </h2>
        <p className="mt-1.5 text-sm md:text-base text-[#4B4A50] leading-relaxed max-w-3xl">
          Rote Blutkörperchen passen sich elastisch an: Wenn Gefäße enger sind als die Blutzellen selbst.
        </p>
      </div>

      {/* Main Grid: Bright, Elegant Capillary Infographic + Physiological Context */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left: Bright Medical Capillary Diagram */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-[#ECE3DC]/35 border border-[#D8CFCB] flex flex-col justify-between space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-[#EB5A23] uppercase tracking-wider font-mono">
              Kapillardurchgang im Querschnitt (Schema)
            </span>
            <button
              onClick={() => setTransitState(transitState === 'deformed' ? 'normal' : 'deformed')}
              className="text-xs bg-white hover:bg-neutral-50 text-[#4B4A50] px-3 py-1.5 rounded-lg border border-[#D8CFCB] shadow-xs flex items-center gap-1.5 transition-all cursor-pointer font-medium"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#EB5A23]" />
              <span>Zustand: {transitState === 'deformed' ? 'Elastisch verformt' : 'Ruheform'}</span>
            </button>
          </div>

          {/* Graphic Capillary Tube with Erythrocyte inside */}
          <div className="relative py-7 px-4 bg-white rounded-xl border border-[#D8CFCB] shadow-xs overflow-hidden flex flex-col items-center justify-center">
            {/* Endothelial Wall Top */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-rose-100/70 border-b border-rose-200/80 flex items-center px-4">
              <span className="text-[10px] text-rose-800 font-mono font-medium">Endothelwand (~0.5 µm)</span>
            </div>

            {/* Inner Channel */}
            <div className="flex items-center justify-around w-full py-4 gap-2">
              {/* Erythrocyte 1 (Approaching) */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#EB5A23] shadow-sm flex items-center justify-center text-xs font-bold text-white transition-all">
                  ~7.5 µm
                </div>
                <span className="text-[11px] text-[#6F6D73] mt-2 font-medium">Bikonkav (Ruhe)</span>
              </div>

              {/* Arrow */}
              <div className="text-[#948F93] font-mono text-xs flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-wider text-[#6F6D73]">Engpass</span>
                <span>→</span>
              </div>

              {/* Erythrocyte 2 (Inside Narrow Capillary) */}
              <div className="flex flex-col items-center text-center">
                <div
                  className={`transition-all duration-500 bg-gradient-to-b from-[#EB5A23] to-[#EF7D30] shadow-sm flex items-center justify-center text-[11px] font-bold text-white ${
                    transitState === 'deformed'
                      ? 'w-8 h-18 rounded-2xl scale-y-105'
                      : 'w-14 h-14 rounded-full'
                  }`}
                >
                  {transitState === 'deformed' ? '5.5 µm' : '7.5 µm'}
                </div>
                <span className="text-[11px] text-[#EB5A23] mt-2 font-semibold">
                  {transitState === 'deformed' ? 'Elastisch verformt' : 'Unverformt'}
                </span>
              </div>

              {/* Exchange Outflow Indicators */}
              <div className="flex flex-col gap-2 text-xs bg-[#ECE3DC]/50 p-2.5 rounded-lg border border-[#D8CFCB]">
                <div className="flex items-center gap-1.5 text-neutral-800 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>O₂ & Nährstoffe ins Gewebe</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                  <span>CO₂ & Stoffwechselabfall ab</span>
                </div>
              </div>
            </div>

            {/* Endothelial Wall Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-rose-100/70 border-t border-rose-200/80 flex items-center px-4">
              <span className="text-[10px] text-rose-800 font-mono font-medium">Kapillardurchmesser ~5–7 µm</span>
            </div>
          </div>

          <div className="text-xs text-[#6F6D73] flex flex-wrap items-center justify-between gap-2 pt-1">
            <span>Rote Blutzellen müssen sich verformen, um einzelne Kapillaren zu passieren.</span>
            <span className="font-mono text-[#EB5A23] font-semibold">Single-File Flow</span>
          </div>
        </div>

        {/* Right: Key Physiological Insights Cards */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-4 rounded-xl border border-[#D8CFCB] bg-[#ECE3DC]/25 space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#EB5A23]/15 text-[#EB5A23] flex items-center justify-center text-xs font-bold font-mono">
                1
              </div>
              <h4 className="text-sm font-bold text-[#171717]">
                Größendiskrepanz ist physiologisch
              </h4>
            </div>
            <p className="text-xs text-[#4B4A50] leading-relaxed">
              Erythrozyten messen im Ruhezustand rund <strong>7.5 µm</strong>. Die feinsten Kapillaren weisen jedoch nur <strong>5–7 µm</strong> Durchmesser auf.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#D8CFCB] bg-[#ECE3DC]/25 space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#EB5A23]/15 text-[#EB5A23] flex items-center justify-center text-xs font-bold font-mono">
                2
              </div>
              <h4 className="text-sm font-bold text-[#171717]">
                Erhöhte Austauschfläche
              </h4>
            </div>
            <p className="text-xs text-[#4B4A50] leading-relaxed">
              Durch die Verformung schmiegt sich die Zellmembran eng an die Gefäßinnenwand an. Dies verkürzt die Diffusionswege für Sauerstoff drastisch.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60 space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#EB5A23] text-white flex items-center justify-center text-xs font-bold font-mono">
                3
              </div>
              <h4 className="text-sm font-bold text-orange-950">
                Bedeutung der Fließeigenschaften
              </h4>
            </div>
            <p className="text-xs text-neutral-800 leading-relaxed">
              Stauungen, Verklebungen oder verminderte Membranverformbarkeit behindern die Passage und verringern die Versorgung im nachgelagerten Gewebe.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 p-3 rounded-xl bg-[#ECE3DC]/40 border border-[#D8CFCB] text-xs text-[#4B4A50] flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Didaktischer Kern:</strong> Der Engpass ist keine Störung, sondern die Voraussetzung für effiziente Diffusion.
          </span>
        </span>
        <span className="font-mono text-[11px] text-[#6F6D73] shrink-0">
          Physiologie des Gasaustauschs
        </span>
      </div>
    </div>
  );
}
