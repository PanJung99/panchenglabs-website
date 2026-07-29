import { ArrowUp } from "lucide-react";
import { Brand } from "./Brand";

type FooterProps = {
  content: {
    legal: string;
    privacy: string;
    rights: string;
    back: string;
  };
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-main">
          <Brand />
          <p>{content.legal}</p>
          <a className="back-top" href="#top">
            {content.back}
            <ArrowUp aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Hebei Pancheng Technology Co., Ltd.</span>
          <span>{content.rights}</span>
          <a href="/privacy.html">{content.privacy}</a>
        </div>
      </div>
    </footer>
  );
}

