<script lang="ts">
  import { t, getLocale, toggleLocale } from '$lib/i18n';
  import Hero from '$sections/Hero.svelte';
  import ShowcaseSection from '$sections/ShowcaseSection.svelte';
  import FeatureCards from '$sections/FeatureCards.svelte';
  import Experience from '$sections/Experience.svelte';
  import TechStack from '$sections/TechStack.svelte';
  import Contact from '$sections/Contact.svelte';
  import Footer from '$sections/Footer.svelte';
  import NavBar from '$components/NavBar.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    document.title = t('LocaleLayout.title');
  });
</script>

<NavBar />
<Hero />
<ShowcaseSection />
<FeatureCards />
<Experience />
<TechStack />
<Contact />
<Footer />
