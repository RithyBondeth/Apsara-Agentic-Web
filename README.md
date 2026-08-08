# Apsara Agentic Web

The public website for Apsara, a local-first coding-agent CLI. The site has one
primary job: help developers understand the product, install the CLI, connect
their own model provider, and start working inside a local repository.

Apsara does not require a platform account and this website is not in the path
between the CLI and the user's model provider.

## Product flow

```text
Visit website
  → pipx install apsara-agentic
  → apsara login
  → cd your-project && apsara init
  → apsara chat
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

The complete production build currently passes. Repository-wide lint also
checks older components that may have pre-existing findings; changed files
should always pass ESLint independently.

## Product boundaries

- No Apsara sign-up or user database
- No cloud workspace or session synchronization
- No source-code or project-memory upload
- Provider credentials are configured by the local CLI
- The website remains public documentation and distribution infrastructure
