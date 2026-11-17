<h1 align="center">trace, by Vidal</h1>

<p align="center">
  Web apps that leave a trace: reliable data and a clear history of every change, built with Go, SvelteKit and PostgreSQL, from the model to production.
</p>

<p align="center">
  <a href="https://treis.cc"><img src="https://img.shields.io/badge/Portfolio-treis.cc-1793d1?style=for-the-badge&logo=svelte&logoColor=white&labelColor=0e0e10" alt="Portfolio"/></a>
  <a href="mailto:u3.dev@icloud.com"><img src="https://img.shields.io/badge/Email-u3.dev%40icloud.com-1793d1?style=for-the-badge&logo=icloud&logoColor=white&labelColor=0e0e10" alt="Email"/></a>
</p>

## About me

- I build products end to end: frontend, API, database and deployment.
- I started with offline-first apps (React Native + Electron + SQLite) and scaled them to the web with Go, SvelteKit and PostgreSQL.
- Latest project: [**Clean Classroom Reporter**](https://clean-classroom-reporter.pages.dev), classroom cleaning reports with photo evidence.

## Projects

### Live

- [**Parque Informático**](https://informaticpark.systempwa.workers.dev/login): IT asset management for the provincial government (GPMS) of Morona Santiago: assets, custodians, locations and transfer history.
  <br><sub>NestJS 11, Prisma, Next.js 16, PostgreSQL · Cloudflare Workers (OpenNext)</sub>
- [**Chiro**](https://chiro-4rs.pages.dev): personal finance app for expenses, budgets and loans. Android app in closed testing on Google Play.
  <br><sub>SvelteKit, Go, PostgreSQL · Expo / React Native</sub>
- [**Contacts**](https://contacts-9m7.pages.dev): contact management SaaS.
  <br><sub>SvelteKit, Go, PostgreSQL</sub>
- [**Planner**](https://planner-etr.pages.dev): task planner with visual countdown timers, class schedules and day planning.
  <br><sub>SvelteKit 5, Go (Chi, pgx), PostgreSQL</sub>
- [**Clean Classroom Reporter**](https://clean-classroom-reporter.pages.dev): class presidents report classroom cleanliness by QR code, with photo evidence and an admin history ([source](https://github.com/c0mv4ty/clean-classroom-reporter)).
  <br><sub>SvelteKit 5, Supabase (Auth, Postgres RLS, Storage) · Cloudflare Pages</sub>
- [**tims**](https://timacas.vercel.app): official website for the IT Engineering program at ESPOCH Morona Santiago. Admin CMS in progress.
  <br><sub>Next.js 15, TypeScript, PostgreSQL, Prisma, NextAuth v5, next-intl, Cloudinary</sub>
- [**Frontend Mentor challenges**](https://frontendmentor-sandy.vercel.app): 9 UI challenges from newbie to intermediate ([source](https://github.com/luserv/frontendmentor)).
  <br><sub>Next.js 15, React 19, TypeScript, Tailwind CSS 4</sub>

### Source available

- [**grapi**](https://github.com/luserv/grapi): Instagram follower analyzer with gallery and story downloads.
  <br><sub>FastAPI, PostgreSQL, Next.js 15 (migrated from Vue), Docker Compose</sub>
- [**service-desk**](https://github.com/luserv/service-desk): IT service management portal on iTop with ITIL modules, service catalog and role-based users.
  <br><sub>iTop 3.2, PHP, MariaDB, Docker Compose</sub>
- [**Smart safe**](https://github.com/luserv/home-asisstant): keypad-controlled safe with temperature sensing, MQTT telemetry and Home Assistant automations.
  <br><sub>ESP32, C++, MQTT, Home Assistant, Docker Compose</sub>
- [**server-cats**](https://github.com/luserv/server-cats): PHP login site deployed on a Google Cloud Dataproc cluster with Docker Compose.
  <br><sub>PHP 7.4, MySQL, MongoDB, Docker Compose, Google Cloud</sub>
- [**rtmp-gcloud**](https://github.com/luserv/rtmp-gcloud): live streaming server with nginx-rtmp, nginx-proxy and automatic HTTPS.
  <br><sub>nginx, Docker Compose, Let's Encrypt, Google Cloud</sub>

Chiro, Contacts and Planner deploy the frontend on Cloudflare, the API on Vercel and the database on Supabase.

## Journey

- **Early 2024 — Contacts, offline-first.** React Native (Android) and Electron (Windows, Linux) on SQLite. The `.db` file backs up to Google Drive and restores on another device after Google Sign-In through Firebase.
- **February 2024 — server-cats.** PHP site with MySQL and MongoDB on Docker Compose, deployed on Google Cloud Dataproc.
- **February 2024 — rtmp-gcloud.** nginx-rtmp live streaming behind nginx-proxy with Let's Encrypt, first tried on Google Cloud.
- **Late 2024 — Chiro, offline-first.** Same architecture with Expo, applied to personal finance.
- **July 2025 — Frontend Mentor challenges.** 9 UI challenges with Next.js, React, TypeScript and Tailwind CSS.
- **August 2025 — tims.** Official website for the IT Engineering program at ESPOCH Morona Santiago, with an admin CMS in development.
- **March 2026 — Parque Informático.** IT asset management with NestJS, Next.js and PostgreSQL; frontend on Cloudflare Workers.
- **June 2026 — grapi.** Instagram follower analyzer with FastAPI, PostgreSQL, Next.js and Docker Compose.
- **June 2026 — service-desk.** iTop service management with ITIL modules, deployed with Docker Compose and MariaDB.
- **June 2026 — Smart safe.** ESP32 firmware publishing over MQTT to Home Assistant running in Docker.
- **July 2026 — Scaling to the web.** Both apps rebuilt with a SvelteKit frontend, a Go API and PostgreSQL.
- **September 2026 — Planner.** Go, SvelteKit 5 and PostgreSQL.
- **October 2026 — Clean Classroom Reporter.** SvelteKit 5 and Supabase on Cloudflare Pages.

## Tech stack

<p>
  <img src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white" alt="Go"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/SvelteKit-FF3E00?style=flat&logo=svelte&logoColor=white" alt="SvelteKit"/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white" alt="NestJS"/>
  <img src="https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React Native"/>
  <img src="https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white" alt="Electron"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white" alt="SQLite"/>
</p>
<p>
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=flat&logo=supabase&logoColor=white" alt="Supabase"/>
  <img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=cloudflare&logoColor=white" alt="Cloudflare"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel"/>
  <img src="https://img.shields.io/badge/Firebase-DD2C00?style=flat&logo=firebase&logoColor=white" alt="Firebase"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker"/>
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black" alt="Linux"/>
</p>

## Find me

<p>
  <a href="https://www.instagram.com/luser.v2/"><img src="https://img.shields.io/badge/Instagram-luser.v2-E4405F?style=flat&logo=instagram&logoColor=white" alt="Instagram"/></a>
  <a href="https://www.facebook.com/profile.php?id=61579794090838"><img src="https://img.shields.io/badge/Facebook-LUSER-0866FF?style=flat&logo=facebook&logoColor=white" alt="Facebook"/></a>
</p>

---

<sub>This repository is also the source of my portfolio, built with SvelteKit 5, Threlte and Tailwind CSS 4. Run it locally with `pnpm install` and `pnpm dev`.</sub>
