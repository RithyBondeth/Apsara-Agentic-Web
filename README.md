# Apsara Agentic Web

The public website for Apsara, a local-first coding-agent CLI. The site has one
primary job: help developers understand the product, install the CLI, connect
their own model provider, and start working inside a local repository.

Apsara does not require a platform account and this website is not in the path
between the CLI and the user's model provider.

## Product flow

```text
Visit website
  → get the current CLI source checkout
  → python3 -m pip install build && python3 -m build
  → pipx install ./dist/apsara_agentic-0.1.0a2-py3-none-any.whl
  → cd /path/to/your/project && apsara
  → add your provider key when prompted
```

The localized `/install` route documents this flow in English and Khmer. It
also links to the source repository and published releases.

## Development

Requirements:

- Node.js 22.13 or newer
- npm

Run the local site:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Validate changes with:

```bash
npm run lint
npm run build
```

Run both checks before shipping changes. Shared Makor brand tokens live in
`app/globals.css`; public landing refinements live in `app/landing.css`.

## Product boundaries

- No Apsara sign-up or user database
- No cloud workspace or session synchronization
- Workspace files and project memory are stored locally; relevant code context
  is sent directly to the selected model provider
- Provider credentials are configured by the local CLI
- The website remains public documentation and distribution infrastructure

## Makor landing design

The public routes retain the floating navigation, editor-style hero, bento cards,
and terminal preview. Makor's head is the platform logo. The shared color system
uses the approved gold (#FAD88F), blue (#6096FA), charcoal (#181C25), and ivory
(#F5F1E9), with deeper text accents for light mode. Backgrounds are plain;
decorative grids, telemetry panels, floating labels, and marquees are removed.

The Khmer-inspired layer uses original lotus linework, floral dividers,
carved corner details, and a temple-inspired frame around the editor. These are
contemporary interpretations, not reproductions of historical carvings. The
references include [Banteay Srei's refined sculpture](https://apsaraauthority.gov.kh/temples-new/)
and [lotus imagery at Kbal Spean](https://apsaraauthority.gov.kh/2021/08/05/kbal-spean/),
alongside the approved Khmer Makara identity. Decorative SVGs are hidden from
assistive technology and do not introduce a patterned background.

GSAP draws the ornament outlines, reveals whole text elements, and animates
small depth changes around the editor. A gold highlight traces the hero frame;
the illustrative editor reveals code before its review result. Cards reveal
with a small stagger and catch pointer-positioned warm light. On desktop, the
workflow introduction stays in view while the steps scroll, and the current
step receives a gold accent. Pointer effects run only on devices with
a fine pointer. Reduced motion disables the choreography and keeps all content
visible. Animation contexts and event listeners are cleaned up on navigation,
locale changes, and motion-preference changes. English and Khmer preferences
persist in a cookie; light and dark themes use the existing theme provider.
Language and theme use the same circular icon control. The language icon
switches directly between English and Khmer, with a localized action label.
Changing language preserves the hero's settled appearance rather than replaying
the page entrance. Khmer UI uses the locally hosted Noto Sans Khmer variable
font, with its designed width axis set to 95% for body text and 90% for headings.
Khmer body tracking is -0.02em, heading tracking is -0.04em, and word spacing is
-0.08em, including nested text spans. Text remains in whole runs to preserve
Khmer shaping. Hero line height is 1.25. Hero weight uses a real 700 face rather than synthetic
extra bold. English code samples keep IBM Plex Mono. The navbar pairs Makor's
head with the Apsara wordmark and a compact Agentic CLI label.

The home page introduces Makor and developer Bondeth in a bilingual “Behind
Apsara” section between the workflow and install invitation. It uses the shared
Makor artwork, links to the developer’s GitHub profile and CLI source, and
explains the mascot’s activity states and `/mascot still` control.

The CLI session is illustrative and never executes commands or edits files.
Makor artwork in `public/assets/makor/` comes from the approved brand assets in
`../design/brand/makara-pixel-v1/`. `terminal-sprite.svg` renders the exact palette
and pixel data from the CLI's `src/apsara_cli/shared/assets/makor.json`.

Installation copy follows the current local CLI README: `0.1.0a2` is a source
candidate, not a published package. Review the CLI's release status before
changing this page to a registry installation command.
