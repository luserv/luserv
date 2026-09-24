<script lang="ts">
  import { onMount } from 'svelte';
  import { t, tRaw } from '$lib/i18n';
  import gsap from 'gsap';
  import Button from '$components/Button.svelte';
  import { words as wordImgPaths } from '$lib/constants';

  const wordTexts = $derived(tRaw('hero.words') as string[]);
  const words = $derived(wordImgPaths.map((w, i) => ({ ...w, text: wordTexts[i] })));

  onMount(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' }
    );
  });
</script>

<section id="hero" class="relative overflow-hidden">
  <div class="absolute top-0 left-0 z-10">
    <img src="/images/bg.png" alt="" />
  </div>

  <div class="hero-layout">
    <header class="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
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
                      class="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
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

        <p class="text-white-50 md:text-xl relative z-10 pointer-events-none">
          {t('hero.description')}
        </p>

        <Button text={t('hero.cta')} className="md:w-80 md:h-16 w-60 h-12" id="work" />
      </div>
    </header>
  </div>
</section>
