<script lang="ts">
  import { getLocale } from '$lib/i18n';
  import { getChiroContent } from './content';

  const c = $derived(getChiroContent(getLocale()));
</script>

<nav class="chiro__nav">
  <a href="/chiro" class="chiro__brand">
    <img src="/chiro/logo.png" alt="Chiro" width="30" height="30" />
    <span>Chiro</span>
  </a>
  <div class="chiro__nav-links">
    <a href="/chiro#features">{c.nav.features}</a>
    <a href="/chiro#downloads">{c.nav.downloads}</a>
    <a href="/chiro/privacy">{c.nav.privacy}</a>
    <a href="/chiro/terms">{c.nav.terms}</a>
  </div>
</nav>
