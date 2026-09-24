/// <reference types="@sveltejs/kit" />

declare namespace App {
  interface Locals {
    locale: string;
  }
  interface Locales {
    'en-US': string;
    'es-ES': string;
  }
}
