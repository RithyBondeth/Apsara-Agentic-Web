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
    installLabel: string;
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
  install: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    promise: string;
    steps: {
      number: string;
      title: string;
      description: string;
      command: string;
    }[];
    copyLabel: string;
    copiedLabel: string;
    requirementsTitle: string;
    requirements: string[];
    privacyTitle: string;
    privacyDescription: string;
    privacyPoints: LandingCard[];
    githubLabel: string;
    releasesLabel: string;
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
        { href: siteRoutes.install, label: "Install" },
        { href: siteRoutes.product, label: "Product" },
        { href: siteRoutes.capabilities, label: "Capabilities" },
        { href: siteRoutes.workflow, label: "Workflow" },
      ],
      exploreLabel: "Explore",
      installLabel: "Install CLI",
      languageSwitcherLabel: "Language",
      localeLabels: {
        en: "EN",
        km: "ខ្មែរ",
      },
    },
    hero: {
      badge: "Local-first CLI · no Apsara account required",
      titleLead: "Your coding agent.",
      titleHighlight: "Inside your repo.",
      titleTail: "On your machine.",
      description:
        "Install the CLI, bring a model API key, and start coding. Apsara keeps your repositories, sessions, checkpoints, and project memory local while you stay in control of every meaningful change.",
      primaryCta: "Install Apsara",
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
        "The value is not speculative. These are the real local behaviors that make the CLI more trustworthy than a generic AI tab.",
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
          title: "Durable local runtime",
          description:
            "Typed run state, local journals, checkpoints, and verification keep the agent loop inspectable without a hosted Apsara backend.",
        },
        {
          title: "Persistent sessions",
          description:
            "Conversation history and usage events stay on your machine so work remains durable without cloud synchronization.",
        },
      ],
    },
    workflow: {
      eyebrow: "How It Works",
      title: "A workflow that mirrors how developers already work.",
      description:
        "Bring your provider, initialize the repo, and start coding. No Apsara account or cloud workspace sits between you and your tools.",
      steps: [
        {
          title: "Connect your model provider",
          description:
            "Run apsara login and save your OpenCode, OpenAI, Anthropic, Google, Groq, or other provider key locally.",
        },
        {
          title: "Initialize your repository",
          description:
            "Run apsara init inside the project so workspace boundaries, instructions, and local configuration live with the codebase.",
        },
        {
          title: "Start the local agent",
          description:
            "Run apsara chat, ask for meaningful work, and review or reject changes before they land.",
        },
      ],
    },
    install: {
      eyebrow: "Local installation",
      titleLead: "Install once.",
      titleHighlight: "Code locally.",
      description:
        "Apsara is a local CLI, not a hosted coding service. You do not create an Apsara account, and your project does not need a cloud workspace.",
      promise: "No account · No source upload · Bring your own API key",
      steps: [
        {
          number: "01",
          title: "Install the CLI",
          description: "pipx keeps Apsara isolated from your project dependencies and exposes the apsara command globally.",
          command: "pipx install apsara-agentic",
        },
        {
          number: "02",
          title: "Add your provider key",
          description: "Choose a model provider and save its key on your machine. Apsara never receives it.",
          command: "apsara login",
        },
        {
          number: "03",
          title: "Initialize a project",
          description: "Run this from the repository you want Apsara to work inside.",
          command: "cd your-project && apsara init",
        },
        {
          number: "04",
          title: "Start coding",
          description: "Open the local terminal experience and give the agent its first task.",
          command: "apsara chat",
        },
      ],
      copyLabel: "Copy",
      copiedLabel: "Copied",
      requirementsTitle: "Before you install",
      requirements: [
        "Python 3.10 or newer",
        "pipx installed for an isolated global CLI",
        "Git available in your terminal",
        "An API key from a supported provider, or local Ollama",
      ],
      privacyTitle: "Local means local",
      privacyDescription:
        "Apsara calls the model provider you choose. The Apsara website is not in that request path.",
      privacyPoints: [
        { title: "Your code stays put", description: "Workspace files, sessions, memory, checkpoints, and run reports remain on your machine." },
        { title: "Your key stays yours", description: "Provider credentials are stored locally and sent only to the provider required for your selected model." },
        { title: "You approve changes", description: "Workspace writes and command execution remain bounded by local permissions and review gates." },
      ],
      githubLabel: "View source on GitHub",
      releasesLabel: "Browse releases",
    },
    cta: {
      eyebrow: "Start locally",
      titleLead: "One CLI.",
      titleHighlight: "Your provider.",
      titleTail: "Your code stays yours.",
      description:
        "Install Apsara without creating an account, connect the model you already use, and keep the complete coding workflow on your machine.",
      primaryCta: "Install the CLI",
      secondaryCta: "View capabilities",
    },
    footer: {
      description:
        "A local-first coding agent. Bring your own model API key and keep your code, sessions, and project context on your machine.",
      sections: [
        {
          title: "Sections",
          links: [
            { href: siteRoutes.install, label: "Install CLI" },
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
            { href: siteRoutes.install, label: "No account required" },
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
        { href: siteRoutes.install, label: "ដំឡើង" },
        { href: siteRoutes.product, label: "ផលិតផល" },
        { href: siteRoutes.capabilities, label: "សមត្ថភាព" },
        { href: siteRoutes.workflow, label: "ដំណើរការ" },
      ],
      exploreLabel: "ស្វែងយល់",
      installLabel: "ដំឡើង CLI",
      languageSwitcherLabel: "ភាសា",
      localeLabels: {
        en: "EN",
        km: "ខ្មែរ",
      },
    },
    hero: {
      badge: "CLI ដំណើរការក្នុងម៉ាស៊ីន · មិនត្រូវការ account Apsara",
      titleLead: "Coding agent របស់អ្នក។",
      titleHighlight: "នៅក្នុង repo។",
      titleTail: "នៅលើម៉ាស៊ីនរបស់អ្នក។",
      description:
        "ដំឡើង CLI, ប្រើ API key របស់ model provider ផ្ទាល់ខ្លួន ហើយចាប់ផ្ដើមសរសេរកូដ។ Apsara រក្សា repo, session, checkpoint និង project memory នៅលើម៉ាស៊ីនរបស់អ្នក។",
      primaryCta: "ដំឡើង Apsara",
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
        "តម្លៃនេះមិនមែនជាការស្មានទេ។ ទាំងនេះជាអាកប្បកិរិយាក្នុងម៉ាស៊ីនពិតៗ ដែលធ្វើអោយ CLI គួរទុកចិត្តជាងផ្ទាំង AI ធម្មតា។",
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
          title: "Runtime ក្នុងម៉ាស៊ីនដែលរឹងមាំ",
          description:
            "Typed run state, local journal, checkpoint និង verification ធ្វើអោយ agent loop អាចពិនិត្យបាន ដោយមិនត្រូវការ Apsara cloud។",
        },
        {
          title: "Sessions បន្ត",
          description:
            "ប្រវត្តិសន្ទនា និង usage events ស្ថិតនៅលើម៉ាស៊ីន ដោយមិនមាន cloud synchronization។",
        },
      ],
    },
    workflow: {
      eyebrow: "របៀបដំណើរការ",
      title: "Workflow ដែលស្របតាមរបៀបធ្វើការរបស់អ្នកអភិវឌ្ឍ។",
      description:
        "ភ្ជាប់ model provider, initialize repo ហើយចាប់ផ្ដើមសរសេរកូដ។ មិនមាន Apsara account ឬ cloud workspace នៅកណ្ដាលទេ។",
      steps: [
        {
          title: "ភ្ជាប់ Model Provider",
          description:
            "ដំណើរការ apsara login ដើម្បីរក្សាទុក API key របស់ OpenCode, OpenAI, Anthropic, Google, Groq ឬ provider ផ្សេងនៅលើម៉ាស៊ីន។",
        },
        {
          title: "Initialize Repository",
          description:
            "ដំណើរការ apsara init ក្នុង project ដើម្បីកំណត់ workspace boundary, instructions និង local config។",
        },
        {
          title: "ចាប់ផ្ដើម Local Agent",
          description:
            "ដំណើរការ apsara chat, ស្នើការងារ ហើយពិនិត្យ ឬបដិសេធការកែប្រែមុនពេលវាចូល repo។",
        },
      ],
    },
    install: {
      eyebrow: "ការដំឡើងក្នុងម៉ាស៊ីន",
      titleLead: "ដំឡើងម្ដង។",
      titleHighlight: "សរសេរកូដក្នុងម៉ាស៊ីន។",
      description:
        "Apsara គឺជា local CLI មិនមែន hosted coding service ទេ។ អ្នកមិនចាំបាច់បង្កើត Apsara account ឬ cloud workspace ឡើយ។",
      promise: "គ្មាន account · មិន upload source code · ប្រើ API key ផ្ទាល់ខ្លួន",
      steps: [
        {
          number: "01",
          title: "ដំឡើង CLI",
          description: "pipx ញែក Apsara ចេញពី dependencies របស់ project ហើយធ្វើអោយ command apsara ប្រើបានគ្រប់ទីកន្លែង។",
          command: "pipx install apsara-agentic",
        },
        {
          number: "02",
          title: "បន្ថែម Provider Key",
          description: "ជ្រើស model provider ហើយរក្សាទុក key នៅលើម៉ាស៊ីន។ Apsara មិនទទួល key នេះទេ។",
          command: "apsara login",
        },
        {
          number: "03",
          title: "Initialize Project",
          description: "ដំណើរការ command នេះពី repository ដែលអ្នកចង់អោយ Apsara ធ្វើការ។",
          command: "cd your-project && apsara init",
        },
        {
          number: "04",
          title: "ចាប់ផ្ដើមសរសេរកូដ",
          description: "បើក terminal experience ក្នុងម៉ាស៊ីន ហើយផ្ដល់ task ដំបូងទៅ agent។",
          command: "apsara chat",
        },
      ],
      copyLabel: "ចម្លង",
      copiedLabel: "បានចម្លង",
      requirementsTitle: "មុនពេលដំឡើង",
      requirements: [
        "Python 3.10 ឬថ្មីជាងនេះ",
        "pipx សម្រាប់ដំឡើង CLI ដោយឡែកពី project",
        "Git អាចប្រើបានក្នុង terminal",
        "API key ពី provider ដែលគាំទ្រ ឬ local Ollama",
      ],
      privacyTitle: "Local មានន័យថាស្ថិតក្នុងម៉ាស៊ីន",
      privacyDescription:
        "Apsara ហៅ model provider ដែលអ្នកជ្រើសដោយផ្ទាល់។ Website របស់ Apsara មិនស្ថិតក្នុងផ្លូវ request នោះទេ។",
      privacyPoints: [
        { title: "Code របស់អ្នកនៅដដែល", description: "Workspace files, sessions, memory, checkpoints និង run reports ស្ថិតនៅលើម៉ាស៊ីនរបស់អ្នក។" },
        { title: "Key របស់អ្នកជារបស់អ្នក", description: "Provider credentials រក្សាទុកក្នុងម៉ាស៊ីន ហើយផ្ញើតែទៅ provider របស់ model ដែលអ្នកជ្រើស។" },
        { title: "អ្នកអនុម័តការកែប្រែ", description: "ការសរសេរ files និង command execution ស្ថិតក្រោម local permissions និង review gates។" },
      ],
      githubLabel: "មើល source នៅ GitHub",
      releasesLabel: "មើល releases",
    },
    cta: {
      eyebrow: "ចាប់ផ្ដើមក្នុងម៉ាស៊ីន",
      titleLead: "CLI មួយ។",
      titleHighlight: "Provider របស់អ្នក។",
      titleTail: "Code របស់អ្នកនៅតែជារបស់អ្នក។",
      description:
        "ដំឡើង Apsara ដោយមិនបង្កើត account, ភ្ជាប់ model ដែលអ្នកប្រើស្រាប់ ហើយរក្សា coding workflow ទាំងមូលនៅលើម៉ាស៊ីន។",
      primaryCta: "ដំឡើង CLI",
      secondaryCta: "មើលសមត្ថភាព",
    },
    footer: {
      description:
        "Coding agent ដែលដំណើរការក្នុងម៉ាស៊ីន។ ប្រើ API key របស់អ្នក និងរក្សា code, session និង project context នៅលើម៉ាស៊ីន។",
      sections: [
        {
          title: "ផ្នែក",
          links: [
            { href: siteRoutes.install, label: "ដំឡើង CLI" },
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
            { href: siteRoutes.install, label: "មិនត្រូវការ account" },
          ],
        },
      ],
      copyright:
        "Agentic coding ដែលមានព្រំដែន, ច្បាស់លាស់ និងពិនិត្យដោយមនុស្ស។",
    },
  },
} satisfies Record<LandingLocale, LandingCopy>;
