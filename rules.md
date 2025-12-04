# VoiceTask AI Project Rules & Guidelines

## 1. Project Overview
**Product:** VoiceTask AI — An AI voice assistant for automating phone calls (appointments, reservations, inquiries).
**Target Audience:** Polish market, specifically busy professionals and migrants (language barrier).
**Key Value:** "Solve any issue over the phone in 2 minutes without knowing Polish."

## 2. Technology Stack
- **Frontend:** HTML5, CSS3 (Variables, Flexbox/Grid), Vanilla JavaScript (ES6+).
- **Design System:** Custom "Cal.com" style (Minimalist, Monochrome, Bento Grids).
- **Assets:** SVG Icons (No Emojis), Inter Font.
- **I18n:** Client-side JSON-based translation (RU/PL/UA/BE/EN).

## 3. Design Guidelines (Source of Truth: `DESIGN_SYSTEM.md`)
- **Aesthetic:** Premium, Clean, "Airy". High contrast (Black/White).
- **Typography:** `Inter`. Tight letter-spacing for headings. Readable body text.
- **Layout:** 1200px container. 140px section padding. 8px grid system.
- **Components:**
    - **Buttons:** Black primary, Outline secondary.
    - **Cards:** Bento style, large radius, subtle borders.
    - **Icons:** SVG only. 2px stroke. Rounded.
- **Mobile First:** All designs must be fully responsive.

## 4. Workflow & Best Practices (Antigravity/Gemini)

### 4.1 Task Management
- **`task.md`:** The single source of truth for progress.
    - Break down work into granular, checkable items.
    - Update status frequently using `task_boundary`.
    - Mark items as `[x]` only when verified.

### 4.2 Planning & Documentation
- **`implementation_plan.md`:** Create BEFORE starting any complex task.
    - Define the "Why", "What", and "How".
    - List specific files to create/modify.
    - Get user approval via `notify_user` before execution.
- **`DESIGN_SYSTEM.md`:** Refer to this for ALL design decisions. Do not invent new styles.

### 4.3 Verification
- **`walkthrough.md`:** Document the "After" state.
    - Include screenshots of visual changes.
    - Verify functionality (e.g., "Clicked button X, expected Y").
- **Visual Checks:** Always capture screenshots to verify CSS/HTML changes. Do not assume code works blindly.

### 4.4 Coding Standards
- **Clean Code:** Semantic HTML, organized CSS (grouped by component), modular JS.
- **No Emojis:** Strictly forbidden in code and UI. Use SVGs.
- **Absolute Paths:** Always use absolute paths for file operations.
- **Conciseness:** Keep artifacts and user messages focused and actionable.

### 4.5 Deployment
- **Platform:** GitHub Pages.
- **Workflow:** Commit to `main` branch triggers automatic deployment.
- **Command:** `git add .` -> `git commit -m "..."` -> `git push`.

## 5. Common Pitfalls to Avoid
1.  **Ignoring "Air":** Don't reduce padding. The design relies on whitespace.
2.  **Hardcoding Text:** All user-facing text must go through `translations.js`.
3.  **Over-engineering:** Keep the tech stack simple (Vanilla JS is sufficient for this landing page).
4.  **Breaking Trust:** Ensure RODO/GDPR badges and trust signals remain visible and aligned.