<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from '$lib/i18n';
  import { CHIRO_URL, CONTACTS_URL } from '$constants';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let sectionEl: HTMLDivElement;
  let project1El: HTMLDivElement;
  let project2El: HTMLDivElement;
  let project3El: HTMLDivElement;

  onMount(() => {
    gsap.fromTo(sectionEl, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    const cards = [project1El, project2El, project3El];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: 'top bottom-=100' }
        }
      );
    });
  });
</script>

<div id="work" bind:this={sectionEl} class="app-showcase">
  <div class="w-full">
    <div class="showcaselayout">
      <div bind:this={project1El} class="first-project-wrapper">
        <a href={CHIRO_URL} target="_blank" rel="noopener noreferrer" class="flex h-full flex-col justify-between">
          <div class="image-wrapper">
            <img src="/images/projects/chiro.webp" alt="Chiro landing page" />
          </div>
          <div class="text-content">
            <h2>{t('showcase.project1Title')}</h2>
            <p class="text-white-50 md:text-xl">{t('showcase.project1Desc')}</p>
          </div>
        </a>
      </div>

      <div class="project-list-wrapper overflow-hidden">
        <div bind:this={project2El}>
          <a href={CONTACTS_URL} target="_blank" rel="noopener noreferrer">
            <div class="image-wrapper bg-[#F2F2F7]">
              <img src="/images/projects/contacts.webp" alt="Contacts sign-in screen" />
            </div>
            <h2>{t('showcase.project2Title')}</h2>
          </a>
        </div>

        <div bind:this={project3El}>
          <div class="image-wrapper bg-[#FFE7EB]">
            <img src="/images/project3.png" alt="Cloud Infrastructure App" />
          </div>
          <h2>{t('showcase.project3Title')}</h2>
        </div>
      </div>
    </div>
  </div>
</div>
