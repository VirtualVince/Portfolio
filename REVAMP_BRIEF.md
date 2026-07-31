# Portfolio Revamp Brief

Instructions for rebuilding virtualvince.ca around the navy, gold and black brand, and
for replacing the outdated resume and projects content.

Current state: Next.js App Router, Tailwind with an empty `theme.extend`, `darkMode:
"class"`, and accent colors still set to the purple gradient (`#5651e5` to `#709dff`)
that came from the template this was scaffolded from. There are no brand tokens.

---

## 1. The colour problem, and the rule that solves it

Gold cannot be one colour across both themes. Measured WCAG contrast ratios:

| Gold | On white | On navy `#0A1B33` | Verdict |
|---|---|---|---|
| `#D4AF37` bright | **2.10** | **9.10** | Dark theme only. Unusable on white. |
| `#A67C0E` mid | 3.81 | 4.53 | Large text and UI only, works on both |
| `#8A6510` deep | **5.32** | 3.24 | Light theme text. Too dark on navy. |

AA needs 4.5 for body text and 3.0 for large text and UI borders.

**The rule: gold is a text colour in light mode and an accent colour in dark mode.**
Light mode uses deep gold on white. Dark mode uses bright gold on near-black. Never put
`#D4AF37` on a white background, and never put `#8A6510` on navy.

Navy `#0A1B33` scores 17.25 against white, so it works as body text in light mode and as
a surface in dark mode. That is what makes it the anchor colour.

## 2. Tokens

Replace `tailwind.config.js` with this.

```js
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#08111F",
          900: "#0A1B33",
          800: "#0F2547",
          700: "#12305C",
          600: "#1B3A6B",
          500: "#25497F",
        },
        gold: {
          bright: "#D4AF37", // dark mode accent and text
          mid:    "#A67C0E", // large text and borders, safe on both
          deep:   "#8A6510", // light mode text
        },
        ink:  "#08090C",     // true black surface
        haze: "#E8EAF0",     // dark mode body text
      },
      fontFamily: {
        display: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

Then drive everything through semantic CSS variables so components never reference a raw
brand colour. Replace the `@layer base` block in `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg:        #FFFFFF;
    --surface:   #F5F6F9;
    --text:      #0A1B33;   /* navy on white, 17.25 */
    --text-muted:#4A5568;
    --accent:    #8A6510;   /* deep gold, 5.32 on white */
    --accent-hover: #6B4E0C;
    --border:    #D8DCE5;
    --on-accent: #FFFFFF;
  }

  .dark {
    --bg:        #08090C;
    --surface:   #0A1B33;   /* navy as the elevated surface */
    --text:      #E8EAF0;   /* 16.55 on ink */
    --text-muted:#9AA3B5;
    --accent:    #D4AF37;   /* bright gold, 9.47 on ink */
    --accent-hover: #E5C158;
    --border:    #1B3A6B;
    --on-accent: #08090C;   /* dark text on a gold fill */
  }

  body {
    background-color: var(--bg);
    color: var(--text);
    @apply tracking-wide;
  }

  h1, h2, h3, h4, h5, h6 { @apply font-bold; }
  h1 { @apply text-4xl sm:text-5xl md:text-6xl font-display; }
  h2 { @apply text-3xl sm:text-4xl; }
  li { @apply cursor-pointer; }
}
```

Note `--on-accent` flips. A gold button in light mode is deep gold with white text. In
dark mode it is bright gold with near-black text, because white on bright gold is only
2.1 and would fail.

## 3. Where gold is allowed

Gold is an accent. If everything is gold, nothing is.

**Yes:** links and their hover state, the active nav item, section heading underlines or
rules, focus rings, card borders on hover, icon strokes, the primary button, small
metadata labels, list bullets and dividers.

**No:** body paragraphs, large background fills, more than one primary button in a
viewport, card backgrounds. Navy or the surface token carries backgrounds. Gold marks
what matters.

Kill the purple gradient in the `button` rule entirely. It is the most obvious tell that
this is a template.

## 4. Component work

- **`components/ThemeProvider.jsx`** — verify it toggles the `dark` class on `<html>`,
  not on `<body>`, since the `:root` variables above are scoped there. Respect
  `prefers-color-scheme` on first load and persist the choice to `localStorage`.
- **`components/Navbar.jsx`** — active link in `var(--accent)`, others in
  `var(--text)`. Add a visible focus ring in gold for keyboard users.
- **`components/Main.jsx`** — the hero. Replace the tagline with the positioning line
  used on the GitHub profile: building and running web apps for clients, moving toward
  embedded and backend systems.
- **`components/Skills.jsx`** — currently icon tiles. Group them under the same headings
  the resume uses so the two documents agree: Infrastructure and operations, Containers
  and orchestration, Languages, Backend, Data, Embedded, Frontend.
- **`components/Projects.jsx` and `ProjectItem.jsx`** — see section 5.
- **`components/Contact.jsx`** — one gold primary button only.
- **`components/About.jsx`** — rewrite, see section 7.

Every component must read `var(--text)`, `var(--bg)`, `var(--accent)` and friends. No
component should contain a hex code.

## 5. Projects section, exact content

The current list is out of date and two entries are factually wrong. Replace it with
this, ordered as shown.

| Project | Stack | Line |
|---|---|---|
| **Orpheus** | TypeScript, Rust, Convex | Version control for music production. DAW projects are large binary files, so a one note change looks like a whole file rewrite. Orpheus makes them diffable. Backend schema, track mutations and validation. |
| **Elizabeth Gardens Creative Collective** | Ubuntu, HestiaCP, PHP, WordPress, MySQL | Community arts organization on a multi tenant VPS I provision and administer end to end. 11 custom plugins including an audit log that captures the exact diff of every content change. |
| **ChironAI** | Next.js, TypeScript, Tailwind | AI enablement for small businesses. Team training, agent setup and process automation. |
| **Radiant Roots Vitality** | Next.js, TypeScript, Tailwind | Health practice site with Google Maps and a Fullscript storefront handoff. Hosted and maintained on a monthly retainer. |
| **My YAYBI Way** | Next.js, TypeScript, Tailwind, Shopify Storefront | Custom front end pulling live products and images from a Shopify storefront. |
| **K2E Canada** | Shopify, Liquid | Professional education storefront with custom Liquid. |
| **r3builds** | C++, Arduino | Ten embedded builds, each earning one transferable skill, from GPIO through I2C, SPI and IR protocol decode. |
| **Distributed Systems Practice** | Go | Six primitives with test suites, including Raft leader election, a Bitcask style log structured KV store, and a consistent hash ring. |

**Two corrections to make.** The site currently lists K2E and My YAYBI as
"Liquid/Hydrogen + Remix". K2E is Shopify with custom Liquid and minimal Hydrogen. My
YAYBI is Next.js, TypeScript and Tailwind with a Shopify storefront embed. Fix both.

Creative Collective may be listed under an older name. Confirm which name the client
uses publicly before shipping.

Each card needs a live link, a repo link where the repo is public, and the stack as
small caps metadata in `var(--text-muted)` with a gold divider.

## 6. The resume page

`src/pages/resume.jsx` is 12KB of hardcoded, outdated content. It says "2022 to Present,
Semester 4 of 6" and describes a marketing and customer service profile. It contradicts
the current resume and it is the version a recruiter reads.

Two options.

**Preferred:** delete the hand maintained page. Replace it with a short page that states
the current positioning in two sentences and embeds or links the PDF generated by
`~/job/resume/build.py`. One source of truth, and the site can never drift again.

**If the page stays:** it must match `~/job/resume/master.md` exactly. Correct dates are
Daniel Digital Jun 2021 to Oct 2023 as contract, Telus Oct 2023 to Jan 2024, Virtual
Vince Feb 2024 to present, Orpheus Jan 2026 to present. Education is a completed 2026
Advanced Diploma with Dean's List, not an in progress one.

## 7. About section

Replace the current summary. It reads "Analytical, innovative, and motivated web
development professional" with expertise in "customer service, team leadership, and
organizational effectiveness." That is a retail sales summary and it undercuts
everything else on the site.

Use the same voice as the GitHub profile. Plain declaratives, no adjective stacking.
Something close to: builds and runs websites and web apps for clients, moving toward
embedded and backend systems work, runs the Linux infrastructure the client work is
deployed to.

## 8. Acceptance checklist

- [ ] No hex codes in any component file. Everything reads a CSS variable.
- [ ] No purple remains anywhere in the codebase.
- [ ] Light and dark both pass AA. Spot check body text, links and buttons.
- [ ] `#D4AF37` never appears on a white or light surface.
- [ ] `#8A6510` never appears on navy or black.
- [ ] Theme toggle persists across reload and respects system preference on first visit.
- [ ] Focus rings visible in both themes on every interactive element.
- [ ] Projects match the table in section 5, with K2E and My YAYBI corrected.
- [ ] Resume page agrees with `~/job/resume/master.md`, or links the PDF.
- [ ] Contrast verified with a checker, not by eye.
