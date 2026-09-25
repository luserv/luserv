<script lang="ts">
  import { t } from '$lib/i18n';
  import { socialImgs } from '$lib/constants';
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="flex flex-col justify-center">
      <p>{t('footer.terms')}</p>
    </div>
    <div class="socials">
      {#each socialImgs as socialImg, index}
        <div class="icon">
          <img src={socialImg.imgPath} alt={socialImg.name} />
        </div>
      {/each}
    </div>
    <div class="flex flex-col justify-center">
      <p class="text-center md:text-end">
        © {new Date().getFullYear()} LUSER. {t('footer.rights')}
      </p>
    </div>
  </div>
</footer>
