<script lang="ts">
  import { t, tRaw } from '$lib/i18n';
  import TitleHeader from '$components/TitleHeader.svelte';
  import { Server, Database, ShieldCheck, Monitor, Cloud, Terminal, Cpu, ClipboardList } from '@lucide/svelte';

  // Same order as techStack.categories in messages/*.json.
  const icons = [Server, Database, ShieldCheck, Monitor, Cloud, Terminal, Cpu, ClipboardList];

  const categories = $derived((tRaw('techStack.categories') as Array<{ title: string; items: string[] }>) ?? []);
</script>

<div id="skills" class="flex-center section-padding">
  <div class="w-full h-full md:px-10 px-5">
    <TitleHeader title={t('techStack.title')} sub={t('techStack.sub')} />
    <h3 class="skill-panel-title sr-only">{t('techStack.skillsTitle')}</h3>
    <div class="skill-categories">
      {#each categories as category, i (category.title)}
        {@const Icon = icons[i]}
        <section class="skill-category card-border">
          <div class="skill-category-head">
            {#if Icon}<Icon size={20} aria-hidden="true" />{/if}
            <h4>{category.title}</h4>
          </div>
          <ul>
            {#each category.items as item (item)}
              <li>{item}</li>
            {/each}
          </ul>
        </section>
      {/each}
    </div>
  </div>
</div>
