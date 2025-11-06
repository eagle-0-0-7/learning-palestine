"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleEnded = () => {
      videoEl.pause();
      videoEl.currentTime = videoEl.duration;
      setHasPlayed(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasPlayed && videoEl.paused) {
          videoEl.play().catch(() => {});
          observer.unobserve(videoEl);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(videoEl);
    videoEl.addEventListener("ended", handleEnded);

    return () => {
      observer.disconnect();
      videoEl.removeEventListener("ended", handleEnded);
    };
  }, [hasPlayed]);

  return (
    <section className="
        relative w-full 
        h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-screen 
        overflow-hidden bg-black
      ">
      {/* Fade-in wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {/* Responsive video */}
          <video
            ref={videoRef}
            className="
              absolute inset-0 w-full h-full
              object-contain sm:object-contain md:object-contain lg:object-cover
              bg-black
            "
            src="/P101_final.mp4"
            preload="none"
            muted
            playsInline
            poster="/rectangle-22-3.webp"
            controls={false}
          >
            Your browser does not support the video tag.
          </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
}
