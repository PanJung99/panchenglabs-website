import { ArrowDownRight, ArrowUpRight } from "lucide-react";

type HeroSectionProps = {
  content: {
    kicker: string;
    line1: string;
    line2: string;
    line3: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    signal: string;
    status: string;
  };
  isChinese: boolean;
};

export function HeroSection({ content, isChinese }: HeroSectionProps) {
  return (
    <main>
      <section className={`hero${isChinese ? " hero-zh" : ""}`}>
        <div className="hero-grid site-shell">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">
              <span className="status-dot" aria-hidden="true" />
              {content.kicker}
            </p>

            <h1>
              <span>{content.line1}</span>
              <span>{content.line2}</span>
              <span className="hero-accent">{content.line3}</span>
            </h1>

            <div className="hero-bottom">
              <p>{content.intro}</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#about">
                  {content.primaryCta}
                  <ArrowDownRight aria-hidden="true" />
                </a>
                <a className="text-link" href="#contact">
                  {content.secondaryCta}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-topline">
              <span>01</span>
              <span>{content.signal}</span>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="art-core">
              <span>P</span>
            </div>
            <div className="art-status">
              <span className="pulse" />
              {content.status}
            </div>
            <span className="coordinate coordinate-one">38.0428° N</span>
            <span className="coordinate coordinate-two">114.5149° E</span>
          </div>
        </div>
      </section>
    </main>
  );
}

