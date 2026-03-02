"use client";
import { useNavBar } from "@/hooks/useNavBar";
import { useLocaleToggle } from "@/hooks/useLocaleToggle";

const NavBar = () => {
  const { scrolled } = useNavBar();
  const { current, changeLocale, locales } = useLocaleToggle();

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner flex items-center justify-between">
        <a href="#hero" className="logo">
          Luser
        </a>

        <LocaleSelector
          current={current}
          locales={locales}
          onChange={changeLocale}
        />
      </div>
    </header>
  );
}

export default NavBar;

interface LocaleSelectorProps {
  current: string;
  locales: { code: string; label: string }[];
  onChange: (locale: string) => void;
}

// simple <select> picker; you can substitute for a styled dropdown/menu
function LocaleSelector({ current, locales, onChange }: LocaleSelectorProps) {
  return (
    <select
      value={current}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Idioma"
      className="font-bold px-2 py-1 rounded border border-gray-300 hover:bg-cyan-100 hover:text-black"
    >
      {locales.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}

