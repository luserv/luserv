import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { CONTACT_EMAIL, getChiroContent } from './content';

export function ChiroNav({ locale }: { locale: string }) {
  const c = getChiroContent(locale);
  return (
    <nav className="chiro__nav">
      <Link href="/chiro" className="chiro__brand">
        <Image src="/chiro/logo.png" alt="Chiro" width={30} height={30} />
        <span>Chiro</span>
      </Link>
      <div className="chiro__nav-links">
        <Link href="/chiro#features">{c.nav.features}</Link>
        <Link href="/chiro/privacy">{c.nav.privacy}</Link>
        <Link href="/chiro/terms">{c.nav.terms}</Link>
      </div>
    </nav>
  );
}

export function ChiroFooter({ locale }: { locale: string }) {
  const c = getChiroContent(locale);
  return (
    <footer className="chiro__footer">
      <div className="chiro__wrap">
        <div className="chiro__footer-links">
          <Link href="/chiro/terms">{c.footer.terms}</Link>
          <Link href="/chiro/privacy">{c.footer.privacy}</Link>
          <Link href="/chiro/delete">{c.footer.delete}</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{c.footer.contact}</a>
        </div>
        <p className="chiro__footer-rights">© {new Date().getFullYear()} Chiro · {c.footer.rights}</p>
      </div>
    </footer>
  );
}
