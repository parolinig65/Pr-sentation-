import { SlideData } from '../types/presentation';

// Generated assets
import vitalAgingImg from '../assets/images/vital_aging_lifestyle_1791083309085.jpg';
import teslaImg from '../assets/images/tesla_colorado_springs_1791083321157.jpg';
import vascularImg from '../assets/images/vascular_microcirculation_1791083332486.jpg';
import evolineRoomImg from '../assets/images/bemer_evoline_couch_table_1791085720375.jpg';
import evolineControllerImg from '../assets/images/bemer_bbox_touchscreen_1791085728982.jpg';
import athletesSoccerImg from '../assets/images/athletes_recovery_soccer_1791083353720.jpg';

export const SLIDE_ASSETS = {
  vitalAging: vitalAgingImg,
  tesla: teslaImg,
  vascular: vascularImg,
  evoline: evolineRoomImg,
  evolineRoom: evolineRoomImg,
  evolineController: evolineControllerImg,
  athletes: athletesSoccerImg,
};

export const SLIDES: SlideData[] = [
  {
    id: 1,
    slideNumber: "01",
    chapter: "Gesprächseinstieg",
    title: "Gesund und vital älter werden",
    subtitle: "Der persönliche Dialogstart",
    speakerNotes: {
      dialogueStarter: "„Was bedeutet für dich ganz persönlich, gesund und vital älter zu werden?“",
      actionGuide: "Die Originalfrage im Bild übernimmt den Gesprächseinstieg. Keine zusätzliche große Überschrift ergänzen. Wichtig: Zuerst aufmerksam und aktiv zuhören! Das Gegenüber seine Definition von Vitalität, Lebensfreude und Beweglichkeit formulieren lassen.",
      bridgeToNext: "Erst nachdem das Gegenüber geantwortet hat, die Brücke zur Mikrozirkulation und den alltäglichen Schwingungen unseres Körpers schlagen.",
      scientificCaution: "Keine Produkt- oder Heilaussagen zu Beginn machen – es geht um ein echtes Wertegespräch über Wohlbefinden und Lebensqualität."
    },
    sources: [
      { label: "BEMER HUMAN · EVOLINE Einstiegskonzept" }
    ]
  },
  {
    id: 2,
    slideNumber: "02",
    chapter: "Frequenzen im Alltag",
    title: "Signale, Schwingungen und Frequenzen im Alltag",
    subtitle: "Vom Hörbaren zum Unsichtbaren",
    speakerNotes: {
      dialogueStarter: "„Bei welchen Frequenzen denkst du spontan an etwas Angenehmes – und bei welchen an Belastung?“",
      actionGuide: "Lade das Gegenüber zum Dialog ein. Frequenzen sind uns vertraut: Akustisch (Musik, Vogelstimmen vs. Lärm) und elektromagnetisch (WLAN, Funk, Stromnetz, Licht).",
      bridgeToNext: "Die Leitfrage stellen: „Warum vertrauen wir manchen unsichtbaren Signalen im Alltag völlig selbstverständlich, sind aber bei Magnetfeldern am Körper erst einmal skeptisch?“",
      scientificCaution: "WLAN und Licht sind elektromagnetische Wellen, Schall ist Mechanik. Die Folie stellt keine Behauptung auf, dass alle Frequenzen gut oder schlecht seien, sondern dient als Denkanstoß."
    },
    sources: [
      { label: "WHO Leitlinien Umgebungslärm", url: "https://www.who.int/europe/health-topics/noise" }
    ]
  },
  {
    id: 3,
    slideNumber: "03",
    chapter: "Historischer Einstieg",
    title: "Nikola Tesla und die Faszination für Frequenzen",
    subtitle: "Vordenker für Resonanz und Schwingung",
    speakerNotes: {
      dialogueStarter: "„Schon Nikola Tesla faszinierte der Gedanke, dass alles im Universum in Schwingung und Resonanz steht.“",
      actionGuide: "Kultureller Anker: Tesla beschäftigte sich intensiv mit elektrischen Wechselfeldern. Das Foto von 1900 aus Colorado Springs ist eine berühmte Doppelbelichtung von Dickenson V. Alley.",
      bridgeToNext: "Von den physikalischen Schwingungen des Kosmos zum menschlichen Körper: Wie fließt Energie und Leben durch unsere eigenen Gefäße?",
      scientificCaution: "Das Zitat ist Tesla zugeschrieben, aber ohne exakte Primärquelle. Als kultureller Hook nutzen, keinesfalls als Beleg für BEMER!"
    },
    sources: [
      { label: "Tesla 1900: Increasing Human Energy", url: "https://teslauniverse.com/nikola-tesla/articles/problem-increasing-human-energy" },
      { label: "Fotoarchiv Wikimedia (Dickenson V. Alley)", url: "https://commons.wikimedia.org/wiki/File:Tesla_Colorado_Springs_lab-Tesla_in_front_of_magnifying_coil.jpg" }
    ]
  },
  {
    id: 4,
    slideNumber: "04",
    chapter: "Das Gefäßsystem",
    title: "Vom Herzen bis in die kleinsten Gefäße",
    subtitle: "Ein riesiges Versorgungsnetz",
    speakerNotes: {
      dialogueStarter: "„Stellen wir uns das Gefäßnetzwerk wie die Infrastruktur einer modernen Großstadt vor...“",
      actionGuide: "Die 5 Gefäßabschnitte erklären: Arterie (Hauptstraße) → Arteriole → Kapillare (letzte Lieferstrecke) → Venole → Vene (Rückweg).",
      bridgeToNext: "Wie in einer Stadt entscheidet nicht nur die Autobahn, sondern ob das Paket bis an die Haustür gelangt – zur einzelnen Zelle.",
      scientificCaution: "Explanatorische Visualisierung. Wir verzichten bewusst auf ungesicherte Behauptungen wie '95-98% des Kreislaufs' oder '3000 Gefäße unter der Kugelschreiberspitze' ohne exakte Primärquelle."
    },
    sources: [
      { label: "Biologie & Mikrozirkulation Grundlagen", note: "Anatomische Gliederung des kardiovaskulären Betts" }
    ]
  },
  {
    id: 5,
    slideNumber: "05",
    chapter: "Die Kapillaren",
    title: "Die kleinsten Gefäße: eine enge Lieferstrecke",
    subtitle: "Rote Blutkörperchen passen sich an",
    speakerNotes: {
      dialogueStarter: "„Wusstest du, dass viele Kapillaren enger sind als die roten Blutkörperchen selbst?“",
      actionGuide: "Erythrozyten (~7-8 µm) müssen sich elastisch verformen, um durch engste Kapillaren (5-7 µm) zu gleiten. Hier diffundiert Sauerstoff und Nährstoffe ins Gewebe, und Stoffwechselprodukte werden abtransportiert.",
      bridgeToNext: "Wozu benötigt die Zelle Sauerstoff und Nährstoffe so dringend? Für ihren eigenen Ofen: das ATP.",
      scientificCaution: "Allgemeine Physiologie (Biermann et al., 2020). Dies ist Grundlagenwissen über die Mikrozirkulation, kein direkter Produktnachweis."
    },
    sources: [
      { label: "Biermann et al., 2020", pmid: "33216020", url: "https://pubmed.ncbi.nlm.nih.gov/33216020/" }
    ]
  },
  {
    id: 6,
    slideNumber: "06",
    chapter: "Zellstoffwechsel",
    title: "ATP: Energie für die Arbeit der Zelle",
    subtitle: "Stell dir die Zelle wie einen Ofen vor",
    speakerNotes: {
      dialogueStarter: "„Jede Zelle in unserem Körper leistet 24 Stunden Schwerstarbeit – angetrieben von ATP.“",
      actionGuide: "Verständliche Analogie: Nährstoffe + Sauerstoff + Mitochondrien = ATP (Adenosintriphosphat). ATP ist die universelle Energiewährung für Regeneration, Muskelkontraktion und Zellteilung.",
      bridgeToNext: "Doch wie wird der Fluss in diese kleinsten Gefäße eigentlich reguliert? Sie sind keineswegs starr...",
      scientificCaution: "Gute Versorgung ist eine physiologische Voraussetzung für Zellarbeit. Dies erklärt die biologische Bedeutung von Durchblutung, ist aber kein Heilungsversprechen."
    },
    sources: [
      { label: "Microcirculation & Mitochondria Review 2023", note: "PMC10607663", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10607663/" }
    ]
  },
  {
    id: 7,
    slideNumber: "07",
    chapter: "Vasomotion",
    title: "Vasomotion: der Rhythmus kleiner Gefäße",
    subtitle: "Spontane Dynamik im Mikrobereich",
    speakerNotes: {
      dialogueStarter: "„Kleine Gefäße sind keine starren Röhren – sie atmen und pulsieren in einem eigenen Rhythmus.“",
      actionGuide: "Vasomotion beschreibt die spontane rhythmische Veränderung von Muskeltonus und Weite der kleinsten Gefäße (enger ↔ weiter). Sie steuert die Gewebsperfusion bedarfsgerecht.",
      bridgeToNext: "„Genau diese faszinierende Dynamik schauen wir uns jetzt direkt unter dem Mikroskop an!“",
      scientificCaution: "Kapillaren selbst haben keine Muskelwand, sondern die vorgeschalteten Arteriolen und Sphinkter. Klopp et al. beschreiben diese Rhythmen."
    },
    sources: [
      { label: "R. C. Klopp et al.", pmid: "24271148", url: "https://pubmed.ncbi.nlm.nih.gov/24271148/" },
      { label: "BEMER Wissenschaftliche Übersicht", url: "https://bemergroup.com/de_LI/human-line/wissenschaft/wissenschaft-uebersicht/" }
    ]
  },
  {
    id: 8,
    slideNumber: "08",
    chapter: "Mikroskopie Live",
    title: "Mikrozirkulation live unter dem Mikroskop",
    subtitle: "Grüner Originalclip · 1:53 Min",
    speakerNotes: {
      dialogueStarter: "„Schauen wir uns einmal an, was im lebendigen Gewebe bei eingeschränkter vs. optimierter Bewegung passiert.“",
      actionGuide: "Keine Theorie vorwegnehmen – erst anschauen! Lass die mikroskopische Aufnahme für sich sprechen. Achte auf die Strömungsgeschwindigkeit der Erythrozyten und die Aufzweigungen.",
      bridgeToNext: "Nach der Betrachtung: „Was macht den Unterschied aus? Warum reagieren Gefäße so spezifisch auf bestimmte Signale?“",
      scientificCaution: "Hinweis auf Versuchsaufbau und anatomische Region transparent halten (Vitalmikroskopie)."
    },
    sources: [
      { label: "Originalaufnahme: BEMER Vitalmikroskopie", note: "Dauer 1:53 / 2:36 Min" }
    ]
  },
  {
    id: 9,
    slideNumber: "09",
    chapter: "Signalcharakteristik",
    title: "Magnetfeld ist nicht gleich Magnetfeld",
    subtitle: "Entscheidend ist der Signalaufbau",
    speakerNotes: {
      dialogueStarter: "„Magnetfeldtherapie gibt es viele – aber der Schlüssel liegt im Signalmuster.“",
      actionGuide: "Gegenüberstellung: Herkömmliche Systeme setzen oft auf hohe Reizstärken mit kurzer Wirkzeit ('quick in, quick out'). BEMER nutzt eine patentierte, niedrigdosierte Impulskonfiguration mit rhythmischem Verlauf.",
      bridgeToNext: "Laut Hersteller BEMER beträgt die Nachwirkung bis zu 16 Stunden. Wie sieht die konkrete Anwendung im Alltag aus?",
      scientificCaution: "Dies ist eine konzeptionelle Gegenüberstellung von Signalcharakteristika und kein vergleichender Head-to-Head Wirksamkeitsbeweis aller Marktsysteme."
    },
    sources: [
      { label: "BEMER Signalform-Dokumentation", url: "https://bemergroup.com/de_LI/human-line/wissenschaft/wissenschaft-uebersicht/" }
    ]
  },
  {
    id: 10,
    slideNumber: "10",
    chapter: "Anwendung im Alltag",
    title: "BEMER EvoLine im Alltag",
    subtitle: "2 × 8 Minuten täglich mit dem B.Body Evo",
    speakerNotes: {
      dialogueStarter: "„Das Schöne an modernster Medizintechnik ist, wenn sie sich vollkommen mühelos in deinen Alltag einfügt.“",
      actionGuide: "Originalsystem BEMER EvoLine: Ganzkörperapplikator B.Body Evo. Anwendungsempfehlung: 2 × 8 Minuten am Tag (z.B. morgens nach dem Aufstehen und abends zur Entspannung).",
      bridgeToNext: "Welche Erfahrungen und wissenschaftlichen Beobachtungen gibt es bei hoher Belastung, etwa im Leistungssport?",
      scientificCaution: "Herstellerangabe: Unterstützung der Mikrozirkulation bis zu 16 Stunden. Kontraindikationen (z.B. aktive Implantate) und Gebrauchsanweisung beachten."
    },
    sources: [
      { label: "BEMER B.Body Evo Produktspezifikation", url: "https://bemergroup.com/de_AT/human-line/produkte/applikatoren/b-body-evo/" }
    ]
  },
  {
    id: 11,
    slideNumber: "11",
    chapter: "Studien & Sport",
    title: "Sportlerinnen im Blick: Schlaf und Regeneration",
    subtitle: "Wissenschaftliche Untersuchungen im Spitzensport",
    speakerNotes: {
      dialogueStarter: "„Spitzenathleten verlangen ihrem Körper alles ab – Regeneration im Schlaf ist ihr wichtigster Erfolgsfaktor.“",
      actionGuide: "Veröffentlichte Arbeiten an 21 norwegischen Spitzenfußballerinnen (PMID 37614490 & 39149571). Untersucht wurden objektive und subjektive Schlafparameter über eine längere Beobachtungsphase.",
      bridgeToNext: "Transparenz: Beide Paper stammen aus derselben Kohorte. Eine randomisierte, dreifach verblindete Folgestudie ist angekündigt.",
      scientificCaution: "Sauber trennen zwischen publizierten Beobachtungen und angekündigten Studien! Auch andere Sportstudien mit gemischten Ergebnissen (z.B. PMID 35481952) transparent einordnen."
    },
    sources: [
      { label: "Schlaf objektiv (2023)", pmid: "37614490", url: "https://pubmed.ncbi.nlm.nih.gov/37614490/" },
      { label: "Schlaf subjektiv (2024)", pmid: "39149571", url: "https://pubmed.ncbi.nlm.nih.gov/39149571/" },
      { label: "Läufer Pilotstudie", pmid: "34300141", url: "https://pubmed.ncbi.nlm.nih.gov/34300141/" },
      { label: "Sprint-Regeneration", pmid: "35481952", url: "https://pubmed.ncbi.nlm.nih.gov/35481952/" }
    ]
  },
  {
    id: 12,
    slideNumber: "12",
    chapter: "Persönlicher Dialog",
    title: "Was möchtest du als Nächstes wissen?",
    subtitle: "Dein persönlicher Vertiefungsweg",
    speakerNotes: {
      dialogueStarter: "„Wir haben die Grundlagen, die Physik, die Zellen und die Evidenz gestreift – was davon ist für dich gerade am spannendsten?“",
      actionGuide: "Dem Gegenüber die Wahl überlassen: 1. Wirkweise (Physiologie & Signal), 2. Anwendung (Geräte & Alltag), 3. Studien (Forschung & Daten).",
      bridgeToNext: "Klicke auf den gewünschten Pfad, um sofort gemeinsam tiefer in das gewählte Thema einzutauchen.",
      scientificCaution: "Bei Fragen zu individuellen Vorerkrankungen stets auf das ärztliche Fachpersonal und die offizielle Bedienungsanleitung verweisen."
    },
    sources: [
      { label: "Individuelle Beratung & Vertiefung" }
    ]
  },
  {
    id: 13,
    slideNumber: "13",
    chapter: "Quellen & Evidenz",
    title: "Quellen zum Weiterlesen",
    subtitle: "Transparente Literatur- und Studiennachweise",
    speakerNotes: {
      dialogueStarter: "„Transparenz und wissenschaftliche Nachvollziehbarkeit sind die Basis für echtes Vertrauen.“",
      actionGuide: "Alle zitierten Quellen, PubMed-Identifikatoren (PMIDs) und Herstellerangaben offenlegen. Die 12-16h Angabe und der Studienausblick sind klar deklariert.",
      bridgeToNext: "Möglichkeit für den Interessenten, die Links direkt aufzurufen oder das Handout als PDF / Zusammenfassung mitzunehmen.",
      scientificCaution: "Wissenschaftliche Sorgfaltspflicht: Keine Auslassung von Neutral- oder Pilotstudien."
    },
    sources: [
      { label: "BEMER B.Body Evo", url: "https://bemergroup.com/de_AT/human-line/produkte/applikatoren/b-body-evo/" },
      { label: "BEMER Wissenschaft", url: "https://bemergroup.com/de_LI/human-line/wissenschaft/wissenschaft-uebersicht/" },
      { label: "Norwegische Fußballerinnen", pmid: "37614490 & 39149571" },
      { label: "Vasomotion (Klopp et al.)", pmid: "24271148" },
      { label: "Mitochondrien & Mikrozirkulation (2023)", note: "PMC10607663" }
    ]
  }
];
