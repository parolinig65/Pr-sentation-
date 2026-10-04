import { Maximize2, Minimize2, BookOpen, Grid, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { ViewMode } from '../types/presentation';

interface Props {
  currentSlide: number;
  totalSlides: number;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  showSpeakerNotes: boolean;
  setShowSpeakerNotes: (show: boolean) => void;
  onPrev: () => void;
  onNext: () => void;
  onJumpToSlide: (id: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export function TopBar({
  currentSlide,
  totalSlides,
  viewMode,
  setViewMode,
  showSpeakerNotes,
  setShowSpeakerNotes,
  onPrev,
  onNext,
  onJumpToSlide,
  isFullscreen,
  onToggleFullscreen,
}: Props) {
  return (
    <header className="h-16 px-4 md:px-8 border-b border-neutral-200/90 bg-white/95 backdrop-blur-md flex items-center justify-between sticky top-0 z-30 select-none">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onJumpToSlide(1);
          }}
          className="text-base md:text-lg font-bold tracking-tight text-neutral-900 font-display flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#EB5A23]" />
          <span>BEMER HUMAN · EVOLINE</span>
        </a>
      </div>

      {/* Zone 2: 4-6 clean text navigation chapter links */}
      <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-neutral-600">
        <button
          onClick={() => onJumpToSlide(1)}
          className={`hover:text-neutral-900 transition-colors cursor-pointer ${
            currentSlide === 1 ? 'text-[#EB5A23] font-semibold' : ''
          }`}
        >
          Einstieg
        </button>
        <button
          onClick={() => onJumpToSlide(2)}
          className={`hover:text-neutral-900 transition-colors cursor-pointer ${
            currentSlide >= 2 && currentSlide <= 3 ? 'text-[#EB5A23] font-semibold' : ''
          }`}
        >
          Frequenzen & Tesla
        </button>
        <button
          onClick={() => onJumpToSlide(4)}
          className={`hover:text-neutral-900 transition-colors cursor-pointer ${
            currentSlide >= 4 && currentSlide <= 6 ? 'text-[#EB5A23] font-semibold' : ''
          }`}
        >
          Gefäßnetz & ATP
        </button>
        <button
          onClick={() => onJumpToSlide(7)}
          className={`hover:text-neutral-900 transition-colors cursor-pointer ${
            currentSlide >= 7 && currentSlide <= 8 ? 'text-[#EB5A23] font-semibold' : ''
          }`}
        >
          Vasomotion & Film
        </button>
        <button
          onClick={() => onJumpToSlide(9)}
          className={`hover:text-neutral-900 transition-colors cursor-pointer ${
            currentSlide >= 9 && currentSlide <= 10 ? 'text-[#EB5A23] font-semibold' : ''
          }`}
        >
          Signal & B.Body Evo
        </button>
        <button
          onClick={() => onJumpToSlide(11)}
          className={`hover:text-neutral-900 transition-colors cursor-pointer ${
            currentSlide >= 11 ? 'text-[#EB5A23] font-semibold' : ''
          }`}
        >
          Studien & Dialog
        </button>
      </nav>

      {/* Zone 3: Primary actions & Controls */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Slide navigation quick stepper */}
        <div className="flex items-center bg-neutral-100 rounded-lg p-1 text-xs font-mono">
          <button
            onClick={onPrev}
            disabled={currentSlide <= 1}
            className="p-1 rounded hover:bg-white text-neutral-700 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer transition-colors"
            title="Vorherige Folie (Pfeil links)"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="px-2 font-medium text-neutral-800">
            {String(currentSlide).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
          </span>
          <button
            onClick={onNext}
            disabled={currentSlide >= totalSlides}
            className="p-1 rounded hover:bg-white text-neutral-700 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer transition-colors"
            title="Nächste Folie (Pfeil rechts)"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* View Mode Switcher */}
        <div className="hidden sm:flex items-center bg-neutral-100 rounded-lg p-1 text-xs">
          <button
            onClick={() => setViewMode('slideshow')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer font-medium ${
              viewMode === 'slideshow' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Folie
          </button>
          <button
            onClick={() => setViewMode('handout')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer font-medium flex items-center gap-1 ${
              viewMode === 'handout' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <FileText className="w-3 h-3 text-[#EB5A23]" />
            <span>Handout</span>
          </button>
          <button
            onClick={() => setViewMode('overview')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer font-medium flex items-center gap-1 ${
              viewMode === 'overview' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Grid className="w-3 h-3" />
            <span>Übersicht</span>
          </button>
        </div>

        {/* Speaker notes toggle */}
        <button
          onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
            showSpeakerNotes
              ? 'bg-[#EB5A23] text-white shadow-xs'
              : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
          }`}
          title="Sprecherhinweise ein-/ausblenden (Taste: N)"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Sprechernotizen</span>
        </button>

        {/* Fullscreen button */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
          title={isFullscreen ? 'Vollbild beenden' : 'Vollbild (F11)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
}
