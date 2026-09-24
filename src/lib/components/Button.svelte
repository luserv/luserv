<script lang="ts">
  let { text = '', className = '', id = '' }: { text?: string; className?: string; id?: string } = $props();

  function handleClick(e: Event) {
    e.preventDefault();
    if (!id) return;
    const target = document.getElementById('counter');
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
</script>

<a onclick={handleClick} class="{className} cta-wrapper" href="#counter">
  <div class="cta-button group">
    <div class="bg-circle"></div>
    <p class="text">{text}</p>
    <div class="arrow-wrapper">
      <img src="/images/arrow-down.svg" alt="arrow" />
    </div>
  </div>
</a>
