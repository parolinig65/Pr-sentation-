import { useState } from 'react';
import { Waves, Clock, ShieldAlert, Check, ExternalLink, Zap } from 'lucide-react';

export function Slide09WaveformComparison() {
  const [selectedSignal, setSelectedSignal] = useState<'bemer' | 'conventional'>('bemer');

  return (
    <div className="w-full h-full min-h-[580px] p-6 md:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>09</span>
            <span aria-hidden="true">·</span>
            <span>Signalcharakteristik</span>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Impulsaufbau & Wirkdauer</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 tracking-tight font-display">
          Magnetfeld ist nicht gleich Magnetfeld
        </h2>
        <p className="mt-1 text-sm md:text-base text-neutral-600">
          Entscheidend ist, <strong>wie</strong> ein Signal aufgebaut ist – nicht bloße Feldstärke.
        </p>
      </div>

      {/* Main Grid: Interactive Signal Wave Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
        {/* Card 1: Herkömmliche Systeme */}
        <div
          onClick={() => setSelectedSignal('conventional')}
          className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
            selectedSignal === 'conventional'
              ? 'border-neutral-900 bg-neutral-50 shadow-md ring-1 ring-neutral-900'
              : 'border-neutral-200 hover:border-neutral-300 bg-white'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold tracking-wider uppercase text-neutral-500 font-mono">
                Herkömmliche Systeme
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-neutral-200 text-neutral-700">
                Klassischer Impuls
              </span>
            </div>

            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Hohe Intensität, kurzzeitiger Reiz
            </h3>

            <ul className="space-y-2.5 text-xs text-neutral-700 my-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1 shrink-0" />
                <span>Oft schnell und kräftig wahrgenommen (Kribbeln oder Muskelzucken)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1 shrink-0" />
                <span>Kurzer, stufenartig gesetzter Reizverlauf („Quick in, quick out“)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1 shrink-0" />
                <span>Reine Feldstärke steht oft im Vordergrund statt physiologischer Rhythmus</span>
              </li>
            </ul>
          </div>

          {/* SVG Waveform: Conventional Sharp Spike */}
          <div className="p-3 bg-neutral-900 rounded-lg text-neutral-400 text-xs">
            <div className="text-[10px] font-mono text-neutral-400 mb-1">Signalform (stilisierte Spitzen)</div>
            <svg viewBox="0 0 300 60" className="w-full h-12 stroke-current">
              <path
                d="M 0 30 L 40 30 L 50 5 L 60 55 L 70 30 L 130 30 L 140 5 L 150 55 L 160 30 L 220 30 L 230 5 L 240 55 L 250 30 L 300 30"
                fill="none"
                stroke="#a3a3a3"
                strokeWidth="2"
              />
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
              <span>Kurze Einwirkungsphase</span>
              <span>Rasches Abklingen</span>
            </div>
          </div>
        </div>

        {/* Card 2: BEMER-Signalform */}
        <div
          onClick={() => setSelectedSignal('bemer')}
          className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
            selectedSignal === 'bemer'
              ? 'border-[#EB5A23] bg-orange-50/40 shadow-md ring-1 ring-[#EB5A23]'
              : 'border-neutral-200 hover:border-neutral-300 bg-white'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold tracking-wider uppercase text-[#EB5A23] font-mono">
                BEMER Signalform
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EB5A23] text-white font-medium">
                Patentierte Impulsstruktur
              </span>
            </div>

            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Niedrige Intensität, rhythmisch moduliert
            </h3>

            <ul className="space-y-2.5 text-xs text-neutral-700 my-4">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#EB5A23] shrink-0 mt-0.5" />
                <span>Physiologisch sanfter Verlauf – orientiert an körpereigenen Rhythmen</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#EB5A23] shrink-0 mt-0.5" />
                <span>Niedrige Flussdichte (Mikrotesla-Bereich), dadurch sehr gut verträglich</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#EB5A23] shrink-0 mt-0.5" />
                <span>
                  <strong>Herstellerangabe:</strong> Nachwirkung auf die Mikrozirkulation bis zu 16 Stunden
                </span>
              </li>
            </ul>
          </div>

          {/* SVG Waveform: BEMER Exponential Rhythm Wave */}
          <div className="p-3 bg-neutral-950 rounded-lg text-white text-xs border border-orange-950">
            <div className="text-[10px] font-mono text-orange-400 mb-1 flex items-center justify-between">
              <span>BEMER Impulsmuster (Biorhythmisch)</span>
              <span className="text-emerald-400">Bis zu 16 Std. Nachwirkung</span>
            </div>
            <svg viewBox="0 0 300 60" className="w-full h-12">
              <path
                d="M 0 35 C 20 35, 30 34, 40 30 C 50 25, 55 10, 60 5 C 65 35, 75 35, 90 35 C 110 35, 120 34, 130 30 C 140 25, 145 10, 150 5 C 155 35, 165 35, 180 35 C 200 35, 210 34, 220 30 C 230 25, 235 10, 240 5 C 245 35, 255 35, 300 35"
                fill="none"
                stroke="#EB5A23"
                strokeWidth="2.5"
              />
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
              <span>Sanfter physiologischer Anstieg</span>
              <span>Nachhaltiger Rhythmus</span>
            </div>
          </div>
        </div>
      </div>

      {/* Honest Scientific Classification Footnote */}
      <div className="p-3.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>
          <strong>Wissenschaftlicher Hinweis:</strong> Konzeptionelle Gegenüberstellung der Signalcharakteristika und Wirkmodelle aus den Schulungsunterlagen; keine vergleichende Head-to-Head klinische Wirksamkeitsstudie gegenüber allen Marktsystemen. Die 12–16 Stunden Nachwirkung ist eine BEMER-Herstellerangabe.
        </span>
        <a
          href="https://bemergroup.com/de_LI/human-line/wissenschaft/wissenschaft-uebersicht/"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-700 hover:text-[#EB5A23] inline-flex items-center gap-1 font-mono transition-colors shrink-0"
        >
          <span>Wissenschaftliche Übersicht</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
