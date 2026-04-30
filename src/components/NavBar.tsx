"use client";
import { useTranslations } from "next-intl";
import { useNavBar } from "@/hooks/useNavBar";
import { useLocaleToggle } from "@/hooks/useLocaleToggle";
import { navLinks } from "@/constants";

const NavBar = () => {
  const { scrolled } = useNavBar();
  const { current, changeLocale, locales } = useLocaleToggle();
  const t = useTranslations("navbar");

  const navKeys: Record<string, string> = {
    Work: "work",
    Experience: "experience",
    Skills: "skills",
  };

  const onToggleLocale = () => {
    const currentIndex = locales.findIndex((l) => l.code === current);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % locales.length : 0;
    const nextLocale = locales[nextIndex];

    changeLocale(nextLocale.code);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
          <a href="#hero" className="logo">
            Luser
          </a>

          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{t(navKeys[name] ?? name.toLowerCase())}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onToggleLocale}
              aria-label="Change language"
              className="bg-black-200 text-white-50 font-semibold px-3 py-1 rounded-lg border border-black-50 hover:bg-black-50 transition-colors duration-300 cursor-pointer"
            >
              {locales.find((l) => l.code === current)?.label ?? current}
            </button>
          </div>
        </div>
    </header>
  );
};

export default NavBar;
