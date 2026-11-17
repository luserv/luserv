<script lang="ts">
  import { onMount } from 'svelte';
  import { t, tRaw } from '$lib/i18n';
  import gsap from 'gsap';
  import Button from '$components/Button.svelte';
  import { words as wordImgPaths, socialLinks } from '$lib/constants';
  import { NO_REDUCED_MOTION_QUERY } from '$lib/motion';

  const wordTexts = $derived(tRaw('hero.words') as string[]);
  const emailHref = socialLinks.find((l) => l.name === 'Email')?.href ?? '';
  let HeroArch: any = $state(null);

  const words = $derived(wordImgPaths.map((w, i) => ({ ...w, text: wordTexts[i] })));

  onMount(() => {
    // The 3D mark only shows from the lg breakpoint, so skip loading three.js below it.
    // Listen for width changes too: the window can be resized or zoomed after load.
    const wide = window.matchMedia('(min-width: 1024px)');
    const loadArch = () => {
      if (wide.matches && !HeroArch) {
        import('$components/models/hero_models/HeroArch.svelte').then((mod) => (HeroArch = mod.default));
      }
    };
    loadArch();
    wide.addEventListener('change', loadArch);

    const mm = gsap.matchMedia();
    mm.add(NO_REDUCED_MOTION_QUERY, () => {
      gsap.fromTo(
        '.hero-text h1',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.out' }
      );
    });
    return () => {
      mm.revert();
      wide.removeEventListener('change', loadArch);
    };
  });
</script>

<section id="hero" class="relative overflow-hidden">
  <div class="absolute top-0 left-0 z-10">
    <img src="/images/bg.png" alt="" />
  </div>

  <div class="hero-layout">
    <header class="grid w-full items-center gap-12 px-5 md:px-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-10 xl:gap-20">
      <div class="flex flex-col gap-7">
        <div class="hero-text">
          <h1>
            {t('hero.line1')}
            <span class="slide">
              <span class="wrapper">
                {#each words as word, index}
                  <span class="flex items-center md:gap-3 gap-1 pb-2">
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      class="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-trace"
                    />
                    <span>{word.text}</span>
                  </span>
                {/each}
              </span>
            </span>
          </h1>
          <h1>{t('hero.line2')}</h1>
          <h1>{t('hero.line3')}</h1>
        </div>

        <p class="text-trace md:text-xl relative z-10 pointer-events-none">
          {t('hero.description')}
        </p>

        <div class="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button text={t('hero.cta')} className="md:w-80 md:h-16 w-60 h-12" id="work" />
          <a href={emailHref} class="hero-email">{t('hero.contactCta')}</a>
        </div>
      </div>


      <div class="hero-3d" aria-hidden="true">
        {#if HeroArch}
          <HeroArch />
        {/if}
      </div>
    </header>
  </div>
</section>
