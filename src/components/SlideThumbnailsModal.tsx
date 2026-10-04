import { X, Check } from 'lucide-react';
import { SlideData } from '../types/presentation';

interface Props {
  slides: SlideData[];
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (id: number) => void;
}

export function SlideThumbnailsModal({ slides, currentSlide, isOpen, onClose, onSelectSlide }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/80">
          <div>
            <h3 className="text-base font-bold text-neutral-900 font-display">
              Folienübersicht · BEMER HUMAN · EVOLINE
            </h3>
            <p className="text-xs text-neutral-500">
              Klicke auf eine Folie, um direkt dorthin zu springen.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/80 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnails Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {slides.map((s) => (
            <div
              key={s.id}
              onClick={() => {
                onSelectSlide(s.id);
                onClose();
              }}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer group flex flex-col justify-between h-40 ${
                currentSlide === s.id
                  ? 'border-[#EB5A23] bg-orange-50/40 ring-2 ring-[#EB5A23]/30 shadow-md'
                  : 'border-neutral-200 hover:border-neutral-400 bg-white hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#EB5A23]">
                    {s.slideNumber}
                  </span>
                  {currentSlide === s.id ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EB5A23] text-white font-medium flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Aktiv
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-neutral-400">
                      {s.chapter}
                    </span>
                  )}
                </div>

                <h4 className="text-xs font-semibold text-neutral-900 line-clamp-2 leading-snug group-hover:text-[#EB5A23] transition-colors">
                  {s.title}
                </h4>
              </div>

              <div className="pt-2 border-t border-neutral-100 text-[11px] text-neutral-500 truncate">
                {s.subtitle || s.speakerNotes.dialogueStarter}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
