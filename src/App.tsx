/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './data/slidesData';
import { ViewMode } from './types/presentation';
import { TopBar } from './components/TopBar';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { SlideThumbnailsModal } from './components/SlideThumbnailsModal';
import { HandoutView } from './components/HandoutView';

// Individual Slide Components
import { Slide01Intro } from './components/slides/Slide01Intro';
import { Slide02Frequencies } from './components/slides/Slide02Frequencies';
import { Slide03Tesla } from './components/slides/Slide03Tesla';
import { Slide04VascularTree } from './components/slides/Slide04VascularTree';
import { Slide05Capillaries } from './components/slides/Slide05Capillaries';
import { Slide06AtpMitochondria } from './components/slides/Slide06AtpMitochondria';
import { Slide07Vasomotion } from './components/slides/Slide07Vasomotion';
import { Slide08MicroscopyVideo } from './components/slides/Slide08MicroscopyVideo';
import { Slide09WaveformComparison } from './components/slides/Slide09WaveformComparison';
import { Slide10EvoLineSystem } from './components/slides/Slide10EvoLineSystem';
import { Slide11AthletesResearch } from './components/slides/Slide11AthletesResearch';
import { Slide12NextSteps } from './components/slides/Slide12NextSteps';
import { Slide13Sources } from './components/slides/Slide13Sources';

import { ChevronLeft, ChevronRight, HelpCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<ViewMode>('slideshow');
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES.find((s) => s.id === currentSlideId) || SLIDES[0];

  const handleNext = useCallback(() => {
    setCurrentSlideId((prev) => Math.min(prev + 1, totalSlides));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlideId((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleJumpToSlide = useCallback((id: number) => {
    if (id >= 1 && id <= totalSlides) {
      setCurrentSlideId(id);
      setViewMode('slideshow');
    }
  }, [totalSlides]);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowSpeakerNotes((prev) => !prev);
      } else if (e.key === 'g' || e.key === 'G' || e.key === 'o' || e.key === 'O') {
        setShowThumbnails((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShowSpeakerNotes(false);
        setShowThumbnails(false);
      } else if (e.key >= '1' && e.key <= '9') {
        const targetId = parseInt(e.key, 10);
        if (targetId <= totalSlides) {
          handleJumpToSlide(targetId);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleJumpToSlide, totalSlides]);

  // Fullscreen state listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Render active slide component
  const renderCurrentSlideComponent = () => {
    switch (currentSlideId) {
      case 1:
        return <Slide01Intro onNextSlide={handleNext} />;
      case 2:
        return <Slide02Frequencies />;
      case 3:
        return <Slide03Tesla />;
      case 4:
        return <Slide04VascularTree />;
      case 5:
        return <Slide05Capillaries />;
      case 6:
        return <Slide06AtpMitochondria />;
      case 7:
        return <Slide07Vasomotion onGoToFilm={() => handleJumpToSlide(8)} />;
      case 8:
        return <Slide08MicroscopyVideo />;
      case 9:
        return <Slide09WaveformComparison />;
      case 10:
        return <Slide10EvoLineSystem />;
      case 11:
        return <Slide11AthletesResearch />;
      case 12:
        return <Slide12NextSteps onNavigateToSlide={handleJumpToSlide} />;
      case 13:
        return <Slide13Sources />;
      default:
        return <Slide01Intro onNextSlide={handleNext} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100/70 text-neutral-900 flex flex-col font-sans">
      {/* 3-Zone Top Navigation Contract */}
      <TopBar
        currentSlide={currentSlideId}
        totalSlides={totalSlides}
        viewMode={viewMode}
        setViewMode={(mode) => {
          setViewMode(mode);
          if (mode === 'overview') {
            setShowThumbnails(true);
          }
        }}
        showSpeakerNotes={showSpeakerNotes}
        setShowSpeakerNotes={setShowSpeakerNotes}
        onPrev={handlePrev}
        onNext={handleNext}
        onJumpToSlide={handleJumpToSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Progress Bar */}
      <div className="w-full bg-neutral-200 h-1">
        <div
          className="bg-[#EB5A23] h-full transition-all duration-300 ease-out"
          style={{ width: `${(currentSlideId / totalSlides) * 100}%` }}
        />
      </div>

      {/* Main View Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-3 md:p-6 lg:p-8 max-w-7xl w-full mx-auto">
        {viewMode === 'handout' ? (
          <HandoutView onBackToPresentation={() => setViewMode('slideshow')} />
        ) : (
          <div className="w-full flex-1 flex flex-col justify-center">
            {/* The Slide Frame (Responsive, flexible container that never crushes text) */}
            <div className="w-full max-w-6xl mx-auto min-h-[560px] flex flex-col transition-all">
              {renderCurrentSlideComponent()}
            </div>

            {/* Bottom Keyboard & Presentation Help Ticker */}
            <div className="mt-4 px-2 flex flex-wrap items-center justify-between text-xs text-neutral-500 font-mono select-none">
              <div className="flex items-center gap-4">
                <span>
                  Tastatur: <kbd className="bg-neutral-200/80 px-1.5 py-0.5 rounded text-neutral-700">←</kbd>{' '}
                  <kbd className="bg-neutral-200/80 px-1.5 py-0.5 rounded text-neutral-700">→</kbd> Blättern
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">
                  <kbd className="bg-neutral-200/80 px-1.5 py-0.5 rounded text-neutral-700">N</kbd> Notizen
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">
                  <kbd className="bg-neutral-200/80 px-1.5 py-0.5 rounded text-neutral-700">G</kbd> Übersicht
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-neutral-600">BEMER Brand Voice: Weiß & Orange</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Slide Thumbnails Grid Modal */}
      <SlideThumbnailsModal
        slides={SLIDES}
        currentSlide={currentSlideId}
        isOpen={showThumbnails}
        onClose={() => {
          setShowThumbnails(false);
          if (viewMode === 'overview') setViewMode('slideshow');
        }}
        onSelectSlide={handleJumpToSlide}
      />

      {/* Speaker Notes Drawer */}
      <SpeakerNotesDrawer
        slide={currentSlide}
        isOpen={showSpeakerNotes}
        onClose={() => setShowSpeakerNotes(false)}
        onNextSlide={handleNext}
      />
    </div>
  );
}
