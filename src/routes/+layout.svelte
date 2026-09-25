<script lang="ts">
  import { initLocale } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import '../styles/globals.css';

  let { data, children } = $props();

  onMount(() => {
    initLocale(data.cookie);
  });
</script>

<svelte:head>
  <!-- Derived from the request so it matches whatever domain the site is served from. -->
  <link rel="canonical" href="{page.url.origin}{page.url.pathname}" />
  <meta property="og:url" content="{page.url.origin}{page.url.pathname}" />
</svelte:head>

{@render children()}
