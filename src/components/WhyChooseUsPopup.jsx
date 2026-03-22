import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "satyamsai_why_choose_us_popup_seen";
const SHOW_DELAY_MS = 3500;
const VIDEO_EMBED = "https://www.youtube.com/embed/U-7Fi7eIp-0?rel=0";

export default function WhyChooseUsPopup() {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }

    const t = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="why-choose-us-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={dismiss}
      />
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl shadow-2xl overflow-hidden border border-orange-200/80 bg-white animate-slideUp">
        <div className="flex items-start justify-between gap-4 px-5 sm:px-7 pt-5 sm:pt-6 pb-3 bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 text-white shrink-0">
          <h2
            id="why-choose-us-title"
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight pr-2"
          >
            Why choose US??
          </h2>
          <button
            type="button"
            onClick={dismiss}
            className="shrink-0 rounded-xl p-2 text-white/90 hover:text-white hover:bg-white/15 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-4 bg-white flex-1 min-h-0 overflow-y-auto">
          <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900 shadow-inner ring-1 ring-orange-100">
            <div className="relative aspect-video w-full">
              <iframe
                title="Why choose us — Satyamsai Real Estate"
                src={VIDEO_EMBED}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-slate-600">
            Tap outside or close when you&apos;re done watching.
          </p>
        </div>
      </div>
    </div>
  );
}
