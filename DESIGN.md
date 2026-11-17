---
name: trace, by Vidal
description: Dark, flat, bordered portfolio for a web application developer; Mona Sans on graphite with one blue accent. Brand: trace, by Vidal.
colors:
  trace-blue: "#1793d1"
  graphite-deep: "#0e0e10"
  graphite: "#1c1c21"
  graphite-raised: "#282732"
  slate-field: "#2d2d38"
  void: "#060607"
  paper: "#f2f3f5"
  ash: "#9a9cab"
typography:
  display:
    fontFamily: "Mona Sans, sans-serif"
    fontSize: "60px"
    fontWeight: 600
    lineHeight: 1.1
  headline:
    fontFamily: "Mona Sans, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Mona Sans, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Mona Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Mona Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.void}"
    rounded: "{rounded.lg}"
    padding: "16px"
  button-contact:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.void}"
    rounded: "{rounded.lg}"
    padding: "8px 20px"
  button-contact-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.paper}"
  card:
    backgroundColor: "{colors.graphite-deep}"
    rounded: "{rounded.xl}"
    padding: "40px"
  input:
    backgroundColor: "{colors.slate-field}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "16px"
  badge:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.trace-blue}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: trace, by Vidal

## 1. Overview

**Creative North Star: "The Quiet Workbench"**

A dark, tidy bench where the work is laid out and lit. Surfaces are near-black and flat; depth comes from tonal tiers and 1px borders, not shadow. One blue, Trace Blue, marks what matters: headings, icons, the language pill. Everything else recedes so the projects, stacks and dates are the loudest things on the page.

The system is precise and calm. Mona Sans carries all text in a single family with weight contrast. Motion (GSAP, a Three.js hero, a rotating word slider) is allowed to be rich, but it decorates a page that already reads without it.

It explicitly rejects template dev portfolios (gradient hero, identical project cards), neon cyberpunk or terminal cosplay, and corporate SaaS gloss.

**Key Characteristics:**
- Black page, graphite tiers, one cool accent.
- Flat and bordered; shadows only on the scrolled navbar.
- Single typeface, hierarchy by size and weight.
- Rounded but not soft: 8px to 12px corners, pills for badges.
- Motion supports content and respects reduced motion.

## 2. Colors

A near-monochrome graphite palette with a single blue accent (the Arch Linux blue).

### Primary
- **Trace Blue** (#1793d1): The only accent. Used for the logo point, nav text, icons, badges, the language-pill fill and card titles. Contrast: 5.9:1 on Void, 5.6:1 on Graphite Deep; Void text on it is 6.1:1. In a light theme use #0f6fa3. No glow or shadow effects on it.

### Neutral
- **Void** (#060607): Page background and text on light buttons.
- **Graphite Deep** (#0e0e10): Card and icon-well surfaces.
- **Graphite** (#1c1c21): Borders, dividers and hover surfaces.
- **Graphite Raised** (#282732): Badges and the CTA button base.
- **Slate Field** (#2d2d38): Form field backgrounds.
- **Ash** (#9a9cab): Secondary text and placeholders (7.1:1 on Graphite Deep). Verify 4.5:1 against Slate Field before using for anything longer than a placeholder.
- **Paper** (#f2f3f5): Body text, the T of the logo and the contact button.

### Themes
Three modes via the navbar switch: **System** (default, follows prefers-color-scheme), **Light** and **Dark**. The choice is stored in localStorage and applied as `data-theme` on `<html>` before first paint. Components use semantic tokens (`--page`, `--ink`, `--line`, `--surface`, `--raised`, `--muted`, `--field`, `--accent`); the Tailwind names (`black`, `white`, `black-50`…, `trace`) map to them, so `text-white` means "ink" and `bg-black` means "page" in both themes.

| Token | Dark | Light |
|---|---|---|
| page | #060607 | #f4f6f9 |
| ink | #f2f3f5 | #0e0e10 |
| line | #1c1c21 | #d9dde4 |
| surface | #0e0e10 | #ffffff |
| raised | #282732 | #e6e9ef |
| muted | #9a9cab | #555869 |
| field | #2d2d38 | #e9ecf1 |
| accent (Trace Blue) | #1793d1 | #0f6fa3 |

### Named Rules
**The One Voice Rule.** Trace Blue is the sole accent. No second hue, no gradient accents.

**The Border Not Shadow Rule.** Separation between surfaces is a 1px Graphite border, not a shadow.

## 3. Typography

**Display Font:** Mona Sans (sans-serif fallback)
**Body Font:** Mona Sans (sans-serif fallback)

**Character:** One variable family from weight 200 to 900. Contrast comes from size and weight, never from a second typeface.

### Hierarchy
- **Display** (600, 30px mobile / 60px desktop, ~1.1): Hero statement and the rotating word slider.
- **Headline** (700, 24px to 36px, ~1.2): Project titles and section headings.
- **Title** (600, 18px to 24px, ~1.3): Secondary project names, card titles.
- **Body** (400, 16px, 1.5): Descriptions. Cap line length at 65 to 75ch.
- **Label** (500, 14px): Badges, chips, deployment text, nav items.

### Named Rules
**The One Family Rule.** Mona Sans only. Add a mono face only if code or data needs it.

## 4. Elevation

Flat by default. Depth is tonal: Void page, Graphite Deep cards, Graphite Raised badges, with 1px Graphite borders. The only shadow is on the navbar once the page scrolls.

### Shadow Vocabulary
- **Scrolled bar** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.4)` with `backdrop-filter: blur(12px)` over `rgb(0 0 0 / 0.75)`): Sticky navbar after scroll only.

### Named Rules
**The Flat-By-Default Rule.** Surfaces carry no shadow at rest. Glow or lift appears only as a response to hover, and never on more than one element at a time.

## 5. Components

### Buttons
- **Shape:** 8px radius.
- **Primary (CTA):** Graphite Raised base with Trace Blue circle that fills on hover while the arrow slides in (500ms). Label is uppercase.
- **Contact:** Paper fill, Void text; hover shifts to Graphite with Paper text (300ms).
- **Focus:** Needs a visible 2px Trace Blue outline on every interactive element.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Graphite Deep with a 1px Graphite border.
- **Shadow Strategy:** None; a pointer-tracked glow on the timeline cards is the one hover effect.
- **Internal Padding:** 40px.

### Inputs / Fields
- **Style:** Slate Field fill, 6px radius, 16px padding, Ash placeholder.
- **Focus:** Needs a visible Trace Blue outline.

### Navigation
- Fixed top bar, Trace Blue text. Transparent at top, Black 75% with blur and bottom border once scrolled. Underline grows in on hover. Language switch is a pill with a sliding Trace Blue indicator and 44px touch targets.

### Badges and Deployment Icons
- Pill (full radius), Graphite Raised fill, Trace Blue text. Deployment icons sit in 28px circles with a Graphite border.

## 6. Do's and Don'ts

### Do:
- **Do** keep Trace Blue (#1793d1) as the only accent and use it sparingly.
- **Do** separate surfaces with 1px Graphite (#1c1c21) borders and tonal tiers.
- **Do** put a live link, stack and date next to every project claim.
- **Do** provide `prefers-reduced-motion` alternatives for GSAP, the word slider and the Three.js hero.
- **Do** keep body text at 4.5:1 contrast or better; test both en-US and es-ES for overflow.

### Don't:
- **Don't** build a template dev portfolio: gradient hero, "Hi, I'm X" plus tech-icon grid, identical project cards.
- **Don't** use neon cyberpunk or terminal cosplay: matrix green, glitch text, fake hacker aesthetics.
- **Don't** use corporate SaaS gloss: stock gradients, glass cards, buzzword copy.
- **Don't** add gradient text or colored side-stripe borders.
- **Don't** let 3D or motion block, delay or bury content.
