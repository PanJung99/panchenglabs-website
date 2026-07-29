import { ArrowUpRight } from "lucide-react";

type FocusSectionProps = {
  content: {
    eyebrow: string;
    title: string;
    items: ReadonlyArray<{
      number: string;
      title: string;
      body: string;
    }>;
  };
};

export function FocusSection({ content }: FocusSectionProps) {
  return (
    <section className="focus-section" id="focus">
      <div className="site-shell">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>

        <div className="focus-list">
          {content.items.map((item) => (
            <article className="focus-item" key={item.number}>
              <span className="focus-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

