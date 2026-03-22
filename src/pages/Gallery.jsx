import React, { useState, useEffect } from "react";
import { Play, Youtube, Video, ArrowRight, Star, Sparkles } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    embedUrl: "https://www.youtube.com/embed/YmWqIpmez4w?rel=0",
    watchUrl: "https://www.youtube.com/watch?v=YmWqIpmez4w",
    title: "Project spotlight",
    description:
      "A focused look at our development standards, location advantages, and what makes our projects a strong choice for families and investors.",
    tag: "Showcase",
  },
  {
    id: 2,
    embedUrl: "https://www.youtube.com/embed/I6lQ535j_jg?rel=0",
    watchUrl: "https://www.youtube.com/watch?v=I6lQ535j_jg",
    title: "Community & lifestyle",
    description:
      "See the neighbourhood context, amenities, and the lifestyle you can expect when you invest with Satyamsai Real Estate.",
    tag: "Lifestyle",
  },
];

export default function Gallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoading(false));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-50 overflow-x-hidden font-sans">
      {/* Hero */}
      <div className="relative w-full bg-gradient-to-br from-orange-800 via-orange-700 to-amber-800 px-4 sm:px-6 py-16 sm:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-[0.12]">
          <div
            className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:48px_48px]"
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-orange-50 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-amber-200" />
            Curated video tours
          </div>
          <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="rounded-2xl bg-white/15 p-4 shadow-lg backdrop-blur-sm">
              <Video className="h-12 w-12 text-white sm:h-14 sm:w-14" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              Video Gallery
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-orange-100 sm:text-xl">
            Watch hand-picked tours that explain our projects clearly — no clutter, just what matters for your decision.
          </p>
        </div>
      </div>

      {/* Stats — aligned to 2 videos */}
      <div className="relative z-20 mx-auto -mt-8 max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            { label: "Featured tours", value: String(VIDEOS.length), icon: Video },
            { label: "Projects featured", value: "15+", icon: Star },
            { label: "Happy clients", value: "500+", icon: Sparkles },
            { label: "Years experience", value: "10+", icon: Youtube },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-orange-100 bg-white/95 p-4 text-center shadow-lg backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-xl sm:p-5"
            >
              <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 shadow-md sm:h-12 sm:w-12">
                <stat.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </div>
              <div className="text-xl font-bold text-orange-800 sm:text-2xl">{stat.value}</div>
              <div className="text-xs font-medium text-slate-600 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-4 py-16">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-orange-500 border-t-transparent" />
            <p className="text-slate-600">Loading gallery…</p>
          </div>
        ) : (
          <>
            <header className="mb-10 text-center sm:mb-14">
              <h2 className="mb-3 text-3xl font-bold tracking-tight text-orange-900 sm:text-4xl">
                Explore our videos
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Two concise tours — balanced layout on large screens, comfortable reading on mobile. Same warm orange palette throughout.
              </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
              {VIDEOS.map((video) => (
                <article
                  key={video.id}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-orange-100/90 bg-white shadow-xl ring-1 ring-orange-50 transition hover:shadow-2xl"
                >
                  <div className="relative aspect-video w-full bg-slate-900">
                    <iframe
                      title={video.title}
                      src={video.embedUrl}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
                    <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-orange-600/95 px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-sm">
                      {video.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="mb-3 flex items-center gap-2 text-slate-500">
                      <Youtube className="h-5 w-5 shrink-0 text-red-600" />
                      <span className="text-sm font-medium">YouTube</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold leading-snug text-orange-900 sm:text-2xl">
                      {video.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {video.description}
                    </p>
                    <a
                      href={video.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-700 px-4 py-3.5 text-sm font-semibold text-white shadow-md transition hover:from-orange-700 hover:to-orange-800 sm:w-auto sm:self-start"
                    >
                      <Play className="h-4 w-4 fill-current" />
                      Open on YouTube
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-800 via-orange-700 to-amber-800 p-8 text-center shadow-2xl sm:p-12">
          <div className="absolute inset-0 bg-black/15" />
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-bold text-white drop-shadow sm:text-3xl">
              Want more detail?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-orange-100">
              Browse projects or get in touch — we&apos;ll help you shortlist what fits your goals.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-orange-800 shadow-lg transition hover:bg-orange-50"
              >
                <ArrowRight className="h-5 w-5" />
                View projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-orange-300/80 bg-orange-600/90 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-500"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
