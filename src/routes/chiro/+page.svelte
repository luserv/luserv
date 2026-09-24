<script lang="ts">
  import { getLocale } from '$lib/i18n';
  import ChiroNav from './ChiroNav.svelte';
  import ChiroFooter from './ChiroFooter.svelte';
  import { getChiroContent, PLAY_STORE_URL, DOWNLOAD_URLS } from './content';

  const c = $derived(getChiroContent(getLocale()));
</script>

<svelte:head>
  <title>Chiro - Control de gastos</title>
</svelte:head>

<div class="chiro">
  <ChiroNav />

  <header class="chiro__hero">
    <div class="chiro__wrap">
      <img class="chiro__hero-logo" src="/chiro/logo.png" alt="Chiro" width="96" height="96" />
      <span class="chiro__badge">{c.hero.badge}</span>
      <h1 class="chiro__title">{c.hero.title}</h1>
      <p class="chiro__tagline">{c.hero.tagline}</p>
      <p class="chiro__desc">{c.hero.description}</p>
      <a class="chiro__cta" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
        ▶ {c.hero.cta}
      </a>
      <p class="chiro__free">{c.hero.free}</p>
    </div>
  </header>

  <section id="features" class="chiro__wrap">
    <h2 class="chiro__section-title">{c.featuresTitle}</h2>
    <div class="chiro__grid">
      {#each c.features as f}
        <div class="chiro__feature">
          <div class="chiro__feature-icon" aria-hidden="true">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      {/each}
    </div>
  </section>

  <section id="downloads" class="chiro__wrap">
    <h2 class="chiro__section-title">{c.downloadsTitle}</h2>
    <p class="chiro__downloads-subtitle">{c.downloadsSubtitle}</p>
    <div class="chiro__downloads">
      {#each c.downloads as d}
        <a class="chiro__download" href="/chiro" target="_blank" rel="noopener noreferrer">
          <span class="chiro__download-icon" aria-hidden="true">{d.icon}</span>
          <span class="chiro__download-text">
            <span class="chiro__download-label">{d.label}</span>
            <span class="chiro__download-note">{d.note}</span>
          </span>
        </a>
      {/each}
    </div>
  </section>

  <ChiroFooter />
</div>
