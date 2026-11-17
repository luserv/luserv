<script lang="ts">
  import { onMount } from 'svelte';
  import { Monitor, Sun, Moon } from '@lucide/svelte';
  import { t } from '$lib/i18n';
  import { getTheme, setTheme, initTheme, type Theme } from '$lib/theme.svelte';

  const options: Array<{ value: Theme; icon: typeof Monitor; key: string }> = [
    { value: 'system', icon: Monitor, key: 'navbar.themeSystem' },
    { value: 'light', icon: Sun, key: 'navbar.themeLight' },
    { value: 'dark', icon: Moon, key: 'navbar.themeDark' }
  ];

  const index = $derived(options.findIndex((o) => o.value === getTheme()));

  onMount(initTheme);
</script>

<div class="theme-switch" role="group" aria-label={t('navbar.themeLabel')}>
  <span class="theme-pill" style={`transform: translateX(${index * 100}%)`} aria-hidden="true"></span>
  {#each options as { value, icon: Icon, key } (value)}
    <button
      type="button"
      class="theme-option {getTheme() === value ? 'is-active' : ''}"
      aria-pressed={getTheme() === value}
      aria-label={t(key)}
      title={t(key)}
      onclick={() => setTheme(value)}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  {/each}
</div>
