import { X, MessageSquare, AlertCircle, ArrowRight, BookOpen, ShieldAlert, Sparkles } from 'lucide-react';
import { SlideData } from '../types/presentation';

interface Props {
  slide: SlideData;
  isOpen: boolean;
  onClose: () => void;
  onNextSlide: () => void;
}

export function SpeakerNotesDrawer({ slide, isOpen, onClose, onNextSlide }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white shadow-2xl border-l border-neutral-200 z-50 flex flex-col justify-between animate-in slide-in-from-right duration-200">
      {/* Drawer Header */}
      <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EB5A23]" />
          <span className="text-xs font-bold uppercase tracking-wider font-mono text-neutral-800">
            Sprechernotizen · Folie {slide.slideNumber}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/80 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="p-5 overflow-y-auto space-y-5 flex-1">
        {/* Slide Title Summary */}
        <div>
          <span className="text-[11px] font-mono text-[#EB5A23] uppercase font-semibold">
            {slide.chapter}
          </span>
          <h4 className="text-base font-bold text-neutral-900 mt-0.5">
            {slide.title}
          </h4>
        </div>

        {/* 1. Dialogue Starter */}
        <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-orange-950 uppercase tracking-wide">
            <MessageSquare className="w-3.5 h-3.5 text-[#EB5A23]" />
            <span>Gesprächseinstieg / Frage</span>
          </div>
          <p className="text-sm font-semibold text-neutral-900 italic leading-snug">
            {slide.speakerNotes.dialogueStarter}
          </p>
        </div>

        {/* 2. Action Guide */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
            Handlungsempfehlung & Haltung
          </span>
          <p className="text-xs text-neutral-700 leading-relaxed p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
            {slide.speakerNotes.actionGuide}
          </p>
        </div>

        {/* 3. Bridge to Next */}
        {slide.speakerNotes.bridgeToNext && (
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono flex items-center gap-1">
              <ArrowRight className="w-3.5 h-3.5 text-[#EB5A23]" />
              <span>Überleitung zur nächsten Folie</span>
            </span>
            <p className="text-xs text-neutral-800 leading-relaxed p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 font-medium">
              {slide.speakerNotes.bridgeToNext}
            </p>
          </div>
        )}

        {/* 4. Scientific Caution / Guardrail */}
        {slide.speakerNotes.scientificCaution && (
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-1">
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wide text-amber-800">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>Sorgfaltspflicht & Grenzen</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              {slide.speakerNotes.scientificCaution}
            </p>
          </div>
        )}

        {/* Sources linked to this slide */}
        {slide.sources && slide.sources.length > 0 && (
          <div className="pt-2 border-t border-neutral-200 space-y-2">
            <span className="text-[11px] font-mono uppercase text-neutral-400 font-semibold flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              <span>Hinterlegte Referenzen</span>
            </span>
            <ul className="space-y-1 text-xs text-neutral-600">
              {slide.sources.map((s, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{s.label}</span>
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#EB5A23] hover:underline font-mono text-[11px]"
                    >
                      Öffnen ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Drawer Footer Stepper */}
      <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-xs">
        <span className="text-neutral-500 font-mono">Taste N: Ausblenden</span>
        <button
          onClick={onNextSlide}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EB5A23] hover:bg-[#EF7D30] text-white font-medium transition-colors cursor-pointer"
        >
          <span>Nächste Folie</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
