<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    card = {},
    index = 0,
    children
  }: {
    card?: { review?: string; [key: string]: unknown };
    index?: number;
    children?: Snippet;
  } = $props();

  let cardEl: HTMLDivElement;

  function handleMouseMove(e: MouseEvent) {
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    cardEl.style.setProperty('--start', String(angle + 60));
  }
</script>

<div
  bind:this={cardEl}
  onmousemove={handleMouseMove}
  role="presentation"
  class="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
>
  <div class="glow"></div>
  <div class="flex items-center gap-1 mb-5">
    {#each Array.from({ length: 5 }) as _, i}
      <img src="/images/star.png" alt="star" class="size-5" />
    {/each}
  </div>
  {#if card.review}
    <div class="mb-5">
      <p class="text-white-50 text-lg">{card.review}</p>
    </div>
  {/if}
  {#if children}
    {@render children()}
  {/if}
</div>
