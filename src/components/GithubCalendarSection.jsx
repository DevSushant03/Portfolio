import { useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const GithubCalendarSection = () => {
  const sectionRef = useRef(null);
  const calendarRef = useRef(null);
  const statsRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(calendarRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: calendarRef.current, start: "top 88%" },
      });

      gsap.from(Array.from(statsRef.current?.children || []), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 90%" },
      });
    },
    { scope: sectionRef },
  );

  const calendarTheme = {
    dark: ["#0d0d0d", "#14532d", "#16a34a", "#22c55e", "#4ade80"],
  };

  return (
    <section
      id="github"
      ref={sectionRef}
      className="relative w-full bg-[#040404] text-white flex justify-center"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
    >
      {/* FIX 1: Removed mx-2 from section — it was adding horizontal margin that
          caused the section to slightly overflow its parent on narrow viewports.
          Container width + margin > 100vw on mobile. */}

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-16 px-4">
        {/* FIX 2: Added px-4 here instead of the old mx-2 on the section, so
            horizontal padding is applied inside the scroll boundary, not outside it. */}

        <div
          ref={calendarRef}
          className="w-full rounded border border-green-500/20 bg-white/[0.02]"
        >
          {/* FIX 3: Changed w-5xl (non-standard Tailwind class, was being ignored /
              falling back to auto width wider than viewport) → w-full so the card
              never exceeds its container on any screen size. */}

          <div className="flex items-center justify-between px-5 py-3 bg-white/[0.03] border-b border-white/5 flex-wrap gap-2">
            {/* FIX 4: Added flex-wrap gap-2 to the header bar so the two sides
                stack gracefully on very small screens instead of overflowing. */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-gray-600 font-mono truncate max-w-[160px] sm:max-w-none">
                {/* FIX 5: Added truncate + max-w on small screens so the long
                    filename string doesn't push the header wider than the card. */}
                contributions.log — devsushant03
              </span>
            </div>
            <a
              href="https://github.com/DevSushant03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-green-400 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Profile ↗
            </a>
          </div>

          {/* Terminal prompt */}
          <div className="px-5 pt-4 pb-2">
            <p className="text-xs text-green-600/70 font-mono overflow-x-auto whitespace-nowrap">
              {/* FIX 6: Added overflow-x-auto + whitespace-nowrap on the prompt
                  line so it scrolls independently rather than stretching the card. */}
              <span className="text-green-400">$</span> git log --all --oneline
              --graph --author="DevSushant03"
            </p>
          </div>

          {/* Calendar — the main overflow culprit */}
          <div className="px-5 pb-6 overflow-x-auto">
            {/* FIX 7: The inner div previously had min-w-[600px] with no scrollable
                ancestor that was narrower, so the 600 px minimum leaked into the
                page layout. overflow-x-auto on the parent div was already there but
                the parent itself had no explicit width constraint (w-5xl was broken),
                so it never triggered a scroll box. Now that the card is w-full, the
                overflow-x-auto wrapper actually clips correctly and the calendar
                scrolls horizontally inside the card on narrow screens. */}
            <div className="min-w-[600px]">
              <GitHubCalendar
                username="devsushant03"
                theme={calendarTheme}
                colorScheme="dark"
                fontSize={11}
                blockSize={13}
                blockMargin={4}
                blockRadius={2}
                style={{ color: "#4b5563" }}
              />
            </div>
          </div>

          {/* Legend / footer */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 bg-white/[0.02] flex-wrap gap-3">
            <p className="text-xs text-gray-700 font-mono">
              Less commits{" "}
              <span className="inline-flex gap-1 mx-2 align-middle">
                {["#0d0d0d", "#14532d", "#16a34a", "#22c55e", "#4ade80"].map(
                  (c) => (
                    <span
                      key={c}
                      className="inline-block w-3 h-3 rounded-sm border border-white/5"
                      style={{ backgroundColor: c }}
                    />
                  ),
                )}
              </span>{" "}
              More commits
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-600">Live data</span>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="flex items-center justify-center w-full">
          <a
            href="https://github.com/DevSushant03"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded border border-green-500/30 bg-green-500/5 text-green-400 text-sm font-bold uppercase tracking-widest hover:bg-green-500/10 hover:border-green-500/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300 text-center"
          >
            {/* FIX 8: Reduced px-8 → px-6 on small screens (sm:px-8 restores it
                at ≥640 px) so the button doesn't overflow its container on very
                narrow phones. Also added w-full to the wrapper so it doesn't
                clip. */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 shrink-0"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Explore All Repositories
            <svg
              className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform"
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
          </a>
        </div>

        {/* Spacer ref kept so GSAP animation target is preserved */}
        <div ref={statsRef} />
      </div>
    </section>
  );
};

export default GithubCalendarSection;
