<script lang="ts">
  import { initLocale } from '$lib/i18n';
  import { onMount } from 'svelte';
  import '../styles/globals.css';

  let { data, children } = $props();

  onMount(() => {
    initLocale(data.cookie);
  });
</script>

{@render children()}
