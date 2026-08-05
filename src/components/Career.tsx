import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Kaizen Globe</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Maintained and updated multiple live websites, ensuring smooth performance, content accuracy, and cross-browser compatibility. Built responsive websites from scratch using HTML, CSS, and JavaScript, focusing on clean structure and user-friendly design. Collaborated on troubleshooting and resolving site issues to minimize downtime and improve reliability. Gained hands-on experience translating design requirements into functional, well-structured web pages.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developern Intern</h4>
                <h5>Creative Rebels</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Currently working as a Web Developer Intern, where I'm expanding my frontend expertise with React.js. Contributing to the development of responsive, component-based web applications while strengthening my skills in modern JavaScript practices, state management, and UI implementation. Collaborating with the team to translate design requirements into functional, maintainable code, while continuing to build on my foundation in HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer And SEO Specialists</h4>
                <h5>Creative Rebels</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working full-time as a Frontend Developer and SEO Specialist, building responsive, high-performance web applications using HTML, CSS, JavaScript, TypeScript, and React. Alongside development, I implement SEO best practices to improve site visibility, organic reach, and search performance. This dual focus allows me to build websites that aren't just functional and polished, but also optimized to be discovered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
