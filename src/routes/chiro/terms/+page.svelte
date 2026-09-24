<script lang="ts">
  import { getLocale } from '$lib/i18n';
  import ChiroNav from '../ChiroNav.svelte';
  import ChiroFooter from '../ChiroFooter.svelte';
  import { getChiroContent, LAST_UPDATED } from '../content';

  const c = $derived(getChiroContent(getLocale()));
</script>

<svelte:head>
  <title>Términos y Condiciones - Chiro</title>
</svelte:head>

<div class="chiro">
  <ChiroNav />
  <main class="chiro__wrap chiro__legal">
    <a href="/chiro" class="chiro__back">← Chiro</a>
    <h1>{c.terms.title}</h1>
    <p class="chiro__legal-updated">{c.terms.updated}: {LAST_UPDATED}</p>
    <p class="chiro__legal-intro">{c.terms.intro}</p>
    {#each c.terms.sections as s}
      <section>
        <h2>{s.heading}</h2>
        {#each s.body as p}
          <p>{p}</p>
        {/each}
      </section>
    {/each}
  </main>
  <ChiroFooter />
</div>
