<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { t, tRaw } from '$lib/i18n';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { expCards } from '$lib/constants';
  import { brandIcons } from '$lib/icons';
  import TitleHeader from '$components/TitleHeader.svelte';
  import GlowCard from '$components/GlowCard.svelte';

  gsap.registerPlugin(ScrollTrigger);

  type CardData = { title: string; date: string; responsibilities: string[] };

  const cards = $derived(
    ((tRaw('experience.cards') as CardData[]) ?? []).map((card, i) => ({
      ...expCards[i],
      ...card
    }))
  );

  onMount(() => {
    gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: card, start: 'top 80%' }
      });
    });

    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self) => {
          gsap.to('.timeline', { scaleY: 1 - self.progress });
        }
      }
    });

    gsap.utils.toArray<HTMLElement>('.expText').forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: text, start: 'top 60%' }
      });
    });
  });
</script>

<section id="experience" class="flex-center md:mt-40 mt-20 section-padding xl:px-0">
  <div class="w-full h-full md:px-20 px-5">
    <TitleHeader title={t('experience.title')} sub={t('experience.sub')} />
    <div class="mt-32 relative">
      <div class="relative z-50 xl:space-y-32 space-y-10">
        {#each cards as card (card.title)}
          <div class="exp-card-wrapper">
            <div class="xl:w-2/6">
              <GlowCard {card}>
                <div class="flex flex-col gap-4">
                  {#each card.imgPaths as imgPath (imgPath)}
                    <img src={imgPath} alt={card.title} />
                  {/each}
                </div>
              </GlowCard>
            </div>
            <div class="xl:w-4/6">
              <div class="flex items-start">
                <div class="timeline-wrapper">
                  <div class="timeline"></div>
                  <div class="gradient-line w-1 h-full"></div>
                </div>
                <div class="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                  <div class="timeline-logo">
                    {#if brandIcons[card.icon]}
                      <svg viewBox="0 0 24 24" role="img" aria-label={brandIcons[card.icon].title} width="60%" height="60%" style={`fill: ${card.color}`}>
                        <path d={brandIcons[card.icon].path} />
                      </svg>
                    {/if}
                  </div>
                  <div>
                    <h1 class="font-semibold text-3xl">{card.title}</h1>
                    <p class="my-5 text-white-50">{card.date}</p>
                    <p class="text-[#839CB5] italic">{t('experience.responsibilities')}</p>
                    <ul class="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                      {#each card.responsibilities as responsibility, index}
                        <li class="text-lg break-words">{responsibility}</li>
                      {/each}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
