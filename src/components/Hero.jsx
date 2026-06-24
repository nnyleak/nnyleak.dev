import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-name">Kaelynn<br />Amodia</h1>
          <p className="hero-tagline">tagline / short descriptor here</p>
          <div className="hero-buttons">
            <a className="hero-btn" href="#work">VIEW MY WORK</a>
            <a className="hero-btn" href="/resume">RESUME</a>
            <a className="hero-btn" href="#contact">CONTACT</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-about">
            <span className="hero-about-label">ABOUT ME</span>
            <p>
              Lorem ipsum — a short blurb about who you are, what you do,
              and what you're interested in. 2–3 sentences max.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
