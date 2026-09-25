<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    card = {},
    index = 0,
    children
  }: {
    card?: Record<string, unknown>;
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
  {#if children}
    {@render children()}
  {/if}
</div>
