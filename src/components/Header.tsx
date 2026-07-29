import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Language } from "../content";
import { Brand } from "./Brand";

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  labels: {
    about: string;
    focus: string;
    games: string;
    contact: string;
  };
};

export function Header({
  language,
  onLanguageChange,
  labels,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["#about", labels.about],
    ["#focus", labels.focus],
    ["#games", labels.games],
    ["#contact", labels.contact],
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />

        <nav
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switcher" aria-label="Language">
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              aria-pressed={language === "en"}
              onClick={() => onLanguageChange("en")}
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={language === "zh" ? "active" : ""}
              aria-pressed={language === "zh"}
              onClick={() => onLanguageChange("zh")}
            >
              中
            </button>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}

