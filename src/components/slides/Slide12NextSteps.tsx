import { Activity, LayoutGrid, FileSearch, ArrowRight, HelpCircle, Stethoscope } from 'lucide-react';

interface Props {
  onNavigateToSlide: (slideId: number) => void;
}

export function Slide12NextSteps({ onNavigateToSlide }: Props) {
  return (
    <div className="w-full h-full min-h-[580px] p-6 md:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>12</span>
            <span aria-hidden="true">·</span>
            <span>Dialog & Vertiefung</span>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Entscheidungsweg</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 tracking-tight font-display">
          Was möchtest du als Nächstes wissen?
        </h2>
        <p className="mt-1 text-sm md:text-base text-neutral-600">
          Was davon ist für dich gerade am spannendsten? Dann schauen wir genau dort gemeinsam weiter.
        </p>
      </div>

      {/* Main 3 Interactive Decision Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
        {/* Track 1: Wirkweise */}
        <div
          onClick={() => onNavigateToSlide(7)}
          className="p-6 rounded-xl border border-neutral-200 hover:border-[#EB5A23] bg-white hover:bg-orange-50/20 transition-all cursor-pointer group shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-orange-100/80 text-[#EB5A23] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Themenfeld 01
            </span>
            <h3 className="text-xl font-bold text-neutral-900 mt-1 mb-2 group-hover:text-[#EB5A23] transition-colors">
              Wirkweise
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Mikrozirkulation, Vasomotionsrhythmus, ATP-Synthese in den Mitochondrien und der mikroskopische Vitalfilm.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#EB5A23]">
            <span>Zur Vasomotion & Film springen</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Track 2: Anwendung */}
        <div
          onClick={() => onNavigateToSlide(10)}
          className="p-6 rounded-xl border border-neutral-200 hover:border-[#EB5A23] bg-white hover:bg-orange-50/20 transition-all cursor-pointer group shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <LayoutGrid className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Themenfeld 02
            </span>
            <h3 className="text-xl font-bold text-neutral-900 mt-1 mb-2 group-hover:text-[#EB5A23] transition-colors">
              Anwendung
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Das BEMER EvoLine System, B.Body Evo Ganzkörpermatte, 2 × 8 Minuten Tagesroutine und Bedienkomfort.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:text-[#EB5A23]">
            <span>Zur Geräteanwendung springen</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Track 3: Studien */}
        <div
          onClick={() => onNavigateToSlide(11)}
          className="p-6 rounded-xl border border-neutral-200 hover:border-[#EB5A23] bg-white hover:bg-orange-50/20 transition-all cursor-pointer group shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <FileSearch className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Themenfeld 03
            </span>
            <h3 className="text-xl font-bold text-neutral-900 mt-1 mb-2 group-hover:text-[#EB5A23] transition-colors">
              Studien
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Publikationen zu Schlaf & Regeneration bei Spitzensportlerinnen, Pilotstudien und der Ausblick auf Folgestudien.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:text-[#EB5A23]">
            <span>Zur wissenschaftlichen Evidenz springen</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      {/* Speaker Guidance & Medical Advisory Note */}
      <div className="p-3.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#EB5A23] shrink-0" />
          <span>
            <strong>Gesprächsleitfaden:</strong> Frage das Gegenüber, was es dazu bewegt hat, sich mit dem Thema zu beschäftigen, und was es noch klären möchte.
          </span>
        </div>

        <div className="flex items-center gap-2 text-neutral-500 shrink-0">
          <Stethoscope className="w-3.5 h-3.5 text-neutral-400" />
          <span>Bei Vorerkrankungen oder Kontraindikationen stets an behandelnde Ärzte verweisen.</span>
        </div>
      </div>
    </div>
  );
}
