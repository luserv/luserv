<script lang="ts">
  import { getLocale } from '$lib/i18n';
  import { getChiroContent, CONTACT_EMAIL } from './content';

  const c = $derived(getChiroContent(getLocale()));
</script>

<footer class="chiro__footer">
  <div class="chiro__wrap">
    <div class="chiro__footer-links">
      <a href="/chiro/terms">{c.footer.terms}</a>
      <a href="/chiro/privacy">{c.footer.privacy}</a>
      <a href="/chiro/delete">{c.footer.delete}</a>
      <a href="mailto:{CONTACT_EMAIL}">{c.footer.contact}</a>
    </div>
    <p class="chiro__footer-rights">© {new Date().getFullYear()} Chiro · {c.footer.rights}</p>
  </div>
</footer>
