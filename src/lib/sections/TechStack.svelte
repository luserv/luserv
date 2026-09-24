<script lang="ts">
  import { onMount } from 'svelte';
  import { t, tRaw } from '$lib/i18n';
  import { browser } from '$app/environment';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import TitleHeader from '$components/TitleHeader.svelte';
  import { techStackIcons } from '$lib/constants';
  import { Canvas } from '@threlte/core';

  gsap.registerPlugin(ScrollTrigger);

  let TechIconCardExperience: any = $state(null);

  const items = $derived((tRaw('techStack.items') as Array<{ name: string }>) ?? []);
  const icons = $derived(techStackIcons.map((icon, i) => ({ ...icon, name: items[i]?.name ?? icon.name })));

  onMount(async () => {
    if (browser) {
      const mod = await import('$components/models/tech_logos/TechIconCardExperience.svelte');
      TechIconCardExperience = mod.default;
    }

    gsap.fromTo(
      '.tech-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: { trigger: '#skills', start: 'top center' }
      }
    );
  });
</script>

<div id="skills" class="flex-center section-padding">
  <div class="w-full h-full md:px-10 px-5">
    <TitleHeader title={t('techStack.title')} sub={t('techStack.sub')} />
    <div class="tech-grid">
      {#each icons as icon (icon.name)}
        <div class="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
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
  </div>
</div>
