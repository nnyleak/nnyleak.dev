import stats from "../data/stats.json";
import "./Stats.css";

function Stats() {
  return (
    <section className="stats">
      <div className="stats-inner">
        <div className="stats-header">
          <h3 className="stats-title">character sheet</h3>
          <div className="stats-divider" />
        </div>
        <div className="stats-panel">
          <div className="panel-titlebar">
            <span className="panel-label">kaelynn.stats</span>
          </div>
          <div className="stats-panel-body">
          <div className="stats-identity">
            <span className="stats-name">kaelynn amodia</span>
            <span className="stats-role">WEB DEVELOPER &amp; GAME DESIGNER</span>
            <span className="stats-lv">LV. 23 &bull; RIT &apos;25</span>
          </div>

          <div className="stats-section">
            <span className="stats-section-label">SKILLS</span>
            <div className="stats-skills-grid">
              {stats.skills.map((skill) => (
                <div key={skill.name + skill.percent} className="stats-skill-row">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: `${skill.percent}%` }} />
                  </div>
                  <span className="skill-percent">{skill.percent}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="stats-thin-divider" />

          <div className="stats-section stats-section--inline">
            <span className="stats-section-label">OFF THE CLOCK</span>
            <p className="stats-hobbies">
              {stats.offTheClock.map((item, i) => (
                <span key={item + i}>
                  {item}{i < stats.offTheClock.length - 1 && <span className="stats-bullet"> &bull; </span>}
                </span>
              ))}
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
