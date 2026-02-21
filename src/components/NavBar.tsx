"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";


const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Luser
        </a>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button
            onClick={() => {
              const router = useRouter();
              // noop: replaced below with hook-based handler
            }}
            style={{ display: 'none' }}
          />

          <LocaleToggle />

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;

function LocaleToggle() {
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const searchParams = useSearchParams();

  const search = searchParams ? (searchParams.toString() ? `?${searchParams.toString()}` : '') : '';

  const current = (() => {
    const m = pathname.match(/^\/(en-US|es-ES)(\/|$)/);
    if (m) return m[1];
    // fallback to cookie or default
    try {
      const cookie = document.cookie.split(';').map(s => s.trim()).find(s => s.startsWith('NEXT_LOCALE='));
      if (cookie) return cookie.split('=')[1];
    } catch (e) {}
    return 'en-US';
  })();

  const next = current === 'en-US' ? 'es-ES' : 'en-US';

  const handleToggle = () => {
    let newPath = pathname.replace(/^\/(en-US|es-ES)/, `/${next}`);
    if (newPath === pathname) newPath = `/${next}${pathname}`;
    // set cookie to persist preference (1 year)
    try {
      document.cookie = `NEXT_LOCALE=${next};path=/;max-age=${60 * 60 * 24 * 365}`;
    } catch (e) {}
    router.push(newPath + search);
  };

  return (
    <button onClick={handleToggle} aria-label="Cambiar idioma" className="locale-btn">
      {next === 'es-ES' ? 'ES' : 'EN'}
    </button>
  );
}
