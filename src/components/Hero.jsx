import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-roles">&gt; web developer • ui/ux • game design_</p>
          <h1 className="hero-name">
            Kaelynn
            <br />
            Amodia
          </h1>
          <p className="hero-tagline">
            thoughtfully designed, intentionally interactive
          </p>
          <p className="hero-divider">⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂ ⠂⠄⠄⠂☆</p>
          <div className="hero-buttons">
            <a className="hero-btn work" href="#work">
              VIEW MY WORK
            </a>
            <a className="hero-btn resume" href="/resume">
              RESUME
            </a>
            <a className="hero-btn contact" href="#contact">
              CONTACT
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-about">
            <div className="panel-titlebar">
              <span className="panel-label">about_me.txt</span>
            </div>
            <div className="hero-about-body">
              <p>
                hi! i’m a 23-year old filipina web developer and game designer.
                <span style={{ color: "var(--accent-pink)" }}>
                  {" "}
                  i recently graduated from RIT with a bachelor’s in game design
                  & development.
                </span>
                <br />
                <br />
                <span style={{ color: "var(--accent-purple" }}>
                  i grew up immersed in games, and they taught me that every
                  detail matters. the way something moves, responds, and guides
                  a user can completely change how an experience feels.
                </span>
                <br />
                <br />
                now, i bring that perspective into web development. i’m
                interested in the spaces where design, interaction, and
                story-telling overlap. i strive to build experiences that feel
                intentional, memorable, and{" "}
                <span style={{ color: "var(--accent-pink)" }}>human.</span>
              </p>
              <p className="status">
                <span className="status-bullet pulsing-glow">•</span> available for work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
