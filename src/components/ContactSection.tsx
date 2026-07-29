import { ArrowUpRight, Mail } from "lucide-react";

type ContactSectionProps = {
  content: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
  };
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="site-shell contact-grid">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>
        <div className="contact-action">
          <p>{content.body}</p>
          <a href="mailto:contact@panchenglabs.com" className="email-link">
            <span>
              <Mail aria-hidden="true" />
              {content.emailLabel}
            </span>
            <strong>contact@panchenglabs.com</strong>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

