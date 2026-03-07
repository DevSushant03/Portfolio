import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { contactInfo } from "../Constant/ContactData.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

// ── Input Field ───────────────────────────────────────────────────────────────
const Field = ({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
  required,
}) => {
  const [focused, setFocused] = useState(false);
  const base = `w-full bg-white/[0.03] border rounded px-4 font-mono text-sm text-gray-200 placeholder-gray-700 outline-none transition-all duration-300 ${
    focused
      ? "border-green-500 shadow-[0_0_12px_rgba(34,197,94,0.15)]"
      : "border-white/10"
  }`;

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-mono text-gray-600 uppercase tracking-widest">
        <span className="text-green-500">▹</span> {label}
        {required && <span className="text-green-400 ml-1">*</span>}
      </label>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${base} py-3 resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${base} py-3 h-11`}
        />
      )}
    </div>
  );
};

// ── Toast ─────────────────────────────────────────────────────────────────────
const Toast = ({ show, onClose }) => {
  useGSAP(() => {
    if (show) {
      gsap.fromTo(
        "#toast",
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" },
      );
    }
  }, [show]);

  if (!show) return null;
  return (
    <div
      id="toast"
      className="fixed top-6 left-6 z-50 flex items-center gap-3 bg-[#050505] border border-green-500/40 rounded px-5 py-3 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
    >
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-sm font-mono text-green-300">
        Message sent successfully!
      </span>
      <button
        onClick={onClose}
        className="ml-2 text-gray-600 hover:text-white transition-colors text-xs"
      >
        ✕
      </button>
    </div>
  );
};

// ── Main Contact Component ────────────────────────────────────────────────────
export const Contact = () => {
  const [pop, setpop] = useState(false);
  const [sending, setSending] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

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
      gsap.from(leftRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: leftRef.current, start: "top 85%" },
      });
      gsap.from(formRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 85%" },
      });
    },
    { scope: sectionRef },
  );

  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.name_from.value.trim();
    const email = e.target.email_from.value.trim();
    const message = e.target.textarea.value.trim();
    if (!name || !email || !message) return;

    setSending(true);
    emailjs
      .sendForm(
        "service_fm49qg7",
        "template_sb2yi5q",
        e.target,
        "pYJbyra4-KT2s4cOV",
      )
      .then(() => {
        e.target.reset();
        setSending(false);
        setpop(true);
      })
      .catch(() => setSending(false));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#040404] text-white flex justify-center px-6 py-28 overflow-hidden"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
    >
      {/* Background grid */}
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

      {/* Glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 50%, rgba(34,197,94,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t-2 border-l-2 border-green-500 opacity-30" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-b-2 border-r-2 border-green-500 opacity-30" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-16">
        {/* ── Heading ── */}
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-1">
            <p className="text-green-600/60 text-xs tracking-widest uppercase font-mono">
              <span className="text-green-400">04.</span> Get in touch
            </p>
            <div className="overflow-hidden">
              <h2
                ref={headingRef}
                className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white"
              >
                Contact <span className="text-green-400">Me</span>
              </h2>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent mt-6" />
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* ── LEFT ── */}
          <div ref={leftRef} className="flex flex-col gap-8">
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href || undefined}
                  target={href ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`group flex items-start gap-3 p-4 rounded border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/5 ${href ? "cursor-pointer" : "cursor-default"}`}
                >
                  <span className="text-green-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-gray-300 truncate group-hover:text-green-300 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability note */}
            <div className="flex items-center gap-3 p-4 rounded border border-green-500/20 bg-green-500/5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <p className="text-sm text-gray-400">
                Currently{" "}
                <span className="text-green-400 font-semibold">
                  open to internships
                </span>
                , freelance work &amp; collaborations.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div ref={formRef}>
            <div className="rounded border border-green-500/20 bg-white/[0.02] overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-gray-600 font-mono">
                  send_message.js
                </span>
              </div>

              <form onSubmit={sendEmail} className="p-6 flex flex-col gap-5">
                <p className="text-xs text-green-600/60 font-mono mb-1">
                  <span className="text-green-400">$</span> node send_message.js
                </p>

                <Field
                  label="Your Name"
                  name="name_from"
                  placeholder="Sushant Nachanekar"
                  required
                />
                <Field
                  label="Your Email"
                  name="email_from"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
                <Field
                  label="Message"
                  name="textarea"
                  placeholder="Write your message here..."
                  textarea
                  required
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="group relative w-full py-3.5 mt-1 text-sm font-bold uppercase tracking-widest text-black bg-green-500 rounded overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {sending ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
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
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-green-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </button>

                <p className="text-xs text-gray-700 text-center font-mono">
                  — I usually respond within 24 hours —
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Toast show={pop} onClose={() => setpop(false)} />
    </section>
  );
};

export default Contact;
