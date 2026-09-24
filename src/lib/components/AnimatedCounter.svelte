<script lang="ts">
  import { onMount } from 'svelte';
  import { tRaw } from '$lib/i18n';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { counterItems } from '$lib/constants';

  gsap.registerPlugin(ScrollTrigger);

  let counterEl: HTMLDivElement;
  let counterEls: HTMLDivElement[] = $state([]);

  const labels = $derived(
    (tRaw('counter.items') as Array<{ label: string }>)?.map((i) => i.label) ?? counterItems.map((i) => i.label)
  );

  onMount(() => {
    counterEls.forEach((counter, index) => {
      if (!counter) return;
      const numberElement = counter.querySelector<HTMLElement>('.counter-number');
      const item = counterItems[index];
      if (!numberElement) return;

      gsap.set(numberElement, { innerText: '0' });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: 'power2.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: '#counter',
          start: 'top center'
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        }
      });
    });
  });
</script>

<div id="counter" bind:this={counterEl} class="padding-x-lg xl:mt-0 mt-32">
  <div class="mx-auto grid-4-cols">
    {#each counterItems as item, index}
      <div
        bind:this={counterEls[index]}
        class="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
      >
        <div class="counter-number text-white-50 text-5xl font-bold mb-2">
          0{item.suffix}
        </div>
        <div class="text-white-50 text-lg">{labels[index]}</div>
      </div>
    {/each}
  </div>
</div>
