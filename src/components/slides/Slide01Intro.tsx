import { useState } from 'react';
import { SLIDE_ASSETS } from '../../data/slidesData';
import { Heart, Activity, ArrowRight, MessageCircle } from 'lucide-react';

interface Props {
  onNextSlide: () => void;
}

export function Slide01Intro({ onNextSlide }: Props) {
  const [showBridge, setShowBridge] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[580px] rounded-2xl overflow-hidden shadow-sm border border-neutral-200/80 bg-white flex flex-col justify-between">
      {/* Background Image with soft gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={SLIDE_ASSETS.vitalAging}
          alt="Vitales und gesundes Altern in natürlichem Licht"
          className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
      </div>

      {/* Top Quiet Brand Indicator */}
      <div className="relative z-10 p-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EB5A23]" />
          <span className="text-white/90 text-xs font-semibold tracking-widest uppercase font-mono">
            BEMER HUMAN · EVOLINE
          </span>
        </div>
        <span className="text-xs font-mono text-white/70 tracking-wider">
          01 / 13
        </span>
      </div>

      {/* Central Content - The authentic original question */}
      <div className="relative z-10 px-8 md:px-16 max-w-4xl mx-auto my-auto text-center">
        <div className="inline-flex items-center gap-2 text-white/80 text-xs tracking-wider uppercase mb-6 font-medium bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          <MessageCircle className="w-3.5 h-3.5 text-[#EB5A23]" />
          <span>Gesprächseinstieg</span>
        </div>

        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight font-display drop-shadow-md text-balance">
          „Was bedeutet für dich, <br />
          <span className="font-semibold text-white underline decoration-[#EB5A23] decoration-4 underline-offset-8">
            gesund und vital
          </span>{' '}
          älter zu werden?“
        </blockquote>

        <p className="mt-6 text-base md:text-lg text-white/85 font-normal max-w-xl mx-auto">
          Ein offener Gedankenaustausch über Lebensqualität, Energie und das, was uns täglich antreibt.
        </p>

        {/* Presenter Bridge Action */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {!showBridge ? (
            <button
              onClick={() => setShowBridge(true)}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/90 hover:bg-white text-neutral-900 font-medium text-sm transition-all shadow-lg hover:shadow-xl backdrop-blur-sm cursor-pointer"
            >
              <span>Brücke zur Mikrozirkulation schlagen</span>
              <ArrowRight className="w-4 h-4 text-[#EB5A23] transition-transform group-hover:translate-x-1" />
            </button>
          ) : (
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-xl border border-white shadow-2xl text-left max-w-xl transition-all animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider mb-2">
                <Activity className="w-4 h-4" />
                <span>Der biologische Schlüssel</span>
              </div>
              <p className="text-neutral-800 text-sm leading-relaxed">
                Vitalität und Leistungsfähigkeit beginnen tief in unserem Inneren: Dort, wo Billionen Zellen ununterbrochen mit Sauerstoff und Nährstoffen versorgt werden müssen – in der <strong>Mikrozirkulation</strong>.
              </p>
              <div className="mt-3.5 flex justify-end">
                <button
                  onClick={onNextSlide}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#EB5A23] hover:bg-[#EF7D30] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  <span>Zu Schwingungen im Alltag</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Subdued Bar */}
      <div className="relative z-10 px-8 py-5 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
        <span className="flex items-center gap-2">
          <Heart className="w-3.5 h-3.5 text-[#EB5A23]" />
          Wertegespräch: Zuhören · Verstehen · Vertiefen
        </span>
        <span className="hidden sm:inline">
          Bildfolie ohne überflüssige Überschrift
        </span>
      </div>
    </div>
  );
}
