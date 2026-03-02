import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { locales, defaultLocale } from "@/i18n/locales";

export function useLocaleToggle() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();

  const search = searchParams?.toString() ? `?${searchParams.toString()}` : "";

  // Determine current locale from URL prefix or cookie
  const current =
    locales.find((l) => pathname.startsWith(`/${l.code}`))?.code ||
    (() => {
      try {
        const cookie = document.cookie
          .split(";")
          .map((s) => s.trim())
          .find((s) => s.startsWith("NEXT_LOCALE="));
        if (cookie) return cookie.split("=")[1];
      } catch {}
      return defaultLocale;
    })();

  const changeLocale = (next: string) => {
    let newPath = pathname.replace(
      new RegExp(`^/(${locales.map((l) => l.code).join("|")})`),
      `/${next}`
    );
    if (newPath === pathname) newPath = `/${next}${pathname}`;
    try {
      document.cookie = `NEXT_LOCALE=${next};path=/;max-age=${
        60 * 60 * 24 * 365
      }`;
    } catch {}
    router.push(newPath + search);
  };

  return { current, changeLocale, locales };
}
