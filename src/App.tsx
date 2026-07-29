import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { content, type Language } from "./content";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { FocusSection } from "./components/FocusSection";
import { GamesSection } from "./components/GamesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Brand } from "./components/Brand";

function getInitialLanguage(): Language {
  const saved = localStorage.getItem("pancheng-language");
  return saved === "zh" || saved === "en" ? saved : "en";
}

function PrivacyPage({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  const copy = content[language];

  return (
    <div className="legal-page">
      <header className="legal-header">
        <Brand />
        <div className="language-switcher" aria-label="Language">
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <span>/</span>
          <button
            type="button"
            className={language === "zh" ? "active" : ""}
            onClick={() => setLanguage("zh")}
          >
            中
          </button>
        </div>
      </header>
      <main className="legal-content">
        <a className="legal-back" href="./">
          <ArrowLeft aria-hidden="true" />
          {copy.privacy.backHome}
        </a>
        <p className="eyebrow">{copy.privacy.updated}</p>
        <h1>{copy.privacy.title}</h1>
        <p className="legal-intro">{copy.privacy.intro}</p>
        <div className="legal-sections">
          {copy.privacy.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
        <p className="legal-scope">{copy.privacy.scope}</p>
      </main>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const isPrivacyPage = window.location.pathname.endsWith("privacy.html");

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    localStorage.setItem("pancheng-language", language);
  }, [language]);

  if (isPrivacyPage) {
    return (
      <PrivacyPage language={language} setLanguage={setLanguage} />
    );
  }

  const copy = content[language];

  return (
    <div id="top">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        labels={copy.nav}
      />
      <HeroSection content={copy.hero} isChinese={language === "zh"} />
      <AboutSection content={copy.about} />
      <FocusSection content={copy.focus} />
      <GamesSection content={copy.games} />
      <ContactSection content={copy.contact} />
      <Footer content={copy.footer} />
    </div>
  );
}
