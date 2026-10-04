import { useState } from 'react';
import { SLIDE_ASSETS } from '../../data/slidesData';
import { ChevronRight, ArrowRight, ShieldCheck, Layers } from 'lucide-react';

export function Slide04VascularTree() {
  const [selectedVessel, setSelectedVessel] = useState<number>(2); // Default to Kapillare

  const vessels = [
    {
      id: 0,
      name: "Arterie",
      metaphor: "Hauptstraße",
      role: "Transport von sauerstoffreichem Blut unter hohem Druck vom Herzen in die Peripherie.",
      dimension: "~4 – 25 mm Durchmesser",
      color: "border-red-500 text-red-700 bg-red-50/50",
      activeColor: "bg-red-600 text-white"
    },
    {
      id: 1,
      name: "Arteriole",
      metaphor: "Verzweigungsstraßen",
      role: "Präkapilläre Widerstandsgefäße mit glatter Muskulatur; regulieren den Zufluss in die Kapillaren.",
      dimension: "~20 – 100 µm Durchmesser",
      color: "border-red-400 text-red-600 bg-red-50/30",
      activeColor: "bg-red-500 text-white"
    },
    {
      id: 2,
      name: "Kapillare",
      metaphor: "Letzte Lieferstrecke",
      role: "Ort des tatsächlichen Stoffaustauschs: Sauerstoff und Nährstoffe zur Zelle, Abtransport von Metaboliten.",
      dimension: "~5 – 8 µm Durchmesser",
      color: "border-[#EB5A23] text-[#EB5A23] bg-orange-50/60 ring-2 ring-[#EB5A23]/30",
      activeColor: "bg-[#EB5A23] text-white"
    },
    {
      id: 3,
      name: "Venole",
      metaphor: "Sammlung & Rücklauf",
      role: "Nimmt das sauerstoffarme Blut aus dem Kapillarbett auf und leitet es in größere Gefäße zurück.",
      dimension: "~10 – 100 µm Durchmesser",
      color: "border-blue-400 text-blue-600 bg-blue-50/30",
      activeColor: "bg-blue-500 text-white"
    },
    {
      id: 4,
      name: "Vene",
      metaphor: "Rückweg zum Herzen",
      role: "Kapazitätsgefäße mit Venenklappen zur Verhinderung des Rückstroms in Richtung rechter Vorhof.",
      dimension: "~5 – 30 mm Durchmesser",
      color: "border-blue-600 text-blue-800 bg-blue-50/50",
      activeColor: "bg-blue-700 text-white"
    }
  ];

  return (
    <div className="w-full h-full min-h-[580px] p-6 md:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Gefäßanatomie</span>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Kardiovaskuläres System</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 tracking-tight font-display">
          Vom Herzen bis in die kleinsten Gefäße
        </h2>
        <p className="mt-1 text-sm md:text-base text-neutral-600">
          Ein riesiges Versorgungsnetz: Wie in einer Stadt zählt auch im Körper der Weg bis zur einzelnen Haustür.
        </p>
      </div>

      {/* Main Grid: Interactive Vascular Roadmap + Explanatory Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 items-center">
        {/* Left: Vascular Tree Step Sequence */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
              Flussrichtung des Blutes
            </span>
            <span className="text-xs text-neutral-400">Klicke ein Gefäß zur Detailansicht</span>
          </div>

          <div className="grid grid-cols-5 gap-1.5 p-1.5 bg-neutral-100 rounded-xl">
            {vessels.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVessel(v.id)}
                className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all cursor-pointer truncate ${
                  selectedVessel === v.id
                    ? `${v.activeColor} shadow-sm font-semibold`
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>

          {/* Detailed Selected Vessel Spotlight */}
          <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-neutral-900">
                  {vessels[selectedVessel].name}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-200/80 text-neutral-700 font-medium">
                  {vessels[selectedVessel].metaphor}
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                {vessels[selectedVessel].dimension}
              </span>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed">
              {vessels[selectedVessel].role}
            </p>

            <div className="pt-2 border-t border-neutral-200/80 flex items-center justify-between text-xs text-neutral-500">
              <span className="font-mono">
                Schritt {selectedVessel + 1} von 5 im Kreislauf
              </span>
              {selectedVessel === 2 && (
                <span className="text-[#EB5A23] font-semibold flex items-center gap-1">
                  ★ Fokus der BEMER Anwendung
                </span>
              )}
            </div>
          </div>

          {/* Pathway Flow Diagram Bar */}
          <div className="p-3 rounded-lg bg-orange-50/50 border border-orange-200/60 flex items-center justify-between text-xs text-neutral-700">
            <span className="font-medium text-neutral-900">Großgefäße</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-medium text-neutral-900">Arteriolen</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#EB5A23]" />
            <span className="font-bold text-[#EB5A23]">Mikrozirkulation (Kapillaren)</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-medium text-neutral-900">Venöser Rückstrom</span>
          </div>
        </div>

        {/* Right: Explanatory Anatomy Asset */}
        <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-900 group">
          <img
            src={SLIDE_ASSETS.vascular}
            alt="Verzweigung des menschlichen Gefäßnetzwerks von zentralen Gefäßen bis in die Kapillaren"
            className="w-full h-[260px] md:h-[300px] object-cover filter contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <div className="text-white text-sm font-semibold mb-1">
              Verzweigung bis zur Zelle
            </div>
            <div className="text-neutral-300 text-xs leading-relaxed">
              Vom Hochdrucktransport in den Arterien bis zum feinsten mikrovaskulären Austausch in den Kapillaren.
            </div>
          </div>
        </div>
      </div>

      {/* Honest Scientific Clarification Footnote */}
      <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <strong>Wissenschaftliche Sorgfalt:</strong> Illustrative Grafik. Bewusster Verzicht auf ungesicherte Schätzungen (wie „95–98% des Kreislaufs“ oder „3.000 Gefäße unter einer Stiftspitze“) ohne gesicherte Primärquelle.
        </span>
      </div>
    </div>
  );
}
