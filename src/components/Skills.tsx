export default function Skills() {
  return (
    <>
      <div className="section-divider"><span className="num mono">02</span><span className="rule"></span><span className="label">Keahlian</span></div>
      <section id="skills">
        <div className="wrap skills-grid">
          <div className="skill-group reveal">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li>HTML &amp; CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skill-group reveal">
            <h3>Tools &amp; Backend</h3>
            <ul className="skill-list">
              <li>Git &amp; GitHub</li>
              <li>Figma</li>
              <li>Prisma</li>
              <li>REST API</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}