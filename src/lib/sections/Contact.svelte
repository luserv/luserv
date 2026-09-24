<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { t } from '$lib/i18n';
  import emailjs from '@emailjs/browser';
  import TitleHeader from '$components/TitleHeader.svelte';
  import { Canvas } from '@threlte/core';

  let HeroExperience: any = $state(null);
  let formEl: HTMLFormElement;
  let loading = $state(false);
  let form = $state({ name: '', email: '', message: '' });

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    form = { ...form, [target.name]: target.value };
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    loading = true;
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formEl,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      form = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      loading = false;
    }
  }

  onMount(async () => {
    if (browser) {
      const mod = await import('$components/models/hero_models/HeroExperience.svelte');
      HeroExperience = mod.default;
    }
  });
</script>

<section id="contact" class="flex-center section-padding">
  <div class="w-full h-full md:px-10 px-5">
    <TitleHeader title={t('contact.title')} sub={t('contact.sub')} />
    <div class="grid-12-cols mt-16">
      <div class="xl:col-span-5">
        <div class="flex-center card-border rounded-xl p-10">
          <form bind:this={formEl} onsubmit={handleSubmit} class="w-full flex flex-col gap-7">
            <div>
              <label for="name">{t('contact.nameLabel')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                oninput={handleChange}
                placeholder={t('contact.namePlaceholder')}
                required
              />
            </div>
            <div>
              <label for="email">{t('contact.emailLabel')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                oninput={handleChange}
                placeholder={t('contact.emailPlaceholder')}
                required
              />
            </div>
            <div>
              <label for="message">{t('contact.messageLabel')}</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                oninput={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit">
              <div class="cta-button group">
                <div class="bg-circle"></div>
                <p class="text">{loading ? t('contact.sending') : t('contact.send')}</p>
                <div class="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
      <div class="xl:col-span-7 min-h-96">
        <div class="bg-[#0a0a1a] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
          {#if HeroExperience}
            <Canvas>
              <HeroExperience />
            </Canvas>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
