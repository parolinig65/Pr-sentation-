import { Flame, Plus, ArrowRight, BatteryCharging, Zap, CheckCircle2 } from 'lucide-react';

export function Slide06AtpMitochondria() {
  return (
    <div className="w-full h-full min-h-[560px] p-6 md:p-10 rounded-2xl bg-white border border-[#D8CFCB] shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Zellbiologie</span>
          </div>
          <span className="text-xs text-[#6F6D73] font-mono">Mitochondriale Respiration</span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#171717] tracking-tight font-display leading-tight">
          ATP: Energie für die Arbeit der Zelle
        </h2>
        <p className="mt-1.5 text-sm md:text-base text-[#4B4A50] leading-relaxed max-w-3xl">
          Der universelle Energieträger, mit dem unsere Körperzellen sämtliche Lebensprozesse antreiben.
        </p>
      </div>

      {/* Main Feature: The Cell as an Oven Analogy (Bright, warm, inviting BEMER design) */}
      <div className="my-auto p-6 md:p-8 rounded-2xl bg-[#ECE3DC]/30 border border-[#D8CFCB] shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-[#EB5A23] uppercase tracking-wider font-mono mb-4">
          <Flame className="w-4 h-4 text-[#EB5A23]" />
          <span>Didaktische Analogie: Stell dir die Zelle wie einen Ofen vor</span>
        </div>

        {/* Metabolic Equation Visual */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 items-center text-center">
          {/* Item 1: Nährstoffe */}
          <div className="p-4 rounded-xl bg-white border border-[#D8CFCB] shadow-xs md:col-span-2">
            <span className="text-[11px] text-[#6F6D73] uppercase font-mono tracking-wider font-semibold block">
              Brennstoff
            </span>
            <div className="text-lg font-bold text-[#171717] mt-1">Nährstoffe</div>
            <div className="text-xs text-[#4B4A50] mt-1 leading-normal">
              Glukose, Fettsäuren & Aminosäuren
            </div>
          </div>

          {/* Plus sign */}
          <div className="flex justify-center md:col-span-1">
            <div className="w-8 h-8 rounded-full bg-white border border-[#D8CFCB] shadow-xs flex items-center justify-center text-[#4B4A50]">
              <Plus className="w-4 h-4" />
            </div>
          </div>

          {/* Item 2: Sauerstoff */}
          <div className="p-4 rounded-xl bg-white border border-[#D8CFCB] shadow-xs md:col-span-2">
            <span className="text-[11px] text-[#EB5A23] uppercase font-mono tracking-wider font-semibold block">
              Zuluft
            </span>
            <div className="text-lg font-bold text-[#171717] mt-1">Sauerstoff (O₂)</div>
            <div className="text-xs text-[#4B4A50] mt-1 leading-normal">
              Über Erythrozyten in Kapillaren angeliefert
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center md:col-span-1">
            <div className="w-8 h-8 rounded-full bg-white border border-[#D8CFCB] shadow-xs flex items-center justify-center text-[#EB5A23]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Item 3: Mitochondrien & ATP */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#EB5A23] to-[#EF7D30] text-white shadow-md shadow-orange-500/15 md:col-span-1 flex flex-col justify-center">
            <div className="flex justify-center mb-1">
              <BatteryCharging className="w-6 h-6 text-white" />
            </div>
            <span className="text-[10px] text-orange-100 uppercase font-mono tracking-wider font-semibold">
              Mitochondrien
            </span>
            <div className="text-2xl font-black text-white mt-0.5 tracking-tight">ATP</div>
            <span className="text-[10px] text-orange-100 font-medium">Zellenergie</span>
          </div>
        </div>

        {/* Subtitle explanation */}
        <div className="mt-5 pt-4 border-t border-[#D8CFCB]/80 flex flex-col sm:flex-row items-center justify-between text-xs text-[#4B4A50] gap-3">
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#EB5A23] shrink-0" />
            <span>ATP (Adenosintriphosphat) ermöglicht Muskelarbeit, Immunabwehr, Gewebereparatur und Regeneration.</span>
          </span>
          <span className="text-[#EB5A23] font-mono font-semibold shrink-0">
            Oxidative Phosphorylierung
          </span>
        </div>
      </div>

      {/* Two Contextual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="p-4 rounded-xl bg-[#ECE3DC]/25 border border-[#D8CFCB] text-xs text-[#4B4A50] leading-relaxed">
          <strong className="text-[#171717] block font-semibold mb-1 text-sm">
            Biologische Notwendigkeit
          </strong>
          Ohne kontinuierliche Mikrozirkulation fehlt der Nachschub an Sauerstoff und Nährstoffen. Die Mitochondrien können ihre ATP-Synthese nur bei ausreichender Kapillardurchblutung aufrechterhalten.
        </div>

        <div className="p-4 rounded-xl bg-[#ECE3DC]/25 border border-[#D8CFCB] text-xs text-[#4B4A50] leading-relaxed">
          <strong className="text-[#171717] block font-semibold mb-1 text-sm">
            Wissenschaftliche Einordnung
          </strong>
          Gute Mikrozirkulation ist die biologische Grundvoraussetzung für Zellarbeit. ATP beschreibt die körpereigene Zellenergie, kein isoliertes Heilversprechen.
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 rounded-xl bg-[#ECE3DC]/40 border border-[#D8CFCB] text-xs text-[#4B4A50] flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Kernaussage:</strong> Die Zelle braucht beides – Brennstoff und Sauerstoff – transportiert durch die Mikrozirkulation.
          </span>
        </span>
        <span className="font-mono text-[11px] text-[#6F6D73] shrink-0">
          Atmungskette & Stoffwechsel
        </span>
      </div>
    </div>
  );
}
