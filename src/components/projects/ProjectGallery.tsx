"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const isOpen = selectedIndex !== null;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => ((prev as number) + 1) % images.length);
    setIsZoomed(false);
  }, [selectedIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      (prev as number) - 1 < 0 ? images.length - 1 : (prev as number) - 1
    );
    setIsZoomed(false);
  }, [selectedIndex, images.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    setIsZoomed(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose, handleNext, handlePrev]);

  return (
    <div className="flex flex-col gap-4">
      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-[16/10] rounded-xl overflow-hidden bg-[#080D16] border border-slate-800 hover:border-[#0066FF] cursor-pointer shadow-md transition-all duration-300"
          >
            <Image
              src={img}
              alt={`${title} screenshot ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#05070B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#05070B]/90 border border-[#0066FF]/60 text-xs font-mono text-[#00F0FF] flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,102,255,0.4)]">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand Fullscreen</span>
              </span>
            </div>
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-slate-300">
              Screenshot {idx + 1} of {images.length}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Fullscreen Modal */}
      {isOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070B]/95 backdrop-blur-2xl p-4 sm:p-8">
          {/* Controls Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-50 text-white">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-white tracking-wider">
                {title}
              </span>
              <span className="text-xs font-mono text-[#00F0FF] bg-[#0066FF]/25 px-2 py-0.5 rounded border border-[#0066FF]/40">
                {selectedIndex + 1} / {images.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2 rounded-lg bg-[#080D16] border border-slate-700 text-slate-300 hover:text-white hover:border-[#0066FF]"
                title={isZoomed ? "Zoom Out" : "Zoom In"}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              </button>
              <button
                onClick={handleClose}
                className="p-2 rounded-lg bg-[#080D16] border border-slate-700 text-slate-300 hover:text-white hover:border-red-500"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#080D16]/90 border border-slate-700 text-white hover:border-[#0066FF] hover:bg-[#0066FF]/20 transition-all z-50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#080D16]/90 border border-slate-700 text-white hover:border-[#0066FF] hover:bg-[#0066FF]/20 transition-all z-50"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Large Image Frame */}
          <div
            className={`relative max-w-6xl w-full max-h-[82vh] h-full flex items-center justify-center transition-transform duration-300 ${
              isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#0066FF]/30 shadow-[0_0_50px_rgba(0,102,255,0.25)]">
              <Image
                src={images[selectedIndex]}
                alt={`${title} screenshot`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Bottom Captions & Keyboard Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-xs font-mono text-slate-500 hidden sm:block">
            Use <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">←</kbd> and{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">→</kbd> to navigate,{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Esc</kbd> to exit.
          </div>
        </div>
      )}
    </div>
  );
}
