<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { t } from '$lib/i18n';
  import emailjs from '@emailjs/browser';
  import TitleHeader from '$components/TitleHeader.svelte';
  import { Canvas } from '@threlte/core';
  import { CircleCheck, CircleAlert } from '@lucide/svelte';

  let HeroExperience: any = $state(null);
  let formEl: HTMLFormElement;
  let loading = $state(false);
  let status: 'idle' | 'success' | 'error' = $state('idle');
  let form = $state({ name: '', email: '', message: '' });

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    form = { ...form, [target.name]: target.value };
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    loading = true;
    status = 'idle';
    try {
      const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;
      if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS environment variables are not configured');
      }
      await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        formEl,
        VITE_EMAILJS_PUBLIC_KEY
      );
      form = { name: '', email: '', message: '' };
      status = 'success';
    } catch (error) {
      console.error('EmailJS Error:', error);
      status = 'error';
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
            <button type="submit" disabled={loading}>
              <div class="cta-button group">
                <div class="bg-circle"></div>
                <p class="text">{loading ? t('contact.sending') : t('contact.send')}</p>
                <div class="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
              </div>
            </button>
            <div aria-live="polite">
              {#if status === 'success'}
                <p class="flex items-start gap-2 rounded-lg border border-green-500/40 bg-green-500/10 p-3 text-green-300">
                  <CircleCheck size={20} class="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{t('contact.success')}</span>
                </p>
              {:else if status === 'error'}
                <p role="alert" class="flex items-start gap-2 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-red-300">
                  <CircleAlert size={20} class="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{t('contact.error')}</span>
                </p>
              {/if}
            </div>
            <p class="text-white-50 text-sm">{t('contact.privacy')}</p>
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
