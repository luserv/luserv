<script lang="ts">
  import { t, getLocale, setLocale } from '$lib/i18n';
  import { locales } from '$lib/i18n/locales';
  import { navLinks } from '$lib/constants';
  import { Languages } from '@lucide/svelte';

  let scrollY = $state(0);
  const scrolled = $derived(scrollY > 10);

  const navKeys: Record<string, string> = {
    Work: 'work',
    Experience: 'experience',
    Skills: 'skills'
  };
</script>

<svelte:window bind:scrollY />

<header class="navbar {scrolled ? 'scrolled' : 'not-scrolled'}">
  <div class="inner">
    <a href="#hero" class="logo">LUSER</a>

    <nav class="desktop">
      <ul>
        {#each navLinks as { link, name } (name)}
          <li class="group">
            <a href={link}>
              <span>{t(`navbar.${navKeys[name] ?? name.toLowerCase()}`)}</span>
              <span class="underline"></span>
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <div class="lang-switch" role="group" aria-label="Language">
      <Languages size={18} class="lang-icon" aria-hidden="true" />
      <div class="lang-track">
        <span class="lang-pill {getLocale() === 'es-ES' ? 'is-right' : ''}" aria-hidden="true"></span>
        {#each locales as { code, label } (code)}
          <button
            type="button"
            class="lang-option {getLocale() === code ? 'is-active' : ''}"
            aria-pressed={getLocale() === code}
            onclick={() => setLocale(code)}
          >
            {label}
          </button>
        {/each}
      </div>
    </div>
  </div>
</header>
