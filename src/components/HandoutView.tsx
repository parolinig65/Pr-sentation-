import { Printer, ArrowLeft, ExternalLink, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { SLIDES } from '../data/slidesData';

interface Props {
  onBackToPresentation: () => void;
}

export function HandoutView({ onBackToPresentation }: Props) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      {/* Handout Header & Action Bar */}
      <div className="no-print flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
        <button
          onClick={onBackToPresentation}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Zurück zur Präsentation</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#EB5A23] hover:bg-[#EF7D30] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Handout drucken / als PDF</span>
          </button>
        </div>
      </div>

      {/* Document Title Banner */}
      <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm mb-8">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#EB5A23] uppercase tracking-wider mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EB5A23]" />
          <span>Offizielles Begleit-Handout · BEMER HUMAN · EVOLINE</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight font-display">
          Mikrozirkulation, Frequenzen & Wohlbefinden
        </h1>
        <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-2xl">
          Strukturierte Übersicht aller 13 Folien, Gesprächsfragen, physiologischen Wirkmodelle und wissenschaftlichen Evidenzquellen.
        </p>
      </div>

      {/* Slides Summary List */}
      <div className="space-y-6">
        {SLIDES.map((slide) => (
          <div
            key={slide.id}
            className="p-6 rounded-xl bg-white border border-neutral-200/80 shadow-xs space-y-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#EB5A23] uppercase tracking-wider">
                  Folie {slide.slideNumber} · {slide.chapter}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                  {slide.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                {slide.id}/13
              </span>
            </div>

            {/* Core Dialogue Question */}
            <div className="p-3.5 rounded-lg bg-orange-50/60 border border-orange-200/60 text-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-900 font-mono block mb-1">
                Leitfrage / Impuls
              </span>
              <p className="text-neutral-900 font-semibold italic text-sm">
                {slide.speakerNotes.dialogueStarter}
              </p>
            </div>

            {/* Key Content & Action */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-neutral-700">
              <div className="space-y-1">
                <span className="font-semibold text-neutral-900 block">Kernaussage & Kontext</span>
                <p className="leading-relaxed text-neutral-600">
                  {slide.speakerNotes.actionGuide}
                </p>
              </div>

              {slide.speakerNotes.scientificCaution && (
                <div className="space-y-1 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                  <span className="font-semibold text-neutral-900 block">Wissenschaftliche Differenzierung</span>
                  <p className="leading-relaxed text-neutral-600">
                    {slide.speakerNotes.scientificCaution}
                  </p>
                </div>
              )}
            </div>

            {/* Citations if any */}
            {slide.sources && slide.sources.length > 0 && (
              <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-2 text-xs text-neutral-500">
                <span className="font-mono text-[11px]">Quellen:</span>
                {slide.sources.map((s, idx) => (
                  <span key={idx} className="font-mono text-neutral-700">
                    {s.label} {s.pmid ? `(PMID ${s.pmid})` : ''} {idx < slide.sources!.length - 1 ? '·' : ''}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Handout Footer */}
      <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© BEMER HUMAN · EVOLINE Schulungs- und Dialog-Unterlage</span>
        <span>Stand: 2026 · Medizinprodukt nach MDR</span>
      </div>
    </div>
  );
}
