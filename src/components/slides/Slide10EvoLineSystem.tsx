import { useState, useRef, useEffect } from 'react';
import { SLIDE_ASSETS } from '../../data/slidesData';
import { Clock, Sun, Moon, ExternalLink, ShieldCheck, Upload, Trash2, Check, RefreshCw } from 'lucide-react';

export function Slide10EvoLineSystem() {
  const [activeView, setActiveView] = useState<'room' | 'controller'>('room');
  const [customRoomImg, setCustomRoomImg] = useState<string | null>(null);
  const [customControllerImg, setCustomControllerImg] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load any previously uploaded photos from localStorage
  useEffect(() => {
    const savedRoom = localStorage.getItem('bemer_custom_room_img');
    const savedCtrl = localStorage.getItem('bemer_custom_ctrl_img');
    if (savedRoom) setCustomRoomImg(savedRoom);
    if (savedCtrl) setCustomControllerImg(savedCtrl);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (activeView === 'room') {
        setCustomRoomImg(dataUrl);
        localStorage.setItem('bemer_custom_room_img', dataUrl);
      } else {
        setCustomControllerImg(dataUrl);
        localStorage.setItem('bemer_custom_ctrl_img', dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (activeView === 'room') {
        setCustomRoomImg(dataUrl);
        localStorage.setItem('bemer_custom_room_img', dataUrl);
      } else {
        setCustomControllerImg(dataUrl);
        localStorage.setItem('bemer_custom_ctrl_img', dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetImage = () => {
    if (activeView === 'room') {
      setCustomRoomImg(null);
      localStorage.removeItem('bemer_custom_room_img');
    } else {
      setCustomControllerImg(null);
      localStorage.removeItem('bemer_custom_ctrl_img');
    }
  };

  const currentDisplayedImage =
    activeView === 'room'
      ? customRoomImg || SLIDE_ASSETS.evolineRoom
      : customControllerImg || SLIDE_ASSETS.evolineController;

  const hasCustomImage = activeView === 'room' ? !!customRoomImg : !!customControllerImg;

  return (
    <div className="w-full h-full min-h-[580px] p-6 md:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#EB5A23] uppercase tracking-wider font-mono">
            <span>10</span>
            <span aria-hidden="true">·</span>
            <span>Original-Hardware</span>
          </div>
          <span className="text-xs text-neutral-400 font-mono">BEMER EvoLine System</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 tracking-tight font-display">
          BEMER EvoLine im Alltag
        </h2>
        <p className="mt-1 text-sm md:text-base text-neutral-600">
          Anwendung mit dem Originalsystem: B.Body Evo Ganzkörpermatte & B.Box Evo Steuergerät.
        </p>
      </div>

      {/* Main Grid: Dual Original Photographic Showcase + Routine Data */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 items-center">
        {/* Left: Original Product Photos with Tab Switcher & Direct File Drop */}
        <div className="lg:col-span-6 space-y-3">
          {/* View Mode Segmented Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-xl">
            <button
              onClick={() => setActiveView('room')}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer truncate ${
                activeView === 'room'
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Original-Matte & Sofa (IMG_8991)
            </button>
            <button
              onClick={() => setActiveView('controller')}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer truncate ${
                activeView === 'controller'
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Original-Steuergerät (Touchscreen)
            </button>
          </div>

          {/* Photo Frame with Direct Upload and Dropzone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`relative rounded-xl overflow-hidden border shadow-sm bg-neutral-950 group transition-all ${
              isDragging ? 'ring-2 ring-[#EB5A23] border-[#EB5A23]' : 'border-neutral-200'
            }`}
          >
            <img
              src={currentDisplayedImage}
              alt={
                activeView === 'room'
                  ? 'Original BEMER B.Body Evo Matte auf dem Sofa mit B.Box Evo auf dem Beistelltisch'
                  : 'Original BEMER B.Box Evo Steuergerät mit leuchtendem Touchscreen und Kacheln'
              }
              className="w-full h-[270px] md:h-[300px] object-cover filter contrast-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/15 pointer-events-none" />

            {/* Top Action Badge / Direct Upload Button */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-2.5 py-1 rounded-lg bg-black/75 hover:bg-black text-white text-[11px] font-medium backdrop-blur-md border border-white/20 flex items-center gap-1 transition-all cursor-pointer"
                title="Klicke hier, um deine Originaldatei (z.B. IMG_8991.jpeg) direkt einzufügen"
              >
                <Upload className="w-3 h-3 text-[#EB5A23]" />
                <span>Originalfoto wählen</span>
              </button>

              {hasCustomImage && (
                <button
                  onClick={handleResetImage}
                  className="p-1 rounded-lg bg-red-600/80 hover:bg-red-600 text-white text-xs transition-colors cursor-pointer"
                  title="Eigenes Bild zurücksetzen"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Bottom Details Bar */}
            <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#EB5A23] font-semibold block">
                  {activeView === 'room' ? 'Wohnraum-Setup' : 'Original B.Box Evo Touchscreen'}
                </span>
                <div className="text-sm font-bold">
                  {activeView === 'room' ? 'B.Body Evo Matte & B.Box Steuergerät' : '4 Originalkacheln: Intensity, Programs, Sleep, Light'}
                </div>
              </div>
              <span className="text-[11px] font-mono text-neutral-300 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                {hasCustomImage ? 'Eigenes Originalfoto aktiv' : 'Originalprodukt'}
              </span>
            </div>
          </div>
        </div>

        {/* Right: The Routine Formula & Real Controller Interface Breakdown */}
        <div className="lg:col-span-6 space-y-3.5">
          {/* 2 x 8 min Daily Formula Banner */}
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 rounded-xl bg-[#EB5A23] text-white flex items-center justify-center text-lg font-bold font-mono shadow-md shadow-orange-500/20 shrink-0">
                2×8
              </div>
              <div>
                <span className="text-xs font-semibold text-orange-950 uppercase tracking-wider font-mono">
                  BEMER-Angabe
                </span>
                <div className="text-sm font-semibold text-neutral-900">
                  Minuten täglich
                </div>
                <div className="text-xs text-neutral-600">
                  Zwei kurze Einheiten lassen sich mühelos in den Tagesablauf integrieren.
                </div>
              </div>
            </div>
            <Clock className="w-5 h-5 text-[#EB5A23] shrink-0" />
          </div>

          {/* Genuine Touchscreen Function Grid (Directly reflecting CF313E07!) */}
          <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-mono">
                Original-Funktionen der B.Box Evo
              </span>
              <span className="text-[10px] text-[#EB5A23] font-mono font-semibold">Touchscreen</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200/80">
                <span className="text-[10px] font-bold text-cyan-800 uppercase block">INTENSITY</span>
                <span className="text-[10px] text-cyan-600">Stufen 1–10</span>
              </div>
              <div className="p-2 rounded-lg bg-lime-50 border border-lime-200/80">
                <span className="text-[10px] font-bold text-lime-800 uppercase block">PROGRAMS</span>
                <span className="text-[10px] text-lime-600">P1 · P2 · P3</span>
              </div>
              <div className="p-2 rounded-lg bg-purple-50 border border-purple-200/80">
                <span className="text-[10px] font-bold text-purple-800 uppercase block">SLEEP</span>
                <span className="text-[10px] text-purple-600">Nachtmodus</span>
              </div>
              <div className="p-2 rounded-lg bg-amber-50 border border-amber-200/80">
                <span className="text-[10px] font-bold text-amber-800 uppercase block">LIGHT</span>
                <span className="text-[10px] text-amber-600">B.Light App</span>
              </div>
            </div>
          </div>

          {/* 16h Duration Manufacturer Claim Banner */}
          <div className="p-3.5 rounded-xl bg-neutral-900 text-white text-xs flex items-center justify-between">
            <div>
              <span className="text-orange-400 font-mono text-[11px] uppercase font-semibold">
                BEMER-Herstellerangabe
              </span>
              <p className="text-neutral-200 font-medium mt-0.5">
                Unterstützung der Mikrozirkulation für bis zu 16 Stunden nach der Anwendung.
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-[#EB5A23] text-white font-mono shrink-0 ml-3">
              bis zu 16h
            </span>
          </div>
        </div>
      </div>

      {/* Footer Link & Caution */}
      <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Originalsystem BEMER EvoLine: Zertifiziertes Medizinprodukt nach MDR (Medical Device Regulation).
          </span>
        </span>
        <a
          href="https://bemergroup.com/de_AT/human-line/produkte/applikatoren/b-body-evo/"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-700 hover:text-[#EB5A23] inline-flex items-center gap-1 font-mono transition-colors shrink-0"
        >
          <span>Offizielle BEMER EvoLine Spezifikation</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
