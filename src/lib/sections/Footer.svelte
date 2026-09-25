<script lang="ts">
  import { t } from '$lib/i18n';
  import { socialLinks } from '$lib/constants';
  import { brandIcons } from '$lib/icons';
  import { Mail } from '@lucide/svelte';
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="flex flex-col justify-center">
      <p>{t('footer.terms')}</p>
    </div>
    <div class="socials">
      {#each socialLinks as social (social.name)}
        {@const brand = brandIcons[social.icon]}
        <a
          class="icon text-white"
          href={social.href}
          aria-label={social.name}
          target={social.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        >
          {#if brand}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d={brand.path} /></svg>
          {:else}
            <Mail size={22} aria-hidden="true" />
          {/if}
        </a>
      {/each}
    </div>
    <div class="flex flex-col justify-center">
      <p class="text-center md:text-end">
        © {new Date().getFullYear()} LUSER. {t('footer.rights')}
      </p>
    </div>
  </div>
</footer>
