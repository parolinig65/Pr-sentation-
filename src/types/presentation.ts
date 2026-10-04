export interface SlideSource {
  label: string;
  url?: string;
  pmid?: string;
  note?: string;
}

export interface SlideData {
  id: number;
  slideNumber: string;
  chapter: string;
  title: string;
  subtitle?: string;
  speakerNotes: {
    dialogueStarter: string;
    actionGuide: string;
    bridgeToNext?: string;
    scientificCaution?: string;
  };
  sources?: SlideSource[];
}

export type ViewMode = 'presenter' | 'slideshow' | 'handout' | 'overview';
