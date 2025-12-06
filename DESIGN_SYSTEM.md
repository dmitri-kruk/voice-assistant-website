# Sonera AI Design System & Guidelines

## 1. Introduction & Philosophy
**Aesthetic:** "Cal.com" Style — Minimalist, Monochrome, Premium, Content-First.
**Core Values:** Clarity, Speed, Trust, "Air" (Whitespace).
**Goal:** Create a user experience that feels effortless, modern, and trustworthy.

---

## 2. Visual Foundation (Atoms)

### 2.1 Colors
We use a strict monochrome palette with carefully selected grays for depth.

| Token | Value | Usage |
|-------|-------|-------|
| `bg-color` | `#FAFAFA` | Main page background (Warm White) |
| `card-bg` | `#FFFFFF` | Component background (Pure White) |
| `text-primary` | `#111827` | Headings, Main Text (Gray 900) |
| `text-secondary` | `#525252` | Subtitles, Body Text (Gray 600) |
| `primary-black` | `#000000` | Primary Actions, Strong Accents |
| `border-color` | `#E5E5E5` | Subtle Borders (Gray 200) |
| `border-hover` | `#A3A3A3` | Hover States (Gray 400) |
| `badge-bg` | `#F3F4F6` | Badge Backgrounds |

### 2.2 Typography
**Font Family:** `Inter`, system-ui, sans-serif.
**Weights:** Regular (400), Medium (500), SemiBold (600), Bold (700).

| Element | Size (Desktop) | Line Height | Tracking | Weight | Notes |
|---------|----------------|-------------|----------|--------|-------|
| **H1** | `60px` (3.75rem) | `1.1` | `-0.04em` | 700 | Hero Headline |
| **H2** | `36px` (2.25rem) | `1.2` | `-0.03em` | 600 | Section Titles |
| **H3** | `20px` (1.25rem) | `1.4` | `-0.03em` | 600 | Card Titles |
| **Body** | `17px` (1.0625rem) | `1.7` | `normal` | 400 | Main Content |
| **Small** | `13px` (0.8125rem) | `1.5` | `normal` | 400 | Trust Badges |

**Rules:**
- **Tighter Headings:** Always use negative letter-spacing for headings to make them look premium.
- **Readable Body:** Use `1.7` line-height for body text to let it "breathe".

### 2.3 Spacing & Layout
**Grid:** 8px base unit.
**Container:** `1200px` max-width.
**Section Padding:** `140px` (Top/Bottom) — Critical for "Air".

| Token | Value | Usage |
|-------|-------|-------|
| `gap-sm` | `8px` | Small elements (icons + text) |
| `gap-md` | `16px` | List items, form fields |
| `gap-lg` | `24px` | Card internal padding |
| `gap-xl` | `40px` | Bento grid gaps |

### 2.4 Radius
| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | `6px` | Small buttons, inputs |
| `radius-md` | `8px` | Standard buttons, cards |
| `radius-lg` | `16px` | Bento Cards, Large Containers |
| `radius-xl` | `24px` | Special Highlights |
| `radius-full` | `999px` | Badges, Pills |

### 2.5 Iconography
- **Style:** SVG, Stroke-based (2px width), Rounded caps/joins.
- **Size:** `20x20` or `24x24` standard.
- **Color:** Inherits text color (`currentColor`).
- **NO EMOJIS:** Use clean SVG icons instead.

---

## 3. Component Library (Molecules)

### 3.1 Buttons
**Primary (Black):**
- Background: `var(--primary-black)`
- Text: `#FFFFFF`
- Hover: Lift (`-1px`) + Shadow.

**Secondary (Outline):**
- Background: Transparent
- Border: `1px solid var(--border-color)`
- Text: `var(--text-primary)`
- Hover: Light Gray Background (`#F5F5F5`).

### 3.2 Bento Cards
- **Background:** `var(--card-bg)`
- **Border:** `1px solid var(--border-color)`
- **Radius:** `var(--radius-lg)`
- **Padding:** `2.5rem`
- **Hover:** Border darkens (`#A3A3A3`), slight lift, subtle shadow.
- **Content:** Icon (top left) -> Title -> Description.

### 3.3 Badges
- **Shape:** Pill (`radius-full`).
- **Background:** `#F3F4F6`.
- **Text:** Small, Semibold, Dark Gray.
- **Usage:** "Only with us", "New", "Beta".

### 3.4 Trust Signals
- **RODO/GDPR:** Shield icon (`20px`, `2.5` stroke) + Text.
- **Placement:** Below CTA or forms.
- **Style:** Subtle, low opacity text, but clear icon.

---

## 4. Content Guidelines

### 4.1 Tone of Voice
- **Friendly:** "Your personal assistant", not "Automated System".
- **Professional:** Trustworthy, secure (GDPR/RODO).
- **Concise:** Get to the point. Avoid fluff.

### 4.2 Frameworks (AIDA & PAS)
Use these structures for new pages:
- **AIDA:** Attention (Headline) -> Interest (Subhead) -> Desire (Benefits/Social Proof) -> Action (CTA).
- **PAS:** Problem (Pain point) -> Agitation (Why it hurts) -> Solution (Our product).

### 4.3 Microcopy
- **CTAs:** Action-oriented ("Get early access", "Start now").
- **Errors:** Helpful and specific ("Please enter a valid email").
- **Success:** Reassuring ("Thanks! You're on the list").

---

## 5. Design Principles (Mistakes to Avoid)
*Based on Tilda Education & Best Practices*

1.  **Lack of "Air":** Don't crowd content. Use `140px` section padding. Increase line height.
2.  **Poor Hierarchy:** H1 must be significantly larger than H2. Body text should be distinct.
3.  **Inconsistent Spacing:** Use the 8px grid. Don't eyeball it.
4.  **Subheadline Spacing:** Subheadlines should be closer to the headline than to the content below (or clearly grouped).
5.  **Alignment:** Left-align text for readability (except centered Hero/Section Titles).
6.  **Low Contrast:** Ensure text is legible against the background. Avoid light gray on white.

---

## 6. Design Process
1.  **Requirements:** Define the goal (Conversion? Info?).
2.  **Structure:** Sketch the flow using AIDA/PAS.
3.  **Wireframe:** Layout using the Bento Grid system.
4.  **High-Fi:** Apply the Design System (Colors, Type, Radius).
5.  **Review:** Check against "Mistakes to Avoid" (Air, Hierarchy, Alignment).
6.  **Polish:** Add micro-interactions (hover states) and verify responsiveness.
