<script lang="ts">
  import { tRaw } from '$lib/i18n';
  import { abilities } from '$lib/constants';

  const cards = $derived(
    ((tRaw('abilities.items') as Array<{ title: string; desc: string }>) ?? []).map((item, i) => ({
      ...abilities[i],
      ...item
    }))
  );
</script>

<div class="w-full padding-x-lg">
  <div class="mx-auto grid-3-cols">
    {#each cards as { imgPath, title, desc } (title)}
      <div class="card-border rounded-xl p-8 flex flex-col gap-4">
        <div class="size-14 flex items-center justify-center rounded-full">
          <img src={imgPath} alt={title} />
        </div>
        <h3 class="text-white text-2xl font-semibold mt-2">{title}</h3>
        <p class="text-white-50 text-lg">{desc}</p>
      </div>
    {/each}
  </div>
</div>
