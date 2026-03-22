import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const DEV = {
  name: "Yash",
  email: "yash.techhh@gmail.com",
  phone: "8332929646",
  phoneTel: "tel:+918332929646",
};

export default function Footer() {
  const [devCardOpen, setDevCardOpen] = useState(false);

  const openProjectPDF = (projectName) => {
    const pdfMappings = {
      "Fortune Delight": "/Golden-Homes-2.pdf",
      "Fortune SunShine City": "/Sunshine-City_1.pdf",
      "Fortune Legendary": "/Golden-Homes-2.pdf",
      "Fortune Icon City": "/Golden-Homes-2.pdf",
      "Fortune Home Town": "/Golden-Homes-2.pdf",
    };

    const pdfPath = pdfMappings[projectName] || "/Golden-Homes-2.pdf";
    window.open(pdfPath, "_blank");
  };

  useEffect(() => {
    if (!devCardOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [devCardOpen]);

  return (
    <footer className="bg-gradient-to-b from-amber-700 to-amber-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-yellow-100 font-inter">
            Satyamsai Real Estate is a leading real estate firm dedicated to providing transparent, reliable, and professional real estate services in Vijayawada and surrounding areas.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 font-heading text-xl font-bold text-yellow-300">Office Address</h3>
            <div className="space-y-2 font-inter text-yellow-100">
              <p>Satyamsai Real Estate</p>
              <p>No.1, H, No.14, P&T, Colony-3</p>
              <p>56-10-37, Road, near, Panta Kaluva Rd</p>
              <p>Patamata, Vijayawada</p>
              <p>Andhra Pradesh 520010</p>
              <p className="mt-4 font-semibold text-yellow-300">070328 36799</p>
              <a
                href="mailto:satyamsairealestate@gmail.com"
                className="text-yellow-300 transition-colors duration-200 hover:text-yellow-200"
              >
                satyamsairealestate@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-xl font-bold text-yellow-300">Company</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="font-inter text-yellow-100 transition-colors duration-200 hover:text-yellow-300 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-xl font-bold text-yellow-300">Completed Projects</h3>
            <ul className="space-y-2">
              {[
                "Fortune Delight",
                "Fortune SunShine City",
                "Fortune Legendary",
                "Fortune Icon City",
                "Fortune Home Town",
              ].map((project) => (
                <li key={project}>
                  <button
                    type="button"
                    onClick={() => openProjectPDF(project)}
                    className="cursor-pointer border-none bg-transparent p-0 text-left font-inter text-yellow-100 transition-colors duration-200 hover:text-yellow-300 hover:underline"
                  >
                    {project}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-amber-600" />

        <div className="flex flex-col items-center justify-between gap-4 space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-yellow-100">
              Copyright © {new Date().getFullYear()}, All Right Reserved Harivillu Projects
            </p>
          </div>

          <div className="flex space-x-6 text-sm">
            <a
              href="/terms-conditions"
              className="text-yellow-100 transition-colors duration-200 hover:text-yellow-300 hover:underline"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy-policy"
              className="text-yellow-100 transition-colors duration-200 hover:text-yellow-300 hover:underline"
            >
              Privacy & Policy
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-amber-600 pt-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917032836799"
              className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-amber-500"
            >
              Call Now
            </a>
            <a
              href="mailto:satyamsairealestate@gmail.com"
              className="rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-yellow-500"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/917032836799"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-green-500"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="bg-amber-900 py-3 text-center">
        <p className="font-inter text-sm text-yellow-200">
          <span>This website is made by </span>
          <button
            type="button"
            onClick={() => setDevCardOpen(true)}
            className="font-semibold text-yellow-100 underline decoration-yellow-400/90 underline-offset-4 transition hover:text-white hover:decoration-white"
          >
            Yash
          </button>
        </p>
      </div>

      {devCardOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dev-card-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
            aria-label="Close developer card"
            onClick={() => setDevCardOpen(false)}
          />
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-amber-400/30 bg-gradient-to-b from-amber-800 to-amber-900 shadow-2xl animate-slideUp">
            <div className="flex items-center justify-between border-b border-amber-700/50 px-5 py-4">
              <h2 id="dev-card-title" className="font-heading text-lg font-bold text-yellow-100">
                Developer
              </h2>
              <button
                type="button"
                onClick={() => setDevCardOpen(false)}
                className="rounded-xl p-2 text-yellow-200 transition hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 px-5 py-6 font-inter text-left text-[15px] leading-relaxed text-yellow-50">
              <p>
                <span className="font-medium text-amber-200/95">Name: </span>
                <span className="text-white">{DEV.name}</span>
              </p>
              <p className="break-words">
                <span className="font-medium text-amber-200/95">Email: </span>
                <a
                  href={`mailto:${DEV.email}`}
                  className="text-yellow-100 underline decoration-yellow-500/80 underline-offset-2 transition hover:text-white hover:decoration-white"
                >
                  {DEV.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-amber-200/95">Mobile: </span>
                <a
                  href={DEV.phoneTel}
                  className="text-white underline decoration-amber-500/70 underline-offset-2 transition hover:text-yellow-100"
                >
                  {DEV.phone}
                </a>
              </p>
            </div>
            <div className="border-t border-amber-700/50 px-5 py-4">
              <button
                type="button"
                onClick={() => setDevCardOpen(false)}
                className="w-full rounded-2xl bg-amber-600 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
