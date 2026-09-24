# Portfolio real content

## Objective
Replace remaining template placeholder content with verifiable, real information.

## Problem / why
The portfolio still shows template data (fake jobs, mismatched skills). The owner has no clients
or formal jobs yet, so credibility must come from real projects and verifiable evidence.

## Scope
- Skills section lists the real stack: Go, TypeScript, SvelteKit, Next.js, NestJS, PostgreSQL, React Native.
- Project cards state real deployment: frontend on Cloudflare, backend on Vercel, database on Supabase.
- Experience section becomes a project and learning timeline (dates from git history, confirmed by owner).

## Constraints
- No invented metrics, clients, or dates.
- Icons from an icon library (no emojis/glyphs); mobile-first styles.
- Copy in en-US and es-ES message files.

## Tasks
- [x] T1 Remove placeholder testimonials, counters, client logos — commit 85f02f7 (inline)
- [x] T2 Real skills stack + deployment info on project cards (delegated writer: 4+ files; verified pnpm check 0/0, 375px screenshots)
- [x] T3 Project and learning timeline (Contacts 2024, Chiro 2024, web 2026, Planner now) + Planner as 3rd showcase project (delegated writer; pnpm check 0/0, 375px verified)

## Checks
- `pnpm check` (svelte-check) with 0 errors/warnings
- Dev server renders at http://localhost:5200

## TDD
Off: no test runner configured in the project (package.json has no test script). Ordinary checks apply.

## Progress
T1-T3 done. Remaining template content: hero "Somos LUSER" copy, feature cards, social links.
