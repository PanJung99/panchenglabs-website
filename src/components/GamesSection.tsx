import { Gamepad2 } from "lucide-react";

type GamesSectionProps = {
  content: {
    eyebrow: string;
    label: string;
    title: string;
    body: string;
    note: string;
  };
};

export function GamesSection({ content }: GamesSectionProps) {
  return (
    <section className="games-section" id="games">
      <div className="site-shell">
        <p className="eyebrow light">{content.eyebrow}</p>
        <div className="game-preview">
          <div className="game-visual" aria-hidden="true">
            <div className="game-grid" />
            <div className="game-token token-one">+</div>
            <div className="game-token token-two">●</div>
            <div className="game-token token-three">▲</div>
            <Gamepad2 />
          </div>
          <div className="game-copy">
            <span className="development-label">
              <span />
              {content.label}
            </span>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
            <div className="game-note">
              <span>00</span>
              {content.note}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

