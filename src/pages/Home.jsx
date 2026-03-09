import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import developerIllustation from "../assets/images/developer.png";

gsap.registerPlugin(SplitText, ScrollTrigger);

// ── Terminal-style typing text ─────────────────────────────────────────────
const TypingText = ({ texts }) => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 70);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts]);

  return (
    <span className="text-green-400">
      {displayed}
      <span className="animate-pulse text-green-300">█</span>
    </span>
  );
};

// ── Stat Counter ──────────────────────────────────────────────────────────
const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-center md:items-start gap-1">
    <span className="text-2xl md:text-3xl font-black text-green-400 font-mono">
      {value}
    </span>
    <span className="text-xs text-gray-500 uppercase tracking-widest">
      {label}
    </span>
  </div>
);

// ── Main Home Component ────────────────────────────────────────────────────
const Home = () => {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const illustRef = useRef(null);

  useGSAP(
    () => {
      // Headline split
      const split = new SplitText(headlineRef.current, { type: "chars,words" });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(split.chars, {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        stagger: 0.03,
      })
        .from(subRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(descRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.4",
        )
        .from(
          illustRef.current,
          { x: 80, opacity: 0, duration: 1.2, ease: "power3.out" },
          0.2,
        );

      // Illustration float loop
      gsap.to(illustRef.current, {
        y: -18,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Scroll-out
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "40% top",
          scrub: 1,
        },
      });
      scrollTl
        .to(split.chars, { y: -60, opacity: 0, stagger: 0.01 }, 0)
        .to(illustRef.current, { x: 60, opacity: 0 }, 0);
    },
    { scope: containerRef },
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#040404]"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
    >
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Radial glow ── */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(34,197,94,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 80%, rgba(34,197,94,0.07) 0%, transparent 65%)",
        }}
      />

      {/* ── Vertical lines ── */}
      <div className="absolute left-[6%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent hidden lg:block" />
      <div className="absolute right-[6%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent hidden lg:block" />

      {/* ── Main layout ── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
        {/* ── LEFT: text content ── */}
        <div className="flex-1 flex flex-col gap-7 text-left max-w-xl">
          {/* status badge */}
          <div className="inline-flex items-center gap-2 self-start bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs tracking-widest uppercase">
              Available for hire
            </span>
          </div>

          {/* terminal prompt line */}
          <p className="text-green-600/70 text-sm font-mono tracking-widest">
            ~/portfolio <span className="text-green-400">$</span> whoami
          </p>

          {/* main headline */}
          <div className="overflow-hidden">
            <h1
              ref={headlineRef}
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-white"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              FULLSTACK
              <br />
              <span className="text-green-400">DEVELOPER</span>
            </h1>
          </div>

          {/* typing subtitle */}
          <p
            ref={subRef}
            className="text-lg md:text-xl text-gray-300 font-mono"
          >
            Hi, I'm <span className="text-white font-bold">Sushant</span> —{" "}
            <TypingText
              texts={[
                "Frontend Developer",
                "Full Stack Engineer",
                "React Specialist",
                "UI Craftsman",
              ]}
            />
          </p>

          {/* description */}
          <p
            ref={descRef}
            className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md"
          >
            I build modern, dynamic, and interactive web applications with{" "}
            <span className="text-green-400">React.js</span>,{" "}
            <span className="text-blue-400">Node.js</span>,{" "}
            <span className="text-pink-400">MongoDB</span>, and{" "}
            <span className="text-green-400">GSAP</span> — turning complex ideas
            into seamless digital experiences.
          </p>

          {/* CTA buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 mt-2 opacity-100">
            <a
              href="#projects"
              className="group relative px-7 py-3.5 bg-green-500 text-black text-sm font-bold uppercase tracking-widest rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-green-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>

            <a
              href="#contact"
              className="group px-7 py-3.5 border border-green-500/50 text-green-400 text-sm font-bold uppercase tracking-widest rounded transition-all duration-300 hover:border-green-400 hover:bg-green-500/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              <span className="flex items-center gap-2">
                Contact Me
                <svg
                  className="w-4 h-4 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        {/* ── RIGHT: illustration ── */}
        <div>
          <img
          ref={illustRef}
            src={developerIllustation}
            alt="Developer Illustration"
            className="w-[320px] md:w-[400px] lg:w-[450px] pointer-events-none select-none"
          />
        </div>
      </div>

      {/* ── scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-gray-600 tracking-widest uppercase font-mono">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-green-500 to-transparent animate-pulse" />
      </div>

      {/* ── tech stack ticker (bottom) ── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-green-500/10 bg-black/40 py-2 overflow-hidden">
        <div
          className="flex gap-16 whitespace-nowrap text-xs text-green-600/60 font-mono tracking-widest uppercase"
          style={{
            animation: "ticker 20s linear infinite",
          }}
        >
          {[
            "React.js",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "GSAP",
            "TypeScript",
            "Express.js",
            "PostgreSQL",
            "React.js",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "GSAP",
            "TypeScript",
            "Express.js",
            "PostgreSQL",
          ].map((t, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="text-green-500">▹</span> {t}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Home;
