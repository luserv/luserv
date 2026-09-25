<script lang="ts">
  import { initLocale } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import '../styles/globals.css';

  injectAnalytics({ mode: dev ? 'development' : 'production' });

  let { data, children } = $props();

  onMount(() => {
    initLocale(data.cookie);
  });
</script>

{@render children()}
