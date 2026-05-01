import { siteRoutes } from "@/utils/constants/site-routes";

export type LandingLocale = "en" | "km";

export type LandingTerminalLine =
  | {
      kind: "command";
      prompt: string;
      value: string;
    }
  | {
      kind: "field";
      label: string;
      value: string;
    };

type LandingLink = {
  href: string;
  label: string;
};

type LandingCard = {
  title: string;
  description: string;
};

type LandingStep = {
  title: string;
  description: string;
};

type LandingSignal = {
  value: string;
  label: string;
};

export type LandingCopy = {
  brand: {
    title: string;
    subtitle: string;
    logoAlt: string;
  };
  header: {
    navItems: LandingLink[];
    exploreLabel: string;
    alphaLabel: string;
    languageSwitcherLabel: string;
    localeLabels: Record<LandingLocale, string>;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    titleTail: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    scrollAriaLabel: string;
    signals: LandingSignal[];
  };
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
    sessionLabel: string;
    terminal: {
      screenReaderLabel: string;
      lines: LandingTerminalLine[];
    };
    whyEyebrow: string;
    whyTitle: string;
    whyDescription: string;
    notes: LandingCard[];
    humanLoopEyebrow: string;
    humanLoopText: string;
    toneEyebrow: string;
    toneText: string;
    tailTitle: string;
    tailDescription: string;
  };
  features: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    titleTail: string;
    description: string;
    cards: LandingCard[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: LandingStep[];
  };
  cta: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    titleTail: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    description: string;
    sections: {
      title: string;
      links: LandingLink[];
    }[];
    copyright: string;
  };
};

export const landingCopy = {
  en: {
    brand: {
      title: "Apsara",
      subtitle: "Agentic Coding",
      logoAlt: "Apsara logo",
    },
    header: {
      navItems: [
        { href: siteRoutes.product, label: "Product" },
        { href: siteRoutes.capabilities, label: "Capabilities" },
        { href: siteRoutes.workflow, label: "Workflow" },
      ],
      exploreLabel: "Explore",
      alphaLabel: "Private Alpha",
      languageSwitcherLabel: "Language",
      localeLabels: {
        en: "EN",
        km: "ខ្មែរ",
      },
    },
    hero: {
      badge: "Private alpha for project-first agentic coding",
      titleLead: "Build with an agent that stays",
      titleHighlight: "inside the repo",
      titleTail: "and keeps you in control.",
      description:
        "Apsara turns the current CLI and backend spine into a stronger product story: workspace-scoped tools, reviewable diffs, quieter internal activity, and persistent context that feels built for real codebases instead of generic AI chat.",
      primaryCta: "See the product flow",
      secondaryCta: "Explore capabilities",
      scrollAriaLabel: "Open the product page",
      signals: [
        {
          value: "Repo-bound",
          label: "Project-local init and config stay with the codebase.",
        },
        {
          value: "Diff-first",
          label: "Meaningful edits pause for human review before they land.",
        },
        {
          value: "Session-aware",
          label:
            "The workflow keeps durable context instead of resetting every time.",
        },
      ],
    },
    showcase: {
      eyebrow: "Product View",
      title: "See the agent loop as a product, not just a prompt box.",
      description:
        "This is the part worth showing. Project-local startup, bounded tools, hidden internals on demand, and a review step before edits land all turn the agent loop into something developers can actually trust.",
      sessionLabel: "apsara session",
      terminal: {
        screenReaderLabel: "Agentic coding example",
        lines: [
          {
            kind: "command",
            prompt: "$",
            value:
              'apsara run "tighten the approval copy and keep the review gate intact"',
          },
          {
            kind: "field",
            label: "workspace",
            value: "./apsara-agentic-api",
          },
          {
            kind: "field",
            label: "trace",
            value: "reading app/api/approval.py and app/ui/review-panel.tsx",
          },
          {
            kind: "field",
            label: "draft",
            value:
              "preparing smaller copy edits without bypassing human review",
          },
          {
            kind: "field",
            label: "diff",
            value: "2 files changed, preview generated before any write lands",
          },
          {
            kind: "field",
            label: "status",
            value: "Awaiting approval to apply the patch.",
          },
        ],
      },
      whyEyebrow: "Why it feels better",
      whyTitle: "More bounded than chat. More legible than autopilot.",
      whyDescription:
        "The system does real work, but it never asks the developer to stop caring about scope, review, or authorship.",
      notes: [
        {
          title: "Approval gate",
          description:
            "The developer reviews the diff before meaningful writes touch the repo.",
        },
        {
          title: "Quiet internals",
          description:
            "Tool chatter stays hidden until /details is explicitly opened.",
        },
        {
          title: "Legible progress",
          description:
            "The workflow surfaces what changed, why it changed, and what still needs a decision.",
        },
      ],
      humanLoopEyebrow: "Human loop",
      humanLoopText:
        "Review stays in the critical path instead of getting bolted on after the fact.",
      toneEyebrow: "Product tone",
      toneText:
        "Calm enough to trust. Clear enough to inspect. Useful enough to keep using.",
      tailTitle: "Trust grows when every step has a boundary.",
      tailDescription:
        "That means workspace scoping, review gates before writes, and internal activity that stays available without taking over the entire interface.",
    },
    features: {
      eyebrow: "Capabilities",
      titleLead: "What already makes Apsara",
      titleHighlight: "useful today",
      titleTail: "",
      description:
        "The value is not speculative. These are the real behaviors that make the current CLI and backend feel more trustworthy than a generic AI tab.",
      cards: [
        {
          title: "Project-local init",
          description:
            "Apsara starts inside the repo, keeps config where the work lives, and avoids the disconnected AI chat problem.",
        },
        {
          title: "Workspace-scoped tools",
          description:
            "Search, reads, writes, and line replacement stay bounded to the allowed root instead of wandering across the machine.",
        },
        {
          title: "Diff-first approvals",
          description:
            "Meaningful changes stop at a review gate so the developer keeps the final say before edits apply.",
        },
        {
          title: "Hidden internals on demand",
          description:
            "Tool activity stays quiet by default, while /details gives power users the exact work trail when they want it.",
        },
        {
          title: "Durable backend spine",
          description:
            "FastAPI, Postgres persistence, usage tracking, and SSE streaming give the agent loop a real foundation.",
        },
        {
          title: "Persistent sessions",
          description:
            "Conversation history and usage events stay durable so the workflow remains accountable across runs.",
        },
      ],
    },
    workflow: {
      eyebrow: "How It Works",
      title: "A workflow that mirrors how developers already work.",
      description:
        "Orient the repo, delegate the legwork, and keep authorship through review. The product gets out of the way without becoming vague.",
      steps: [
        {
          title: "Start in the workspace",
          description:
            "Initialize Apsara inside the repo so the session inherits the right filesystem boundary and project-local context.",
        },
        {
          title: "Ask for meaningful work",
          description:
            "Trace the code, inspect files, and draft a change while keeping raw tool noise tucked away unless it is needed.",
        },
        {
          title: "Review and steer",
          description:
            "Approve the diff, reject it, or redirect the next step while the session keeps the thread and reasoning intact.",
        },
      ],
    },
    cta: {
      eyebrow: "Closing Thought",
      titleLead: "Ready to give Apsara a front door that matches the",
      titleHighlight: "product truth",
      titleTail: "?",
      description:
        "The strongest story is already there: repo-first setup, bounded tools, quieter internals, reviewable diffs, and durable context for serious engineering work.",
      primaryCta: "See the showcase",
      secondaryCta: "Back home",
    },
    footer: {
      description:
        "Project-first agentic coding built around bounded tools, reviewable edits, and durable context for real repositories.",
      sections: [
        {
          title: "Sections",
          links: [
            { href: siteRoutes.product, label: "Product View" },
            { href: siteRoutes.capabilities, label: "Capabilities" },
            { href: siteRoutes.workflow, label: "Workflow" },
          ],
        },
        {
          title: "What Matters",
          links: [
            { href: siteRoutes.capabilities, label: "Project-local init" },
            { href: siteRoutes.product, label: "Diff-first review" },
            { href: siteRoutes.privateAlpha, label: "Private alpha" },
          ],
        },
      ],
      copyright:
        "Agentic coding with boundaries, legibility, and human review.",
    },
  },
  km: {
    brand: {
      title: "Apsara",
      subtitle: "ការសរសេរកូដជាមួយ Agent",
      logoAlt: "និមិត្តសញ្ញា Apsara",
    },
    header: {
      navItems: [
        { href: siteRoutes.product, label: "ផលិតផល" },
        { href: siteRoutes.capabilities, label: "សមត្ថភាព" },
        { href: siteRoutes.workflow, label: "ដំណើរការ" },
      ],
      exploreLabel: "ស្វែងយល់",
      alphaLabel: "Private Alpha",
      languageSwitcherLabel: "ភាសា",
      localeLabels: {
        en: "EN",
        km: "ខ្មែរ",
      },
    },
    hero: {
      badge: "Private alpha · ការសរសេរកូដបែប project-first",
      titleLead: "សរសេរកូដជាមួយ agent ដែលស្ថិតនៅ",
      titleHighlight: "ក្នុង repo",
      titleTail: "ហើយអ្នកនៅតែជាម្ចាស់ការ។",
      description:
        "Apsara ប្រែ CLI និង backend ដែលមានស្រាប់ ទៅជារឿងរ៉ាវផលិតផលដែលរឹងមាំជាងមុន៖ tools ព្រំដែនតាម workspace, diff ដែលអាចពិនិត្យបាន, internals ស្ងប់ជាងមុន និង context បន្ត ដែលសាកសមសម្រាប់ codebase ពិតៗ — មិនមែន AI chat ធម្មតាទេ។",
      primaryCta: "មើលលំហូរផលិតផល",
      secondaryCta: "ស្វែងយល់សមត្ថភាព",
      scrollAriaLabel: "បើកទំព័រផលិតផល",
      signals: [
        {
          value: "ចងជាមួយ Repo",
          label: "ការចាប់ផ្ដើម និង config ស្ថិតក្នុង codebase ។",
        },
        {
          value: "Diff ជាចំបង",
          label: "ការកែប្រែសំខាន់ៗ ឈប់រង់ចាំការពិនិត្យពីមនុស្សសិន។",
        },
        {
          value: "ចងចាំ Session",
          label: "workflow រក្សា context ជាប់ជានិច្ច មិនចាប់ផ្ដើមថ្មីរាល់ពេលទេ។",
        },
      ],
    },
    showcase: {
      eyebrow: "ទិដ្ឋភាពផលិតផល",
      title: "មើល agent loop ជាផលិតផល មិនមែនត្រឹមប្រអប់ prompt ទេ។",
      description:
        "នេះជាអ្វីដែលគួរតែបង្ហាញ។ ការចាប់ផ្ដើមក្នុង project, tools ដែលមានព្រំដែន, internals ដែលបង្ហាញតាមតម្រូវការ និងជំហានពិនិត្យ diff មុនពេល edit ចូល repo — ទាំងអស់នេះធ្វើអោយ agent loop ក្លាយជាអ្វីដែលអ្នកអភិវឌ្ឍអាចទុកចិត្តបាន។",
      sessionLabel: "វគ្គ Apsara",
      terminal: {
        screenReaderLabel: "ឧទាហរណ៍ agentic coding",
        lines: [
          {
            kind: "command",
            prompt: "$",
            value:
              'apsara run "កែ copy សម្រាប់ approval ហើយរក្សា review gate ដដែល"',
          },
          {
            kind: "field",
            label: "workspace",
            value: "./apsara-agentic-api",
          },
          {
            kind: "field",
            label: "trace",
            value: "កំពុងអាន app/api/approval.py និង app/ui/review-panel.tsx",
          },
          {
            kind: "field",
            label: "draft",
            value: "រៀបចំការកែ copy តូចៗ ដោយមិនរំលង human review",
          },
          {
            kind: "field",
            label: "diff",
            value: "2 files ផ្លាស់ប្ដូរ, preview បង្កើតហើយ មុនពេលសរសេរ",
          },
          {
            kind: "field",
            label: "status",
            value: "រង់ចាំការអនុម័តដើម្បីអនុវត្ត patch។",
          },
        ],
      },
      whyEyebrow: "ហេតុអ្វីវាល្អជាង",
      whyTitle: "មានព្រំដែនជាង chat។ ងាយយល់ជាង autopilot។",
      whyDescription:
        "ប្រព័ន្ធធ្វើការពិតៗ ប៉ុន្តែមិនដែលបង្ខំអ្នកអភិវឌ្ឍ អោយបោះបង់ scope, review ឬ authorship ឡើយ។",
      notes: [
        {
          title: "ច្រកអនុម័ត",
          description:
            "អ្នកអភិវឌ្ឍពិនិត្យ diff មុនពេលការកែប្រែសំខាន់ប៉ះ repo។",
        },
        {
          title: "Internals ស្ងប់ស្ងាត់",
          description:
            "សកម្មភាព tools លាក់ជាលំនាំដើម រហូតដល់ /details ត្រូវបានបើកដោយចេតនា។",
        },
        {
          title: "វឌ្ឍនភាពងាយតាមដាន",
          description:
            "workflow បង្ហាញអ្វីដែលផ្លាស់ប្ដូរ មូលហេតុ និងអ្វីដែលនៅត្រូវការការសម្រេចចិត្ត។",
        },
      ],
      humanLoopEyebrow: "មនុស្សនៅក្នុង Loop",
      humanLoopText:
        "ការពិនិត្យស្ថិតនៅក្នុងផ្លូវសំខាន់ មិនមែនបន្ថែមក្រោយមកទេ។",
      toneEyebrow: "សំឡេងផលិតផល",
      toneText:
        "ស្ងប់គ្រប់គ្រាន់ដើម្បីទុកចិត្ត។ ច្បាស់គ្រប់គ្រាន់ដើម្បីពិនិត្យ។ មានប្រយោជន៍គ្រប់គ្រាន់ដើម្បីប្រើបន្ត។",
      tailTitle: "ទំនុកចិត្តកើនឡើង នៅពេលគ្រប់ជំហានមានព្រំដែន។",
      tailDescription:
        "មានន័យថា workspace scoping, ច្រកពិនិត្យមុនសរសេរ និងសកម្មភាព internal ដែលអាចចូលមើលបាន ដោយមិនគ្របដណ្ដប់ interface ទាំងមូល។",
    },
    features: {
      eyebrow: "សមត្ថភាព",
      titleLead: "អ្វីដែលធ្វើអោយ Apsara",
      titleHighlight: "មានប្រយោជន៍ថ្ងៃនេះ",
      titleTail: "",
      description:
        "តម្លៃនេះមិនមែនជាការស្មានទេ។ ទាំងនេះជាអាកប្បកិរិយាពិតៗ ដែលធ្វើអោយ CLI និង backend បច្ចុប្បន្ន គួរទុកចិត្តជាងផ្ទាំង AI ធម្មតា។",
      cards: [
        {
          title: "ចាប់ផ្ដើមក្នុង Project",
          description:
            "Apsara ចាប់ផ្ដើមក្នុង repo, រក្សា config នៅកន្លែងដែលការងារស្ថិតនៅ និងជៀសវាងបញ្ហា AI chat ដែលផ្ដាច់ចេញពី project។",
        },
        {
          title: "Tools ព្រំដែនតាម Workspace",
          description:
            "ការស្វែងរក, អាន, សរសេរ និងជំនួសបន្ទាត់ ត្រូវបានកំណត់ព្រំដែននៅ root ដែលអនុញ្ញាត មិនដើរលើម៉ាស៊ីនសេរីទេ។",
        },
        {
          title: "អនុម័តដោយពិនិត្យ Diff មុន",
          description:
            "ការផ្លាស់ប្ដូរសំខាន់ៗ ឈប់នៅច្រកពិនិត្យ ដូច្នេះអ្នកអភិវឌ្ឍនៅតែជាអ្នកសម្រេចចុងក្រោយ។",
        },
        {
          title: "Internals បង្ហាញតាមតម្រូវការ",
          description:
            "សកម្មភាព tools ស្ងប់ជាលំនាំដើម ខណៈ /details ផ្ដល់ work trail ពិតៗ ដល់អ្នកប្រើជំនាញ នៅពេលពួកគេចង់ដឹង។",
        },
        {
          title: "Backend រឹងមាំ",
          description:
            "FastAPI, Postgres persistence, usage tracking និង SSE streaming ផ្ដល់គ្រឹះពិតប្រាកដ សម្រាប់ agent loop។",
        },
        {
          title: "Sessions បន្ត",
          description:
            "ប្រវត្តិសន្ទនា និង usage events ត្រូវបានរក្សាទុក ដូច្នេះ workflow នៅតែទទួលខុសត្រូវ ក្នុងការដំណើរការបន្ត។",
        },
      ],
    },
    workflow: {
      eyebrow: "របៀបដំណើរការ",
      title: "Workflow ដែលស្របតាមរបៀបធ្វើការរបស់អ្នកអភិវឌ្ឍ។",
      description:
        "កំណត់ទិស repo, ប្រគល់ការងារលំបាកអោយ agent និងរក្សា authorship តាមរយៈ review។ ផលិតផលមិនរំខាន ប៉ុន្តែក៏មិនស្ងូតស្ងាត់ពេក។",
      steps: [
        {
          title: "ចាប់ផ្ដើមក្នុង Workspace",
          description:
            "ចាប់ផ្ដើម Apsara ក្នុង repo ដើម្បីអោយ session ទទួលបាន filesystem boundary និង context របស់ project ត្រឹមត្រូវ។",
        },
        {
          title: "ស្នើការងារដែលមានន័យ",
          description:
            "តាមដាន code, ពិនិត្យ files និងព្រាងការផ្លាស់ប្ដូរ ខណៈ tool noise ត្រូវបានលាក់ទុករហូតដល់ត្រូវការ។",
        },
        {
          title: "ពិនិត្យ និងបង្វែរទិស",
          description:
            "អនុម័ត diff, បដិសេធ ឬបង្វែរជំហានបន្ទាប់ ខណៈ session រក្សា thread និង reasoning ដដែល។",
        },
      ],
    },
    cta: {
      eyebrow: "គំនិតបញ្ចប់",
      titleLead: "រួចរាល់ហើយឬ ដើម្បីអោយ Apsara មានទ្វារចូលដែលផ្គូផ្គងនឹង",
      titleHighlight: "ភាពពិតនៃផលិតផល",
      titleTail: "?",
      description:
        "រឿងរ៉ាវខ្លាំងបំផុតមានរួចហើយ៖ ការចាប់ផ្ដើមពី repo, tools ដែលមានព្រំដែន, internals ស្ងប់, diff ដែលអាចពិនិត្យបាន និង context បន្ត សម្រាប់ការងារ engineering ពិតៗ។",
      primaryCta: "មើល showcase",
      secondaryCta: "ត្រឡប់ទំព័រដើម",
    },
    footer: {
      description:
        "ការសរសេរកូដបែប project-first ដែលស្ថិតលើ tools ព្រំដែន, ការកែប្រែដែលអាចពិនិត្យបាន និង context បន្ត សម្រាប់ repositories ពិតៗ។",
      sections: [
        {
          title: "ផ្នែក",
          links: [
            { href: siteRoutes.product, label: "ទិដ្ឋភាពផលិតផល" },
            { href: siteRoutes.capabilities, label: "សមត្ថភាព" },
            { href: siteRoutes.workflow, label: "ដំណើរការ" },
          ],
        },
        {
          title: "អ្វីដែលសំខាន់",
          links: [
            {
              href: siteRoutes.capabilities,
              label: "ចាប់ផ្ដើមក្នុង Project",
            },
            { href: siteRoutes.product, label: "ពិនិត្យ Diff មុន" },
            { href: siteRoutes.privateAlpha, label: "Private Alpha" },
          ],
        },
      ],
      copyright:
        "Agentic coding ដែលមានព្រំដែន, ច្បាស់លាស់ និងពិនិត្យដោយមនុស្ស។",
    },
  },
} satisfies Record<LandingLocale, LandingCopy>;
