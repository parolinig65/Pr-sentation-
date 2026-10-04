import { SLIDE_ASSETS } from '../../data/slidesData';
import { Sparkles, ExternalLink, Info, Radio } from 'lucide-react';

export function Slide03Tesla() {
  return (
    <div className="w-full h-full min-h-[580px] p-6 md:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>Historischer Impuls</span>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Colorado Springs · 1900</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 tracking-tight font-display">
          Nikola Tesla und die Faszination für Frequenzen
        </h2>
        <p className="mt-1 text-sm md:text-base text-neutral-600">
          Ein spannender historischer Einstieg in die Frage, wie unsichtbare Schwingungen wirken.
        </p>
      </div>

      {/* Main Split Layout: Archival Photo + Quote & Historical Classification */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 items-center">
        {/* Left: Vintage Photo with Attribution Scrim */}
        <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-neutral-300 shadow-sm bg-neutral-950 group">
          <img
            src={SLIDE_ASSETS.tesla}
            alt="Nikola Tesla im Labor von Colorado Springs mit Magnifying Transmitter"
            className="w-full h-[280px] md:h-[320px] object-cover filter contrast-[1.05] sepia-[0.25]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute bottom-3 left-4 right-4 text-xs text-neutral-300 flex items-center justify-between">
            <span className="font-mono">Foto: Dickenson V. Alley, 1900</span>
            <span className="bg-black/60 px-2 py-0.5 rounded text-[11px] text-amber-200">
              Doppelbelichtung
            </span>
          </div>
        </div>

        {/* Right: The Famous Quote & Editorial Context */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
          <div className="relative p-6 rounded-xl bg-orange-50/50 border border-orange-200/70">
            <div className="text-5xl font-serif text-[#EB5A23]/30 absolute -top-4 left-3 select-none">
              “
            </div>
            <blockquote className="relative z-10 text-lg md:text-xl font-normal text-neutral-900 leading-snug italic font-display">
              „Willst du die Geheimnisse des Universums finden, denke in Begriffen von Energie, Frequenz und Schwingung.“
            </blockquote>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
                Nikola Tesla zugeschrieben
              </span>
              <span className="text-[11px] text-neutral-500 italic">
                Populärzitat · Kulturgeschichtlicher Impuls
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-700 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 uppercase tracking-wide">
              <Radio className="w-4 h-4 text-[#EB5A23]" />
              <span>Elektrische Schwingungen & Resonanz</span>
            </div>
            <p className="text-xs leading-relaxed text-neutral-600">
              In seinem bahnbrechenden Aufsatz von 1900 untersuchte Tesla elektrische Resonanzeffekte. Die Idee: Jedes biologische und physikalische System besitzt Eigenfrequenzen, über die Energie gezielt ausgetauscht werden kann.
            </p>
          </div>
        </div>
      </div>

      {/* Honest Scientific Classification & Source Links */}
      <div className="p-3.5 rounded-xl bg-neutral-100/80 border border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-neutral-500 shrink-0" />
          <span>
            <strong>Wichtig für die Einordnung:</strong> Kultureller Denkansatz zur Schwingungslehre, kein Evidenzbeleg für BEMER.
          </span>
        </div>

        <div className="flex items-center gap-4 text-neutral-500 shrink-0">
          <a
            href="https://teslauniverse.com/nikola-tesla/articles/problem-increasing-human-energy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 inline-flex items-center gap-1 transition-colors"
          >
            <span>Tesla Originalartikel 1900</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="https://commons.wikimedia.org/wiki/File:Tesla_Colorado_Springs_lab-Tesla_in_front_of_magnifying_coil.jpg"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 inline-flex items-center gap-1 transition-colors"
          >
            <span>Bildnachweis</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
