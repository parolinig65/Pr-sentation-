import { ExternalLink, BookOpen, BookmarkCheck, Check, Copy } from 'lucide-react';
import { useState } from 'react';

export function Slide13Sources() {
  const [copied, setCopied] = useState(false);

  const copyAllSources = () => {
    const text = `BEMER HUMAN · EVOLINE Quellenverzeichnis:
1. BEMER B.Body Evo: https://bemergroup.com/de_AT/human-line/produkte/applikatoren/b-body-evo/
2. BEMER Wissenschaft: https://bemergroup.com/de_LI/human-line/wissenschaft/wissenschaft-uebersicht/
3. Sportstudien Norwegische Spielerinnen: PMID 37614490 & PMID 39149571
4. Läufer Pilotstudie: PMID 34300141
5. Sprintregeneration: PMID 35481952
6. Vasomotion (Klopp et al.): PMID 24271148
7. Mikrozirkulation & Mitochondrien (2023): PMC10607663
8. Erythrozyten-Verformung (Biermann et al., 2020): PMID 33216020`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full min-h-[580px] p-6 md:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>13</span>
            <span aria-hidden="true">·</span>
            <span>Literatur & Verweise</span>
          </div>
          <button
            onClick={copyAllSources}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Quellen kopiert' : 'Alle Quellen kopieren'}</span>
          </button>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 tracking-tight font-display">
          Quellen zum Weiterlesen
        </h2>
        <p className="mt-1 text-sm md:text-base text-neutral-600">
          Transparente Nachweise aller in der Präsentation verwendeten Fakten, Studien und Zitate.
        </p>
      </div>

      {/* Main 3 Source Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
        {/* Category 1: BEMER Originalquellen */}
        <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/60 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#EB5A23] uppercase font-mono">
            <BookmarkCheck className="w-4 h-4" />
            <span>BEMER Hersteller & System</span>
          </div>

          <div className="space-y-3 text-xs">
            <a
              href="https://bemergroup.com/de_AT/human-line/produkte/applikatoren/b-body-evo/"
              target="_blank"
              rel="noreferrer"
              className="block p-3 rounded-lg bg-white border border-neutral-200 hover:border-[#EB5A23] text-neutral-800 transition-colors group"
            >
              <div className="font-semibold text-neutral-900 group-hover:text-[#EB5A23] flex items-center justify-between">
                <span>Anwendung B.Body Evo</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#EB5A23]" />
              </div>
              <span className="text-[11px] text-neutral-500 mt-1 block">
                Offizielle Produkt- und Anwendungsübersicht (2 × 8 Minuten).
              </span>
            </a>

            <a
              href="https://bemergroup.com/de_LI/human-line/wissenschaft/wissenschaft-uebersicht/"
              target="_blank"
              rel="noreferrer"
              className="block p-3 rounded-lg bg-white border border-neutral-200 hover:border-[#EB5A23] text-neutral-800 transition-colors group"
            >
              <div className="font-semibold text-neutral-900 group-hover:text-[#EB5A23] flex items-center justify-between">
                <span>Wissenschaftliche Übersicht</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#EB5A23]" />
              </div>
              <span className="text-[11px] text-neutral-500 mt-1 block">
                Signalstruktur & Grundlagen der physikalischen Gefäßtherapie.
              </span>
            </a>
          </div>
        </div>

        {/* Category 2: Sportstudien & Evidenz */}
        <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/60 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase font-mono">
            <BookOpen className="w-4 h-4 text-[#EB5A23]" />
            <span>Sportstudien (PubMed)</span>
          </div>

          <div className="space-y-2.5 text-xs">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/37614490/"
              target="_blank"
              rel="noreferrer"
              className="block p-2.5 rounded-lg bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 transition-colors"
            >
              <div className="font-semibold flex items-center justify-between">
                <span>Schlaf objektiv (2023)</span>
                <span className="font-mono text-[11px] text-[#EB5A23]">PMID 37614490</span>
              </div>
              <span className="text-[11px] text-neutral-500">21 norwegische Spitzenspielerinnen</span>
            </a>

            <a
              href="https://pubmed.ncbi.nlm.nih.gov/39149571/"
              target="_blank"
              rel="noreferrer"
              className="block p-2.5 rounded-lg bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 transition-colors"
            >
              <div className="font-semibold flex items-center justify-between">
                <span>Schlaf subjektiv (2024)</span>
                <span className="font-mono text-[11px] text-[#EB5A23]">PMID 39149571</span>
              </div>
              <span className="text-[11px] text-neutral-500">Ergänzende Selbsteinschätzung</span>
            </a>

            <div className="p-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 flex justify-between">
              <div>
                <span className="font-semibold block text-neutral-800">Läufer Pilotstudie</span>
                <span className="text-[11px] text-neutral-500">Sprintregeneration</span>
              </div>
              <div className="text-right font-mono text-[11px] text-neutral-500">
                <a href="https://pubmed.ncbi.nlm.nih.gov/34300141/" target="_blank" rel="noreferrer" className="hover:text-[#EB5A23] block">
                  PMID 34300141
                </a>
                <a href="https://pubmed.ncbi.nlm.nih.gov/35481952/" target="_blank" rel="noreferrer" className="hover:text-[#EB5A23] block">
                  PMID 35481952
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Category 3: Physiologie & Geschichte */}
        <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/60 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase font-mono">
            <BookOpen className="w-4 h-4 text-[#EB5A23]" />
            <span>Physiologie & Geschichte</span>
          </div>

          <div className="space-y-2.5 text-xs">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/24271148/"
              target="_blank"
              rel="noreferrer"
              className="block p-2.5 rounded-lg bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 transition-colors"
            >
              <div className="font-semibold flex items-center justify-between">
                <span>Vasomotionsforschung</span>
                <span className="font-mono text-[11px] text-[#EB5A23]">PMID 24271148</span>
              </div>
              <span className="text-[11px] text-neutral-500">R. C. Klopp et al.</span>
            </a>

            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10607663/"
              target="_blank"
              rel="noreferrer"
              className="block p-2.5 rounded-lg bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 transition-colors"
            >
              <div className="font-semibold flex items-center justify-between">
                <span>ATP & Mikrozirkulation</span>
                <span className="font-mono text-[11px] text-[#EB5A23]">PMC10607663</span>
              </div>
              <span className="text-[11px] text-neutral-500">Übersichtsarbeit 2023</span>
            </a>

            <a
              href="https://pubmed.ncbi.nlm.nih.gov/33216020/"
              target="_blank"
              rel="noreferrer"
              className="block p-2.5 rounded-lg bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 transition-colors"
            >
              <div className="font-semibold flex items-center justify-between">
                <span>Erythrozyten-Verformung</span>
                <span className="font-mono text-[11px] text-[#EB5A23]">PMID 33216020</span>
              </div>
              <span className="text-[11px] text-neutral-500">Biermann et al., 2020</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mandatory Disclaimer from prompt */}
      <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs text-neutral-800 flex items-center justify-between">
        <span>
          <strong>Deklaration:</strong> Die 12–16-Stunden-Wirkungsangabe und der Ausblick auf die Folgestudie sind als BEMER- bzw. vorläufige Quellenangaben gekennzeichnet.
        </span>
      </div>
    </div>
  );
}
