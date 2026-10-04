import { useState } from 'react';
import { Music, Volume2, Wifi, Zap, AlertTriangle, HelpCircle, ExternalLink } from 'lucide-react';

export function Slide02Frequencies() {
  const [activeCategory, setActiveCategory] = useState<'pleasant' | 'stressful' | 'invisible'>('pleasant');

  return (
    <div className="w-full h-full min-h-[580px] p-6 md:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>Alltägliche Wahrnehmung</span>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Resonanz & Schwingung</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 tracking-tight font-display">
          Signale, Schwingungen und Frequenzen im Alltag
        </h2>

        <p className="mt-2 text-sm md:text-base text-neutral-600">
          Frequenzen begegnen uns ununterbrochen – manche nehmen wir bewusst wahr, andere prägen uns unbemerkt.
        </p>
      </div>

      {/* Interactive Question Banner */}
      <div className="my-5 p-4 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-[#EB5A23] shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-semibold text-orange-950 uppercase tracking-wide">Gesprächsfrage</span>
          <p className="text-sm text-neutral-900 font-medium mt-0.5">
            „Bei welchen Frequenzen denkst du spontan an etwas Angenehmes und bei welchen an Belastung?“
          </p>
        </div>
      </div>

      {/* Three Pillars Grid with Interactive Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
        {/* Angenehm */}
        <div
          onClick={() => setActiveCategory('pleasant')}
          className={`p-5 rounded-xl border transition-all cursor-pointer ${
            activeCategory === 'pleasant'
              ? 'border-emerald-500 bg-emerald-50/40 shadow-sm ring-1 ring-emerald-500/30'
              : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">
              Angenehm
            </span>
            <Music className="w-4 h-4 text-emerald-600" />
          </div>

          <ul className="space-y-2 text-sm text-neutral-800">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Musik & Melodien</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Vogelstimmen im Wald</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Eine vertraute Stimme</span>
            </li>
          </ul>

          <div className="mt-4 pt-3 border-t border-neutral-200/60 text-xs text-neutral-500">
            Akustische Wellen, die Entspannung und Geborgenheit triggern.
          </div>
        </div>

        {/* Belastend */}
        <div
          onClick={() => setActiveCategory('stressful')}
          className={`p-5 rounded-xl border transition-all cursor-pointer ${
            activeCategory === 'stressful'
              ? 'border-amber-500 bg-amber-50/40 shadow-sm ring-1 ring-amber-500/30'
              : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold tracking-wider uppercase text-amber-800">
              Belastend
            </span>
            <AlertTriangle className="w-4 h-4 text-amber-600" />
          </div>

          <ul className="space-y-2 text-sm text-neutral-800">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Verkehrslärm & Motoren</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Schriller Alarm & Sirenen</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Baustellenlärm & Presslufthammer</span>
            </li>
          </ul>

          <div className="mt-4 pt-3 border-t border-neutral-200/60 text-xs text-neutral-500">
            Akustische Stressoren; WHO belegt Lärm als Risikofaktor.
          </div>
        </div>

        {/* Unsichtbar, aber vertraut */}
        <div
          onClick={() => setActiveCategory('invisible')}
          className={`p-5 rounded-xl border transition-all cursor-pointer ${
            activeCategory === 'invisible'
              ? 'border-[#EB5A23] bg-orange-50/40 shadow-sm ring-1 ring-[#EB5A23]/30'
              : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold tracking-wider uppercase text-[#EB5A23]">
              Unsichtbar, aber vertraut
            </span>
            <Wifi className="w-4 h-4 text-[#EB5A23]" />
          </div>

          <ul className="space-y-2 text-sm text-neutral-800">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB5A23]" />
              <span>WLAN & Mobilfunk</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB5A23]" />
              <span>Stromnetz (50 Hz)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB5A23]" />
              <span>Sichtbares Licht & Infrarot</span>
            </li>
          </ul>

          <div className="mt-4 pt-3 border-t border-neutral-200/60 text-xs text-neutral-500">
            Elektromagnetische Felder, die wir täglich wie selbstverständlich nutzen.
          </div>
        </div>
      </div>

      {/* The Central Provocative Hook Box */}
      <div className="mt-4 p-5 rounded-xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#EB5A23]/20 flex items-center justify-center text-[#EB5A23] shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-orange-400 font-semibold font-mono">
              Die Kernfrage für den weiteren Dialog
            </span>
            <p className="text-sm md:text-base text-neutral-100 font-medium">
              Warum vertrauen wir manchen unsichtbaren Signalen und sind bei Magnetfeldern am Körper skeptisch?
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <a
            href="https://www.who.int/europe/health-topics/noise"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <span>WHO Übersicht Lärm</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Footer context */}
      <div className="mt-4 pt-3 border-t border-neutral-200 text-xs text-neutral-500 flex flex-wrap items-center justify-between gap-2">
        <span>
          Physikalische Differenzierung: Schall = Druckwelle; WLAN/Licht = Elektromagnetisches Spektrum.
        </span>
        <span className="italic">
          Einladung zum Gespräch – kein pauschales Urteil über Frequenzen.
        </span>
      </div>
    </div>
  );
}
