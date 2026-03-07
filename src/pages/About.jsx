import React, { useRef } from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

// ── Skills data ──────────────────────────────────────────────────────────────
const skills = [
  { name: "React.js", level: 92, color: "#61dafb" },
  { name: "Node.js", level: 85, color: "#22c55e" },
  { name: "MongoDB", level: 80, color: "#4ade80" },
  { name: "Express", level: 82, color: "#a78bfa" },
  { name: "Tailwind", level: 95, color: "#38bdf8" },
  { name: "GSAP", level: 78, color: "#f472b6" },
];

// ── Info rows ────────────────────────────────────────────────────────────────
const info = [
  { key: "name", value: "Sushant Nachanekar" },
  { key: "role", value: "MERN Stack Developer" },
  { key: "education", value: "B.Sc. IT (Pursuing)" },
  { key: "status", value: "Open to Work ✦" },
  { key: "location", value: "India 🇮🇳" },
];

// ── Skill Bar ─────────────────────────────────────────────────────────────────
const SkillBar = ({ name, level, color, delay }) => {
  const barRef = useRef(null);
  useGSAP(() => {
    gsap.from(barRef.current, {
      width: 0,
      duration: 1.2,
      ease: "power3.out",
      delay,
      scrollTrigger: { trigger: barRef.current, start: "top 90%" },
    });
  });
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
          {name}
        </span>
        <span className="text-xs font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
          }}
        />
      </div>
    </div>
  );
};

// ── Avatar SVG ────────────────────────────────────────────────────────────────
const AvatarSVG = () => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle
      cx="60"
      cy="60"
      r="58"
      fill="#0a0a0a"
      stroke="#22c55e"
      strokeWidth="1.5"
    />
    {/* grid lines */}
    {[20, 40, 60, 80, 100].map((v) => (
      <React.Fragment key={v}>
        <line
          x1={v}
          y1="2"
          x2={v}
          y2="118"
          stroke="#22c55e"
          strokeWidth="0.3"
          opacity="0.2"
        />
        <line
          x1="2"
          y1={v}
          x2="118"
          y2={v}
          stroke="#22c55e"
          strokeWidth="0.3"
          opacity="0.2"
        />
      </React.Fragment>
    ))}
    {/* body */}
    <rect
      x="38"
      y="68"
      width="44"
      height="36"
      rx="10"
      fill="#111"
      stroke="#22c55e"
      strokeWidth="1"
    />
    {/* head */}
    <circle
      cx="60"
      cy="52"
      r="20"
      fill="#111"
      stroke="#22c55e"
      strokeWidth="1"
    />
    {/* hair */}
    <path
      d="M40 48 Q42 32 60 30 Q78 32 80 48"
      fill="#0a0a0a"
      stroke="#22c55e"
      strokeWidth="0.8"
    />
    {/* glasses */}
    <rect
      x="47"
      y="49"
      width="10"
      height="7"
      rx="3"
      fill="none"
      stroke="#22c55e"
      strokeWidth="1.2"
    />
    <rect
      x="63"
      y="49"
      width="10"
      height="7"
      rx="3"
      fill="none"
      stroke="#22c55e"
      strokeWidth="1.2"
    />
    <line
      x1="57"
      y1="52.5"
      x2="63"
      y2="52.5"
      stroke="#22c55e"
      strokeWidth="1.2"
    />
    {/* eyes */}
    <circle cx="52" cy="53" r="2" fill="#22c55e" opacity="0.8" />
    <circle cx="68" cy="53" r="2" fill="#22c55e" opacity="0.8" />
    {/* smile */}
    <path
      d="M54 61 Q60 66 66 61"
      stroke="#22c55e"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
    />
    {/* laptop icon on chest */}
    <rect
      x="49"
      y="78"
      width="22"
      height="14"
      rx="2"
      fill="#0a0a0a"
      stroke="#22c55e"
      strokeWidth="0.8"
    />
    <rect x="51" y="80" width="18" height="10" rx="1" fill="#050505" />
    <rect
      x="52"
      y="81"
      width="4"
      height="2"
      rx="1"
      fill="#22c55e"
      opacity="0.7"
    />
    <rect
      x="57"
      y="81"
      width="6"
      height="2"
      rx="1"
      fill="#60a5fa"
      opacity="0.6"
    />
    <rect
      x="52"
      y="85"
      width="8"
      height="2"
      rx="1"
      fill="#f472b6"
      opacity="0.6"
    />
    <rect
      x="44"
      y="92"
      width="32"
      height="2"
      rx="1"
      fill="#111"
      stroke="#22c55e"
      strokeWidth="0.6"
    />
    {/* glow dot */}
    <circle
      cx="60"
      cy="60"
      r="58"
      fill="none"
      stroke="#22c55e"
      strokeWidth="0.5"
      opacity="0.3"
    />
  </svg>
);

// ── Main About Component ──────────────────────────────────────────────────────
const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const infoRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(headingRef.current, { type: "chars" });
      gsap.from(split.chars, {
        yPercent: 120,
        opacity: 0,
        duration: 0.9,
        stagger: 0.04,
        ease: "expo.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      });

      gsap.from(cardRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 85%" },
      });

      gsap.from(rightRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: rightRef.current, start: "top 85%" },
      });

      gsap.from(Array.from(infoRef.current?.children || []), {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: infoRef.current, start: "top 88%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#040404] text-white flex justify-center px-6 py-28 overflow-hidden"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
    >
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Left glow ── */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 0% 50%, rgba(34,197,94,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-16">
        {/* ── Section heading ── */}
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-1">
            <p className="text-green-600/60 text-xs tracking-widest uppercase font-mono">
              <span className="text-green-400">02.</span> Who I am
            </p>
            <div className="overflow-hidden">
              <h2
                ref={headingRef}
                className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white"
              >
                About <span className="text-green-400">Me</span>
              </h2>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent mt-6" />
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ── LEFT card ── */}
          <div ref={cardRef} className="flex flex-col gap-6">
            {/* Profile card */}
            <div
              className="relative p-6 rounded border border-green-500/20 bg-white/[0.02]"
              style={{ backdropFilter: "blur(8px)" }}
            >
              {/* corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-green-500" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-green-500" />

              <div className="flex items-center gap-5 mb-5">
                {/* avatar */}
                <div className="w-20 h-20 shrink-0 relative">
                  <div className="absolute inset-0 rounded-full blur-md bg-green-500/20" />
                  <AvatarSVG />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Sushant Nachanekar
                  </h3>
                  <p className="text-green-400 text-sm mt-0.5">
                    MERN Stack Developer
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-gray-500">
                      Available for hire
                    </span>
                  </div>
                </div>
              </div>

              {/* bio */}
              <p className="text-sm text-gray-400 leading-relaxed">
                Hi! I'm a{" "}
                <span className="text-green-400 font-semibold">
                  MERN stack developer
                </span>{" "}
                pursuing a B.Sc. in IT. I build fast, responsive, and
                interactive web apps using{" "}
                <span className="text-blue-400">React.js</span>,{" "}
                <span className="text-green-400">Node.js</span>,{" "}
                <span className="text-pink-400">MongoDB</span>, and{" "}
                <span className="text-green-400">GSAP</span>. Passionate about
                turning ideas into real-world projects and constantly learning
                new tech.
              </p>

              {/* social + resume */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">
                <div className="flex gap-3">
                  {[
                    {
                      icon: <FaSquareGithub />,
                      href: "https://github.com/DevSushant03",
                      color: "#fff",
                    },
                    {
                      icon: <FaLinkedin />,
                      href: "https://www.linkedin.com/in/sushant-nachanekar",
                      color: "#60a5fa",
                    },
                    {
                      icon: <FaInstagramSquare />,
                      href: "https://www.instagram.com/mr__sushant__030/",
                      color: "#f472b6",
                    },
                  ].map(({ icon, href, color }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-2xl text-gray-600 transition-all duration-300 hover:scale-110"
                      style={{ "--hover-color": color }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = color)
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                      {icon}
                    </a>
                  ))}
                </div>

                <a
                  href="https://drive.google.com/file/d/1ks5K4fjvvdqqJsh7twaQrVyA4hPGOHxc/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-widest text-black bg-green-400 rounded overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Resume
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-green-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* ── Terminal-style info panel ── */}
            <div className="rounded border border-green-500/20 bg-white/[0.02] overflow-hidden">
              {/* terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-gray-600 font-mono">
                  about.json
                </span>
              </div>

              <div ref={infoRef} className="p-5 flex flex-col gap-2.5">
                <p className="text-gray-700 text-xs font-mono mb-1">{"{"}</p>
                {info.map(({ key, value }) => (
                  <div key={key} className="flex gap-3 text-sm font-mono pl-4">
                    <span className="text-blue-400/80 shrink-0">"{key}":</span>
                    <span className="text-green-300/90">"{value}"</span>
                  </div>
                ))}
                <p className="text-gray-700 text-xs font-mono mt-1">{"}"}</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: skills ── */}
          <div ref={rightRef} className="flex flex-col gap-6">
            {/* skills panel */}
            <div className="rounded border border-green-500/20 bg-white/[0.02] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-gray-600 font-mono">
                  skills.config.js
                </span>
              </div>

              <div className="p-6 flex flex-col gap-5">
                <p className="text-xs text-green-600/60 uppercase tracking-widest mb-2">
                  <span className="text-green-400">$</span> export const skills
                </p>
                {skills.map((s, i) => (
                  <SkillBar key={s.name} {...s} delay={i * 0.1} />
                ))}
              </div>
            </div>

            {/* ── What I do cards ── */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "⚛️",
                  title: "Frontend Dev",
                  desc: "React, Tailwind, GSAP animations",
                },
                {
                  icon: "🖥️",
                  title: "Backend Dev",
                  desc: "Node.js, Express, REST APIs",
                },
                {
                  icon: "🗄️",
                  title: "Database",
                  desc: "MongoDB, Mongoose ODM",
                },
                {
                  icon: "✨",
                  title: "UI/UX",
                  desc: "Responsive, accessible interfaces",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="group relative p-4 rounded border border-white/5 bg-white/[0.02] hover:border-green-500/40 transition-all duration-300 hover:bg-green-500/5 cursor-default"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(34,197,94,0.06) 0%, transparent 70%)",
                    }}
                  />
                  <span className="text-2xl mb-2 block">{icon}</span>
                  <p className="text-white text-sm font-semibold mb-1">
                    {title}
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
