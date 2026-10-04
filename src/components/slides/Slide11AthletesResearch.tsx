import { SLIDE_ASSETS } from '../../data/slidesData';
import { ExternalLink, Trophy, Moon, Award, AlertCircle, FileText } from 'lucide-react';

export function Slide11AthletesResearch() {
  return (
    <div className="w-full h-full min-h-[580px] p-6 md:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>11</span>
            <span aria-hidden="true">·</span>
            <span>Spitzensport & Forschung</span>
          </div>
          <span className="text-xs text-neutral-400 font-mono">Schlaf & Regeneration</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 tracking-tight font-display">
          Sportlerinnen im Blick: Schlaf und Regeneration
        </h2>
        <p className="mt-1 text-sm md:text-base text-neutral-600">
          Wissenschaftliche Beobachtungen bei 21 norwegischen Spitzenfußballerinnen.
        </p>
      </div>

      {/* Main Grid: Athletes Photo + Two Clear Research Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 items-center">
        {/* Left: Athletes Image */}
        <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-900 group">
          <img
            src={SLIDE_ASSETS.athletes}
            alt="21 norwegische Spitzenspielerinnen: Untersuchung von Schlaf und Regeneration im Hochleistungssport"
            className="w-full h-[260px] md:h-[300px] object-cover filter contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <div className="flex items-center gap-1.5 text-xs text-orange-400 font-mono mb-0.5">
              <Trophy className="w-3.5 h-3.5 text-[#EB5A23]" />
              <span>ELITE ATHLETEN KOHORTE</span>
            </div>
            <div className="text-sm font-semibold">21 Norwegische Spitzenspielerinnen</div>
            <div className="text-xs text-neutral-300 mt-0.5">
              Untersuchung von Schlafparametern während intensiver Belastungsphasen.
            </div>
          </div>
        </div>

        {/* Right: Published Papers vs. Upcoming Trial (Clearly Differentiated!) */}
        <div className="lg:col-span-7 space-y-3">
          {/* Card 1: Published Research */}
          <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/70 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Veröffentlichte Arbeiten (Peer-Reviewed)</span>
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                Publiziert
              </span>
            </div>

            <p className="text-xs text-neutral-700 leading-relaxed">
              Untersucht wurden objektive Schlafmetriken (Aktigraphie) sowie die subjektive Schlafqualität über eine längere Beobachtungsphase.
            </p>

            <div className="pt-2 border-t border-neutral-200 flex flex-wrap gap-2 text-xs">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/37614490/"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 inline-flex items-center gap-1.5 transition-colors font-mono"
              >
                <span>Objektiver Schlaf (2023) · PMID 37614490</span>
                <ExternalLink className="w-3 h-3 text-[#EB5A23]" />
              </a>

              <a
                href="https://pubmed.ncbi.nlm.nih.gov/39149571/"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 inline-flex items-center gap-1.5 transition-colors font-mono"
              >
                <span>Subjektiver Schlaf (2024) · PMID 39149571</span>
                <ExternalLink className="w-3 h-3 text-[#EB5A23]" />
              </a>
            </div>
            <div className="text-[11px] text-neutral-500 italic">
              Hinweis: Beide Publikationen basieren auf derselben Kohorte und demselben Datensatz.
            </div>
          </div>

          {/* Card 2: Upcoming Triple Blind Study */}
          <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-900 font-mono flex items-center gap-1">
                <Moon className="w-3.5 h-3.5 text-[#EB5A23]" />
                <span>Ausblick: Angekündigte Folgestudie</span>
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-orange-200 text-orange-950 font-medium">
                In Vorbereitung
              </span>
            </div>

            <p className="text-xs text-neutral-800 leading-relaxed">
              Eine randomisierte, dreifach verblindete Studie (Triple-Blind) mit Fußballspielerinnen ist angekündigt.
            </p>
            <div className="text-xs font-semibold text-[#EB5A23]">
              Die Ergebnisse stehen aktuell noch aus und sind noch nicht publiziert.
            </div>
          </div>
        </div>
      </div>

      {/* Scientific Transparency & Full Picture Footer */}
      <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4 text-neutral-500 shrink-0" />
          <span>
            <strong>Wissenschaftliche Vollständigkeit:</strong> Vorhandene Publikationen und die kommende Studie klar auseinanderhalten. Weitere Sportstudien umfassen eine kleine Läufer-Pilotstudie (PMID 34300141) sowie eine Sprintstudie ohne signifikante Gruppenunterschiede (PMID 35481952).
          </span>
        </span>
      </div>
    </div>
  );
}
