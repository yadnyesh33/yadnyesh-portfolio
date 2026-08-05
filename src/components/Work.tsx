import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Work = () => {
  const flexRef = useRef<HTMLDivElement | null>(null);

const scrollByAmount = (direction: "left" | "right") => {
  const workFlex = flexRef.current;
  if (!workFlex) return;

  const card = workFlex.querySelector<HTMLElement>(".work-box");
  const cardWidth = card ? card.offsetWidth : workFlex.clientWidth * 0.4;
  const scrollAmount = cardWidth * 2;

  workFlex.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex" ref={flexRef}>
          {[...Array(6)].map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>Project Name</h4>
                    <p>Category</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React, Threejs</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>

        <div className="work-arrows">
          <button
            className="work-arrow work-arrow-left"
            onClick={() => scrollByAmount("left")}
            aria-label="Previous project"
          >
            <MdArrowBackIos />
          </button>
          <button
            className="work-arrow work-arrow-right"
            onClick={() => scrollByAmount("right")}
            aria-label="Next project"
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;