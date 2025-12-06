# Sonera AI - Landing Page

**Sonera AI** is an AI-powered voice assistant designed to help busy individuals and migrants in Poland solve everyday tasks over the phone without language barriers.

This repository contains the **Landing Page** for the project, designed to convert visitors into waitlist subscribers.

## � Design System

The project follows a strict **"Cal.com-inspired"** design system:
- **Aesthetic:** Minimalist, Monochrome, Premium.
- **Typography:** `Inter` font family.
- **Layout:** Bento Grids, Generous Whitespace ("Air").
- **Icons:** SVG only (No Emojis).

👉 **[View Full Design System](./DESIGN_SYSTEM.md)** — *The single source of truth for all design decisions.*

## � Project Structure

```
AI_Voice_Assistant_Website/
├── css/
│   └── styles.css       # Single CSS file with all styles (Variables, Reset, Components)
├── js/
│   ├── script.js        # Main logic (i18n, Form handling, Smooth scroll)
│   └── translations.js  # Content strings for RU, PL, UA, BE, EN
├── index.html           # Main landing page structure
├── DESIGN_SYSTEM.md     # Comprehensive design guidelines
├── rules.md             # Project rules and best practices
└── README.md            # This file
```

## 🛠️ Technology Stack

- **HTML5:** Semantic structure.
- **CSS3:** Modern CSS variables, Flexbox, Grid. No frameworks (Vanilla).
- **JavaScript:** ES6+ for client-side logic.
- **I18n:** Custom lightweight JSON-based translation system.

## 🏁 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Open `index.html`** in your browser to view the landing page.
3.  **No build step required.** This is a static site.

## ✍️ Development Guidelines

1.  **Task Management:** Always check `task.md` before starting work.
2.  **Design:** Refer to `DESIGN_SYSTEM.md` for colors, spacing, and components.
3.  **Content:** All text must be added to `js/translations.js` to support internationalization.
4.  **Icons:** Use SVGs from Lucide or similar clean sets. **Do not use emojis.**

## 🚀 Deployment & Updates

The site is hosted on **GitHub Pages**.

To update the live site:
1.  Make changes to the code.
2.  Run the following commands in the terminal:
    ```bash
    git add .
    git commit -m "Description of changes"
    git push
    ```
3.  The site will automatically update within a few minutes at [https://dmitri-kruk.github.io/voice-assistant-website/](https://dmitri-kruk.github.io/voice-assistant-website/).

## 📄 License

Internal Project for CPTN Limited.
**Author:** Dmitri Kruk
**Year:** 2025
