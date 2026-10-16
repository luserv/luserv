<script lang="ts">
  import { onMount } from 'svelte';
  import { t, tRaw } from '$lib/i18n';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import TitleHeader from '$components/TitleHeader.svelte';
  import { techStackIcons, skillChips } from '$lib/constants';
  import { brandIcons } from '$lib/icons';
  import { Canvas } from '@threlte/core';
  import { NO_REDUCED_MOTION_QUERY } from '$lib/motion';
  import { inview } from '$lib/inview';

  gsap.registerPlugin(ScrollTrigger);

  let TechIconCardExperience: any = $state(null);

  function loadScene() {
    import('$components/models/tech_logos/TechIconCardExperience.svelte').then((mod) => {
      TechIconCardExperience = mod.default;
    });
  }

  const items = $derived((tRaw('techStack.items') as Array<{ name: string }>) ?? []);
  const icons = $derived(techStackIcons.map((icon, i) => ({ ...icon, name: items[i]?.name ?? icon.name })));

  onMount(() => {
    const mm = gsap.matchMedia();
    mm.add(NO_REDUCED_MOTION_QUERY, () => {
    gsap.fromTo(
      '.tech-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: { trigger: '#skills', start: 'top center' }
      }
    );

    gsap.fromTo(
      '.skill-chip',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: { trigger: '.skill-chip-grid', start: 'top bottom-=50' }
      }
    );
    });
    return () => mm.revert();
  });
</script>

<div id="skills" class="flex-center section-padding">
  <div class="w-full h-full md:px-10 px-5">
    <TitleHeader title={t('techStack.title')} sub={t('techStack.sub')} />
    <div class="tech-grid" use:inview={loadScene}>
      {#each icons as icon (icon.name)}
        <div class="card-border tech-card overflow-hidden group rounded-2xl">
          <div class="tech-card-content">
            <div class="tech-icon-wrapper">
              {#if TechIconCardExperience}
                <Canvas>
                  <TechIconCardExperience model={icon} />
                </Canvas>
              {/if}
            </div>
            <div class="padding-x w-full">
              <p>{icon.name}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <h3 class="text-white-50 text-xl md:text-2xl font-semibold text-center mt-16">{t('techStack.skillsTitle')}</h3>
    <div class="skill-chip-grid">
      {#each skillChips as chip (chip.name)}
        {@const icon = brandIcons[chip.icon]}
        <div class="skill-chip card-border">
          {#if icon}
            <svg viewBox="0 0 24 24" role="img" aria-label={chip.name} width="28" height="28" style={`fill: ${chip.color}`}>
              <path d={icon.path} />
            </svg>
          {/if}
          <span>{chip.name}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
