<script lang="ts">
  import { t, getLocale, toggleLocale } from '$lib/i18n';
  import { navLinks } from '$lib/constants';
  import { onMount } from 'svelte';

  let scrolled = $state(false);

  const navKeys: Record<string, string> = {
    Work: 'work',
    Experience: 'experience',
    Skills: 'skills'
  };
</script>

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

    <div class="flex items-center gap-4">
      <button
        type="button"
        onclick={toggleLocale}
        aria-label="Change language"
        class="bg-black-200 text-white-50 font-semibold px-3 py-1 rounded-lg border border-black-50 hover:bg-black-50 transition-colors duration-300 cursor-pointer"
      >
        {getLocale() === 'en-US' ? 'ES' : 'EN'}
      </button>
    </div>
  </div>
</header>
