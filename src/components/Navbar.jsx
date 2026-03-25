import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const links = [
  { label: "Home", href: "#home", num: "01" },
  { label: "About", href: "#about", num: "02" },
  { label: "Projects", href: "#project", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const navRef = useRef(null);
  const mobileRef = useRef(null);

  // ── scroll shadow + active section tracking ──────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // find which section is in view
      const sections = links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(links[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── lock body scroll when mobile menu open ───────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // ── entrance animation ───────────────────────────────────────────────────
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("#nav-logo", { opacity: 0, y: -20, duration: 0.8 })
        .from(
          "#nav-links a",
          { opacity: 0, y: -16, stagger: 0.1, duration: 0.6 },
          "-=0.4",
        )
        .from("#nav-cta", { opacity: 0, y: -16, duration: 0.6 }, "-=0.4");
    },
    { scope: navRef },
  );

  // ── mobile menu GSAP slide-in ─────────────────────────────────────────────
  useGSAP(() => {
    if (!mobileRef.current) return;
    if (menuOpen) {
      gsap.fromTo(
        mobileRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.45, ease: "expo.out" },
      );
      gsap.fromTo(
        "#mobile-links a",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "expo.out",
          delay: 0.15,
        },
      );
    } else {
      gsap.to(mobileRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.35,
        ease: "expo.in",
      });
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#040404]/95 backdrop-blur-xl border-b border-green-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* ── Logo ── */}
          <a
            id="nav-logo"
            href="#home"
            className="flex items-center gap-2 group"
          >
            {/* bracket icon */}
            <span className="text-green-500 text-lg font-black opacity-70 group-hover:opacity-100 transition-opacity">
              {"<"}
            </span>
            <span className="text-white font-black text-lg tracking-tight">
              Sushant
              <span className="text-green-400">.dev</span>
            </span>
            <span className="text-green-500 text-lg font-black opacity-70 group-hover:opacity-100 transition-opacity">
              {"/>"}
            </span>
          </a>

          {/* ── Desktop links ── */}
          <div id="nav-links" className="hidden md:flex items-center gap-1">
            {links.map(({ label, href, num }) => {
              const isActive = activeLink === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative group flex items-center gap-1.5 px-4 py-2 text-sm rounded transition-all duration-300 ${
                    isActive
                      ? "text-green-400"
                      : "text-gray-500 hover:text-gray-200"
                  }`}
                >
                  <span
                    className={`text-[10px] transition-colors duration-300 ${isActive ? "text-green-600" : "text-gray-700 group-hover:text-green-700"}`}
                  >
                    {num}.
                  </span>
                  {label}
                  {/* active underline */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px bg-green-500 transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <a
            id="nav-cta"
            href="https://drive.google.com/file/d/1ks5K4fjvvdqqJsh7twaQrVyA4hPGOHxc/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-widest text-black bg-green-500 rounded hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300"
          >
            Resume
            <svg
              className="w-3.5 h-3.5"
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
          </a>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-9 h-9 border border-white/10 rounded text-gray-400 hover:text-green-400 hover:border-green-500/40 transition-all"
            aria-label="Open menu"
          >
            <FaBars className="text-base" />
          </button>
        </div>

        {/* ── Progress bar ── */}
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
          <div
            id="nav-progress"
            className="h-full bg-green-500/40 transition-none"
            style={{
              width:
                typeof window !== "undefined"
                  ? `${Math.min(100, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)}%`
                  : "0%",
            }}
          />
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        ref={mobileRef}
        className="fixed inset-0 z-[60] bg-[#040404]/98 backdrop-blur-xl md:hidden"
        style={{ transform: "translateX(100%)", opacity: 0 }}
      >
        {/* corner decorations */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-green-500/40" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-green-500/40" />

        {/* background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* close btn */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 border border-white/10 rounded text-gray-400 hover:text-green-400 hover:border-green-500/40 transition-all"
          aria-label="Close menu"
        >
          <IoClose className="text-xl" />
        </button>

        {/* logo */}
        <div className="absolute top-5 left-6 flex items-center gap-1.5">
          <span className="text-green-500 font-black">{"<"}</span>
          <span className="text-white font-black">
            Sushant<span className="text-green-400">.dev</span>
          </span>
          <span className="text-green-500 font-black">{"/>"}</span>
        </div>

        {/* links */}
        <div
          id="mobile-links"
          className="flex flex-col items-start justify-center h-full px-10 gap-2"
        >
          <p className="text-xs text-green-600/60 uppercase tracking-widest font-mono mb-4">
            <span className="text-green-400">$</span> navigate --to
          </p>

          {links.map(({ label, href, num }) => {
            const isActive = activeLink === href;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center gap-4 py-3 w-full border-b transition-all duration-300 ${
                  isActive
                    ? "border-green-500/30 text-green-400"
                    : "border-white/5 text-gray-500 hover:text-white hover:border-white/20"
                }`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span
                  className={`text-xs transition-colors ${isActive ? "text-green-500" : "text-gray-700 group-hover:text-green-700"}`}
                >
                  {num}.
                </span>
                <span className="text-3xl font-black uppercase tracking-tight">
                  {label}
                </span>
                <svg
                  className={`w-5 h-5 ml-auto transition-all duration-300 ${isActive ? "text-green-500 translate-x-0" : "text-gray-700 -translate-x-2 group-hover:translate-x-0 group-hover:text-gray-400"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            );
          })}

          {/* resume in mobile menu */}
          <a
            href="https://drive.google.com/file/d/1ks5K4fjvvdqqJsh7twaQrVyA4hPGOHxc/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-black bg-green-500 rounded hover:bg-green-400 transition-all"
          >
            Download Resume
            <svg
              className="w-3.5 h-3.5"
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
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
