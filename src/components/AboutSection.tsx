type AboutSectionProps = {
  content: {
    eyebrow: string;
    title: string;
    body: string;
    aside: string;
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
  };
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="about-section" id="about">
      <div className="site-shell">
        <p className="eyebrow light">{content.eyebrow}</p>
        <div className="about-grid">
          <h2>{content.title}</h2>
          <div className="about-body">
            <p className="lead">{content.body}</p>
            <p className="muted">{content.aside}</p>
          </div>
        </div>

        <div className="principles">
          <div className="principle-card">
            <span className="principle-index">A</span>
            <strong>{content.stat1}</strong>
            <span>{content.stat1Label}</span>
          </div>
          <div className="principle-card green">
            <span className="principle-index">B</span>
            <strong>{content.stat2}</strong>
            <span>{content.stat2Label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

