<script lang="ts">
  let { title = '', sub = '' }: { title?: string; sub?: string } = $props();
</script>

<div class="flex flex-col items-center gap-5">
  <div class="hero-badge">
    <p>{sub}</p>
  </div>
  <div>
    <h1 class="font-semibold md:text-5xl text-3xl text-center">{title}</h1>
  </div>
</div>
