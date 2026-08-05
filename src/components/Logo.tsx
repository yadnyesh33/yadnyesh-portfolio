import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Logo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const letters = containerRef.current?.querySelectorAll(".logo-letter");
    const underline = containerRef.current?.querySelector(".logo-underline");
    const tagline = containerRef.current?.querySelector(".logo-tagline");
    if (!letters) return;

    const timeline = gsap.timeline();

    timeline.fromTo(
      letters,
      { opacity: 0, y: -24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.05,
        ease: "back.out(1.7)",
      }
    );

    if (underline) {
      timeline.fromTo(
        underline,
        { width: 0, opacity: 0 },
        { width: "100%", opacity: 1, duration: 0.4, ease: "power1.out" },
        "-=0.1"
      );
    }

    if (tagline) {
      timeline.fromTo(
        tagline,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" },
        "-=0.1"
      );
    }
  }, []);

  const name = "yadnyesh";

  return (
    <div ref={containerRef} className="logo-animated-wrap">
      <div className="logo-animated">
        {name.split("").map((char, i) => (
          <span
            key={i}
            className={`logo-letter ${i === 4 ? "logo-accent" : ""}`}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="logo-underline"></div>
      <div className="logo-tagline">
        <span className="logo-dot"></span>
        frontend developer
      </div>
    </div>
  );
};

export default Logo;