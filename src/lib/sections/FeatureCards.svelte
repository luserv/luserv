<script lang="ts">
  import { tRaw } from '$lib/i18n';
  import { abilities } from '$lib/constants';
  import { WifiOff, MonitorSmartphone, Layers } from '@lucide/svelte';

  const icons = { 'wifi-off': WifiOff, 'monitor-smartphone': MonitorSmartphone, layers: Layers } as const;

  const cards = $derived(
    ((tRaw('abilities.items') as Array<{ title: string; desc: string }>) ?? []).map((item, i) => ({
      ...abilities[i],
      ...item
    }))
  );
</script>

<div class="w-full padding-x-lg">
  <div class="mx-auto grid-3-cols">
    {#each cards as { icon, title, desc } (title)}
      {@const Icon = icons[icon as keyof typeof icons]}
      <div class="card-border rounded-xl p-8 flex flex-col gap-4">
        <div class="size-14 flex items-center justify-center rounded-full bg-white-50/10 text-white">
          <Icon size={28} aria-hidden="true" />
        </div>
        <h3 class="text-white text-2xl font-semibold mt-2">{title}</h3>
        <p class="text-white-50 text-lg">{desc}</p>
      </div>
    {/each}
  </div>
</div>
