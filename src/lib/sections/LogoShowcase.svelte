<script lang="ts">
  import { logoIconsList } from '$lib/constants';
</script>

<div class="md:my-20 my-10 relative">
  <div class="gradient-edge"></div>
  <div class="gradient-edge"></div>
  <div class="marquee h-52">
    <div class="marquee-box md:gap-12 gap-5">
      {#each logoIconsList as icon, i}
        <div class="flex-none flex-center marquee-item">
          <img src={icon.imgPath} alt="company logo" />
        </div>
      {/each}
      {#each logoIconsList as icon, i}
        <div class="flex-none flex-center marquee-item">
          <img src={icon.imgPath} alt="company logo" />
        </div>
      {/each}
    </div>
  </div>
</div>
