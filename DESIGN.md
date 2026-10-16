---
name: LUSER Portfolio
description: Dark, flat, bordered portfolio for a full-stack developer; Mona Sans on graphite with one pale-blue accent.
colors:
  frost-ink: "#d9ecff"
  graphite-deep: "#0e0e10"
  graphite: "#1c1c21"
  graphite-raised: "#282732"
  slate-field: "#2d2d38"
  mist-blue: "#839cb5"
  void: "#000000"
  white: "#ffffff"
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
    backgroundColor: "{colors.white}"
    textColor: "{colors.void}"
    rounded: "{rounded.lg}"
    padding: "8px 20px"
  button-contact-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.white}"
  card:
    backgroundColor: "{colors.graphite-deep}"
    rounded: "{rounded.xl}"
    padding: "40px"
  input:
    backgroundColor: "{colors.slate-field}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "16px"
  badge:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.frost-ink}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: LUSER Portfolio

## 1. Overview

**Creative North Star: "The Quiet Workbench"**

A dark, tidy bench where the work is laid out and lit. Surfaces are near-black and flat; depth comes from tonal tiers and 1px borders, not shadow. One pale blue, Frost Ink, marks what matters: headings, icons, the language pill. Everything else recedes so the projects, stacks and dates are the loudest things on the page.

The system is precise and calm. Mona Sans carries all text in a single family with weight contrast. Motion (GSAP, a Three.js hero, a rotating word slider) is allowed to be rich, but it decorates a page that already reads without it.

It explicitly rejects template dev portfolios (gradient hero, identical project cards), neon cyberpunk or terminal cosplay, and corporate SaaS gloss.

**Key Characteristics:**
- Black page, graphite tiers, one cool accent.
- Flat and bordered; shadows only on the scrolled navbar.
- Single typeface, hierarchy by size and weight.
- Rounded but not soft: 8px to 12px corners, pills for badges.
- Motion supports content and respects reduced motion.

## 2. Colors

A near-monochrome graphite palette with a single pale-blue accent.

### Primary
- **Frost Ink** (#d9ecff): The only accent. Used for the logo, nav text, icons, badges, the language-pill fill and card titles.

### Neutral
- **Void** (#000000): Page background and text on light buttons.
- **Graphite Deep** (#0e0e10): Card and icon-well surfaces.
- **Graphite** (#1c1c21): Borders, dividers and hover surfaces.
- **Graphite Raised** (#282732): Badges and the CTA button base.
- **Slate Field** (#2d2d38): Form field backgrounds.
- **Mist Blue** (#839cb5): Placeholder text. Verify 4.5:1 against Slate Field before using for anything longer than a placeholder.
- **White** (#ffffff): Body text and the contact button.

### Named Rules
**The One Voice Rule.** Frost Ink is the sole accent. No second hue, no gradient accents.

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
- **Primary (CTA):** Graphite Raised base with Frost Ink circle that fills on hover while the arrow slides in (500ms). Label is uppercase.
- **Contact:** White fill, black text; hover shifts to Graphite with white text (300ms).
- **Focus:** Needs a visible 2px Frost Ink outline on every interactive element.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Graphite Deep with a 1px Graphite border.
- **Shadow Strategy:** None; a pointer-tracked glow on the timeline cards is the one hover effect.
- **Internal Padding:** 40px.

### Inputs / Fields
- **Style:** Slate Field fill, 6px radius, 16px padding, Mist Blue placeholder.
- **Focus:** Needs a visible Frost Ink outline.

### Navigation
- Fixed top bar, Frost Ink text. Transparent at top, Black 75% with blur and bottom border once scrolled. Underline grows in on hover. Language switch is a pill with a sliding Frost Ink indicator and 44px touch targets.

### Badges and Deployment Icons
- Pill (full radius), Graphite Raised fill, Frost Ink text. Deployment icons sit in 28px circles with a Graphite border.

## 6. Do's and Don'ts

### Do:
- **Do** keep Frost Ink (#d9ecff) as the only accent and use it sparingly.
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
