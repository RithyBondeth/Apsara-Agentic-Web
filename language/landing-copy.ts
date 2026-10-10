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
  behind: {
    eyebrow: string;
    title: string;
    description: string;
    mascot: {
      eyebrow: string;
      title: string;
      description: string;
      activityDescription: string;
      imageAlt: string;
      caption: string;
      motionLabel: string;
    };
    developer: {
      eyebrow: string;
      name: string;
      role: string;
      description: string;
      invitation: string;
      profileLabel: string;
      sourceLabel: string;
    };
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
      subtitle: "AI Coding Assistant",
      logoAlt: "Makor, the Apsara Agentic logo",
    },
    header: {
      navItems: [
        {
          href: "/install",
          label: "Install",
        },
        {
          href: "/product",
          label: "Overview",
        },
        {
          href: "/capabilities",
          label: "Capabilities",
        },
        {
          href: "/workflow",
          label: "How it works",
        },
      ],
      exploreLabel: "Explore",
      installLabel: "Install Apsara",
      languageSwitcherLabel: "Language",
      localeLabels: {
        en: "EN",
        km: "ខ្មែរ",
      },
    },
    hero: {
      badge: "AI coding assistant for your terminal",
      titleLead: "Understand code.",
      titleHighlight: "Build features.",
      titleTail: "Fix bugs.",
      description:
        "Apsara helps you read, edit, and test code from your terminal. Work in your own project, choose your model, and review changes before they’re applied.",
      primaryCta: "Install Apsara",
      secondaryCta: "See what Apsara can do",
      scrollAriaLabel: "See how Apsara works",
      signals: [
        {
          value: "Work locally",
          label: "Your project files and session history are stored on your machine.",
        },
        {
          value: "Choose your model",
          label: "Use your own API key or run a local model with Ollama.",
        },
        {
          value: "Review changes",
          label: "See proposed edits before applying them. Undo when you need to.",
        },
      ],
    },
    showcase: {
      eyebrow: "Apsara in action",
      title: "From a coding task to changes you can review.",
      description:
        "Describe what you want to change. Apsara explores your project, proposes edits, and runs checks, all in your terminal.",
      sessionLabel: "apsara",
      terminal: {
        screenReaderLabel: "Illustrative Apsara CLI session",
        lines: [],
      },
      whyEyebrow: "Stay in control",
      whyTitle: "See what changes and why.",
      whyDescription: "Follow the work from the first file read to the final check. Review proposed edits and inspect the results.",
      notes: [
        {
          title: "Work in your existing project",
          description:
            "Run apsara from your project folder. It works with the files there, so you can start without setting up a separate workspace.",
        },
        {
          title: "Review before applying",
          description:
            "By default, Apsara shows proposed file changes and asks for approval. Saved checkpoints let you restore earlier versions.",
        },
        {
          title: "See the check results",
          description:
            "Apsara runs your project’s checks and reviews the changes. The report shows what passed, what failed, and what still needs attention.",
        },
      ],
      humanLoopEyebrow: "You decide",
      humanLoopText: "Review the changes, approve the edits, and check the results.",
      toneEyebrow: "Meet Makor",
      toneText:
        "Makor is Apsara’s pixel mascot, keeping you company while the coding assistant works.",
      tailTitle: "Your project. Your model. Your decisions.",
      tailDescription:
        "Choose a model provider or use Ollama locally. Review edits, approve commands, and keep a record of the work on your machine.",
    },
    features: {
      eyebrow: "What Apsara can do",
      titleLead: "Help with the code.",
      titleHighlight: "From start to finish.",
      titleTail: "",
      description:
        "Explore an unfamiliar project, make a change, and check that it works with tools built into the CLI.",
      cards: [
        {
          title: "Explore your codebase",
          description:
            "Find files, follow function references, and read Git history to understand how your project fits together.",
        },
        {
          title: "Make changes you can review",
          description:
            "Review proposed edits before they’re applied. Restore a previous version from a checkpoint if you need to.",
        },
        {
          title: "Run tests and checks",
          description:
            "Run the checks your project defines and inspect the results. Apsara reports when verification is missing or fails.",
        },
        {
          title: "Approve terminal commands",
          description:
            "Enable the commands your task needs. Apsara asks for your approval before running them.",
        },
        {
          title: "Connect external tools",
          description:
            "Connect tools and services through MCP. Actions that change external data require your approval.",
        },
        {
          title: "Continue previous work",
          description:
            "Resume saved conversations and keep project notes on your machine. Review or undo changes from an earlier turn.",
        },
      ],
    },
    workflow: {
      eyebrow: "How it works",
      title: "Open your project. Describe the task. Review the result.",
      description:
        "Start in the terminal you already use. No Apsara account required.",
      steps: [
        {
          title: "Open Apsara in your project",
          description:
            "After installing the CLI, open your project folder and run apsara to start a conversation.",
        },
        {
          title: "Connect your model",
          description:
            "Add your model provider’s API key when prompted, or choose a local Ollama model. Keep the key for this session or save it on your machine.",
        },
        {
          title: "Describe a task and review the changes",
          description:
            "Ask Apsara to explain code, fix a bug, or build a feature. Review proposed edits, approve them, and inspect the check results.",
        },
      ],
    },
    install: {
      eyebrow: "Install the alpha",
      titleLead: "Set up Apsara.",
      titleHighlight: "Start in your terminal.",
      description:
        "Build the current alpha from source, install it with pipx, and run Apsara in your project folder.",
      promise: "Runs locally · Your choice of model · No Apsara account",
      steps: [
        {
          number: "01",
          title: "Open the source folder",
          description:
            "Get the CLI source from GitHub and open its folder. These steps use version 0.1.0a2, listed in pyproject.toml.",
          command: "cd /path/to/Apsara-Agentic-Cli",
        },
        {
          number: "02",
          title: "Build the package",
          description:
            "From the CLI source folder, install the Python build tool and create the installable package.",
          command: "python3 -m pip install build\npython3 -m build",
        },
        {
          number: "03",
          title: "Install with pipx",
          description:
            "Run this command from the same source folder. pipx installs Apsara separately from your project’s dependencies.",
          command:
            "pipx install ./dist/apsara_agentic-0.1.0a2-py3-none-any.whl",
        },
        {
          number: "04",
          title: "Start Apsara",
          description:
            "Open your project folder and run apsara. Add your model provider’s API key when prompted.",
          command: "cd /path/to/your/project\napsara",
        },
      ],
      copyLabel: "Copy",
      copiedLabel: "Copied",
      requirementsTitle: "Before you start",
      requirements: [
        "Python 3.10 through 3.14",
        "pipx installed and available on your PATH",
        "Git available in your terminal",
        "An API key from a model provider, or Ollama installed locally",
      ],
      privacyTitle: "Know where your code goes.",
      privacyDescription:
        "Apsara runs on your machine and connects directly to the model provider you choose. Requests do not pass through an Apsara server.",
      privacyPoints: [
        {
          title: "Local storage, direct model requests",
          description:
            "Project files, conversations, notes, and checkpoints are stored on your machine. Relevant code is sent to your chosen model provider when you use a hosted model.",
        },
        {
          title: "Choose how to store your key",
          description:
            "Use an API key for the current session or save it locally with access restricted to your user account. Ollama lets you use a model on your own machine.",
        },
        {
          title: "Approve commands before they run",
          description:
            "Built-in file tools work within your selected project folder. Approved terminal commands run with your user account’s permissions.",
        },
      ],
      githubLabel: "View source",
      releasesLabel: "View releases",
    },
    behind: {
      eyebrow: "Behind Apsara",
      title: "Meet the character and the creator.",
      description:
        "Khmer-inspired artwork and a hands-on developer give Apsara its identity.",
      mascot: {
        eyebrow: "The mascot",
        title: "Meet Makor",
        description:
          "Makor is the face of Apsara’s coding assistant. This pixel Makara takes inspiration from Khmer art, with a gold crest, a curled trunk, and a blue eye.",
        activityDescription:
          "During a coding task, Makor appears beside the current activity as Apsara thinks, uses tools, or waits for your approval.",
        imageAlt: "Makor, a gold pixel Makara with a curled trunk and blue eye",
        caption: "Khmer-inspired, pixel by pixel.",
        motionLabel: "Prefer a still mascot?",
      },
      developer: {
        eyebrow: "The developer",
        name: "Bondeth",
        role: "Developer of Apsara Agentic",
        description:
          "Bondeth builds Apsara Agentic, bringing local coding tools and a Khmer-inspired identity into the terminal.",
        invitation:
          "Explore the source, follow development, or share an idea on GitHub.",
        profileLabel: "View GitHub profile",
        sourceLabel: "Explore the source",
      },
    },
    cta: {
      eyebrow: "Get started",
      titleLead: "Bring your next task",
      titleHighlight: "to Apsara.",
      titleTail: "",
      description:
        "Install the CLI, connect a model, and start with a bug, a feature, or a question about your code.",
      primaryCta: "Install Apsara",
      secondaryCta: "See what Apsara can do",
    },
    footer: {
      description:
        "An AI coding assistant for your terminal. Work in your project, choose your model, and stay in control of changes.",
      sections: [
        {
          title: "Explore",
          links: [
            {
              href: "/install",
              label: "Install",
            },
            {
              href: "/product",
              label: "Overview",
            },
            {
              href: "/capabilities",
              label: "Capabilities",
            },
            {
              href: "/workflow",
              label: "How it works",
            },
          ],
        },
        {
          title: "Source",
          links: [
            { label: "GitHub", href: siteRoutes.github },
            { label: "Releases", href: siteRoutes.releases },
          ],
        },
      ],
      copyright: "Built for your terminal.",
    },
  },
  km: {
    brand: {
      title: "Apsara",
      subtitle: "ជំនួយការ AI សម្រាប់សរសេរកូដ",
      logoAlt: "Makor ជានិមិត្តសញ្ញារបស់ Apsara Agentic",
    },
    header: {
      navItems: [
        {
          href: "/install",
          label: "ដំឡើង",
        },
        {
          href: "/product",
          label: "អំពី Apsara",
        },
        {
          href: "/capabilities",
          label: "សមត្ថភាព",
        },
        {
          href: "/workflow",
          label: "របៀបប្រើ",
        },
      ],
      exploreLabel: "មើលបន្ថែម",
      installLabel: "ដំឡើង Apsara",
      languageSwitcherLabel: "ភាសា",
      localeLabels: {
        en: "EN",
        km: "ខ្មែរ",
      },
    },
    hero: {
      badge: "ជំនួយការ AI សម្រាប់សរសេរកូដក្នុង Terminal",
      titleLead: "យល់ពីកូដ។",
      titleHighlight: "បង្កើតមុខងារថ្មី។",
      titleTail: "កែកំហុស។",
      description:
        "Apsara ជួយអ្នកអាន កែសម្រួល និងសាកល្បងកូដក្នុង Terminal។ ធ្វើការលើគម្រោងរបស់អ្នក ជ្រើសរើសម៉ូដែលដែលចង់ប្រើ ហើយពិនិត្យការកែប្រែមុនពេលអនុវត្ត។",
      primaryCta: "ដំឡើង Apsara",
      secondaryCta: "មើលសមត្ថភាព",
      scrollAriaLabel: "មើលរបៀបដែល Apsara ដំណើរការ",
      signals: [
        {
          value: "ធ្វើការក្នុងម៉ាស៊ីនរបស់អ្នក",
          label: "ឯកសារគម្រោង និងប្រវត្តិសន្ទនា ត្រូវបានរក្សាទុកក្នុងម៉ាស៊ីនរបស់អ្នក។",
        },
        {
          value: "ជ្រើសរើសម៉ូដែល",
          label: "ប្រើ API key របស់អ្នក ឬដំណើរការម៉ូដែលក្នុងម៉ាស៊ីនជាមួយ Ollama។",
        },
        {
          value: "ពិនិត្យការកែប្រែ",
          label: "មើលការកែប្រែដែលបានស្នើមុនពេលអនុវត្ត។ អ្នកអាចស្ដារកំណែមុនវិញបាន។",
        },
      ],
    },
    showcase: {
      eyebrow: "ស្វែងយល់ពី Apsara",
      title: "ពីសំណើរបស់អ្នក ទៅការកែប្រែដែលអាចពិនិត្យបាន។",
      description:
        "ប្រាប់ Apsara ពីអ្វីដែលអ្នកចង់កែប្រែ។ Apsara នឹងស្វែងយល់ពីគម្រោង ស្នើការកែប្រែ និងដំណើរការការត្រួតពិនិត្យក្នុង Terminal។",
      sessionLabel: "apsara",
      terminal: {
        screenReaderLabel: "ឧទាហរណ៍នៃការប្រើ Apsara ក្នុង Terminal",
        lines: [],
      },
      whyEyebrow: "អ្នកជាអ្នកសម្រេច",
      whyTitle: "ដឹងថាកែអ្វី និងហេតុអ្វី។",
      whyDescription: "តាមដានការងារចាប់ពីការអានឯកសារដំបូង រហូតដល់ការត្រួតពិនិត្យចុងក្រោយ។ ពិនិត្យការកែប្រែដែលបានស្នើ និងលទ្ធផលដែលទទួលបាន។",
      notes: [
        {
          title: "ធ្វើការលើគម្រោងដែលមានស្រាប់",
          description:
            "ដំណើរការ apsara ពីថតគម្រោងរបស់អ្នក។ Apsara ប្រើឯកសារនៅទីនោះ ដូច្នេះអ្នកមិនចាំបាច់រៀបចំកន្លែងធ្វើការថ្មីទេ។",
        },
        {
          title: "ពិនិត្យមុនពេលអនុវត្ត",
          description:
            "តាមលំនាំដើម Apsara បង្ហាញការកែប្រែឯកសារ និងស្នើការអនុម័តពីអ្នក។ ចំណុចស្ដារដែលបានរក្សាទុក អនុញ្ញាតឱ្យអ្នកត្រឡប់ទៅកំណែមុនវិញ។",
        },
        {
          title: "មើលលទ្ធផលត្រួតពិនិត្យ",
          description:
            "Apsara ដំណើរការការត្រួតពិនិត្យរបស់គម្រោង និងពិនិត្យការកែប្រែ។ របាយការណ៍បង្ហាញអ្វីដែលបានជោគជ័យ បរាជ័យ និងអ្វីដែលត្រូវពិនិត្យបន្ថែម។",
        },
      ],
      humanLoopEyebrow: "ការសម្រេចចិត្តនៅលើអ្នក",
      humanLoopText: "ពិនិត្យការកែប្រែ អនុម័តការអនុវត្ត និងមើលលទ្ធផលត្រួតពិនិត្យ។",
      toneEyebrow: "ស្គាល់ Makor",
      toneText:
        "Makor ជាតួអង្គ pixel តំណាងឱ្យ Apsara ដែលនៅក្បែរអ្នកពេលជំនួយការសរសេរកូដកំពុងធ្វើការ។",
      tailTitle: "គម្រោងរបស់អ្នក។ ម៉ូដែលរបស់អ្នក។ ការសម្រេចចិត្តរបស់អ្នក។",
      tailDescription:
        "ជ្រើសរើសអ្នកផ្ដល់សេវាម៉ូដែល ឬប្រើ Ollama ក្នុងម៉ាស៊ីន។ ពិនិត្យការកែប្រែ អនុម័តពាក្យបញ្ជា និងរក្សាទុកកំណត់ត្រាការងារក្នុងម៉ាស៊ីនរបស់អ្នក។",
    },
    features: {
      eyebrow: "អ្វីដែល Apsara អាចជួយបាន",
      titleLead: "ជួយការងារកូដ",
      titleHighlight: "ពីដើមដល់ចប់។",
      titleTail: "",
      description:
        "ស្វែងយល់ពីគម្រោងដែលអ្នកមិនទាន់ស្គាល់ កែសម្រួលកូដ និងពិនិត្យថាវាដំណើរការបាន ដោយប្រើឧបករណ៍ដែលមានក្នុង CLI។",
      cards: [
        {
          title: "ស្វែងយល់ពីកូដក្នុងគម្រោង",
          description:
            "ស្វែងរកឯកសារ តាមដានកន្លែងប្រើមុខងារ និងអានប្រវត្តិ Git ដើម្បីយល់ពីរបៀបដែលផ្នែកនានានៃគម្រោងដំណើរការជាមួយគ្នា។",
        },
        {
          title: "កែប្រែដោយអាចពិនិត្យបាន",
          description:
            "ពិនិត្យការកែប្រែដែលបានស្នើមុនពេលអនុវត្ត។ ប្រើចំណុចស្ដារដើម្បីត្រឡប់ទៅកំណែមុនវិញនៅពេលចាំបាច់។",
        },
        {
          title: "សាកល្បង និងត្រួតពិនិត្យកូដ",
          description:
            "ដំណើរការការត្រួតពិនិត្យដែលគម្រោងបានកំណត់ ហើយមើលលទ្ធផល។ Apsara ប្រាប់អ្នកនៅពេលមិនអាចផ្ទៀងផ្ទាត់បាន ឬការត្រួតពិនិត្យបរាជ័យ។",
        },
        {
          title: "អនុម័តពាក្យបញ្ជាក្នុង Terminal",
          description:
            "បើកឱ្យប្រើពាក្យបញ្ជាដែលការងារត្រូវការ។ Apsara ស្នើការអនុម័តពីអ្នកមុនពេលដំណើរការពាក្យបញ្ជាទាំងនោះ។",
        },
        {
          title: "ភ្ជាប់ឧបករណ៍ខាងក្រៅ",
          description:
            "ភ្ជាប់ឧបករណ៍ និងសេវាផ្សេងៗតាម MCP។ សកម្មភាពដែលកែប្រែទិន្នន័យខាងក្រៅ ត្រូវការការអនុម័តពីអ្នក។",
        },
        {
          title: "បន្តការងារពីមុន",
          description:
            "បន្តការសន្ទនាដែលបានរក្សាទុក និងរក្សាកំណត់ត្រាគម្រោងក្នុងម៉ាស៊ីន។ ពិនិត្យ ឬស្ដារការកែប្រែពីវគ្គការងារមុនវិញបាន។",
        },
      ],
    },
    workflow: {
      eyebrow: "របៀបប្រើ",
      title: "បើកគម្រោង។ ប្រាប់ពីការងារ។ ពិនិត្យលទ្ធផល។",
      description:
        "ចាប់ផ្ដើមក្នុង Terminal ដែលអ្នកប្រើស្រាប់។ មិនចាំបាច់បង្កើតគណនី Apsara ទេ។",
      steps: [
        {
          title: "បើក Apsara ក្នុងគម្រោង",
          description:
            "ក្រោយពេលដំឡើង CLI បើកថតគម្រោងរបស់អ្នក ហើយដំណើរការ apsara ដើម្បីចាប់ផ្ដើមការសន្ទនា។",
        },
        {
          title: "ភ្ជាប់ម៉ូដែលរបស់អ្នក",
          description:
            "បញ្ចូល API key របស់អ្នកផ្ដល់សេវាម៉ូដែលនៅពេលមានសំណើ ឬជ្រើសរើសម៉ូដែល Ollama ក្នុងម៉ាស៊ីន។ អ្នកអាចប្រើ key សម្រាប់តែការសន្ទនានេះ ឬរក្សាទុកក្នុងម៉ាស៊ីន។",
        },
        {
          title: "ប្រាប់ពីការងារ និងពិនិត្យការកែប្រែ",
          description:
            "ស្នើឱ្យ Apsara ពន្យល់កូដ កែកំហុស ឬបង្កើតមុខងារថ្មី។ ពិនិត្យការកែប្រែ អនុម័តការអនុវត្ត ហើយមើលលទ្ធផលត្រួតពិនិត្យ។",
        },
      ],
    },
    install: {
      eyebrow: "ដំឡើងកំណែសាកល្បង",
      titleLead: "ដំឡើង Apsara។",
      titleHighlight: "ចាប់ផ្ដើមក្នុង Terminal។",
      description:
        "បង្កើតកញ្ចប់ដំឡើងពីកូដប្រភពនៃកំណែសាកល្បងបច្ចុប្បន្ន ដំឡើងជាមួយ pipx ហើយដំណើរការ Apsara ក្នុងថតគម្រោងរបស់អ្នក។",
      promise: "ដំណើរការក្នុងម៉ាស៊ីន · ជ្រើសរើសម៉ូដែលបាន · មិនត្រូវការគណនី Apsara",
      steps: [
        {
          number: "01",
          title: "បើកថតកូដប្រភព",
          description:
            "ទាញយកកូដប្រភព CLI ពី GitHub ហើយបើកថតនោះ។ ជំហានទាំងនេះប្រើកំណែ 0.1.0a2 ដែលបានកំណត់ក្នុង pyproject.toml។",
          command: "cd /path/to/Apsara-Agentic-Cli",
        },
        {
          number: "02",
          title: "បង្កើតកញ្ចប់ដំឡើង",
          description:
            "ក្នុងថតកូដប្រភព CLI ដំឡើងឧបករណ៍ build របស់ Python ហើយបង្កើតកញ្ចប់សម្រាប់ដំឡើង។",
          command: "python3 -m pip install build\npython3 -m build",
        },
        {
          number: "03",
          title: "ដំឡើងជាមួយ pipx",
          description:
            "ដំណើរការពាក្យបញ្ជានេះក្នុងថតកូដប្រភពដដែល។ pipx ដំឡើង Apsara ដាច់ដោយឡែកពីកញ្ចប់ដែលគម្រោងរបស់អ្នកប្រើ។",
          command:
            "pipx install ./dist/apsara_agentic-0.1.0a2-py3-none-any.whl",
        },
        {
          number: "04",
          title: "ចាប់ផ្ដើម Apsara",
          description:
            "បើកថតគម្រោង ហើយដំណើរការ apsara។ បញ្ចូល API key របស់អ្នកផ្ដល់សេវាម៉ូដែលនៅពេលមានសំណើ។",
          command: "cd /path/to/your/project\napsara",
        },
      ],
      copyLabel: "ចម្លង",
      copiedLabel: "បានចម្លង",
      requirementsTitle: "មុនពេលចាប់ផ្ដើម",
      requirements: [
        "Python 3.10 ដល់ 3.14",
        "បានដំឡើង pipx និងអាចហៅប្រើតាម PATH",
        "អាចប្រើ Git ក្នុង Terminal",
        "API key ពីអ្នកផ្ដល់សេវាម៉ូដែល ឬបានដំឡើង Ollama ក្នុងម៉ាស៊ីន",
      ],
      privacyTitle: "ដឹងថាកូដរបស់អ្នកត្រូវបានផ្ញើទៅណា។",
      privacyDescription:
        "Apsara ដំណើរការក្នុងម៉ាស៊ីនរបស់អ្នក និងភ្ជាប់ផ្ទាល់ទៅអ្នកផ្ដល់សេវាម៉ូដែលដែលអ្នកជ្រើសរើស។ សំណើមិនឆ្លងកាត់ម៉ាស៊ីនមេរបស់ Apsara ទេ។",
      privacyPoints: [
        {
          title: "រក្សាទុកក្នុងម៉ាស៊ីន ភ្ជាប់ផ្ទាល់ទៅម៉ូដែល",
          description:
            "ឯកសារគម្រោង ការសន្ទនា កំណត់ត្រា និងចំណុចស្ដារ ត្រូវបានរក្សាទុកក្នុងម៉ាស៊ីន។ នៅពេលប្រើម៉ូដែលតាមអ៊ីនធឺណិត កូដដែលពាក់ព័ន្ធត្រូវបានផ្ញើទៅអ្នកផ្ដល់សេវាដែលអ្នកជ្រើសរើស។",
        },
        {
          title: "ជ្រើសរើសរបៀបរក្សាទុក key",
          description:
            "ប្រើ API key សម្រាប់ការសន្ទនាបច្ចុប្បន្ន ឬរក្សាទុកក្នុងម៉ាស៊ីនដោយកំណត់សិទ្ធិចូលប្រើសម្រាប់តែគណនីអ្នក។ Ollama អនុញ្ញាតឱ្យអ្នកប្រើម៉ូដែលក្នុងម៉ាស៊ីនផ្ទាល់។",
        },
        {
          title: "អនុម័តមុនដំណើរការពាក្យបញ្ជា",
          description:
            "ឧបករណ៍ឯកសាររបស់ Apsara ធ្វើការតែក្នុងថតគម្រោងដែលអ្នកជ្រើសរើស។ ពាក្យបញ្ជា Terminal ដែលបានអនុម័ត ដំណើរការដោយប្រើសិទ្ធិគណនីរបស់អ្នក។",
        },
      ],
      githubLabel: "មើលកូដប្រភព",
      releasesLabel: "មើលកំណែចេញផ្សាយ",
    },
    behind: {
      eyebrow: "រឿងរ៉ាវរបស់ Apsara",
      title: "ស្គាល់តួអង្គ និងអ្នកបង្កើត Apsara។",
      description:
        "សិល្បៈដែលបំផុសគំនិតពីខ្មែរ និងការងាររបស់អ្នកអភិវឌ្ឍន៍ ជាផ្នែកនៃអត្តសញ្ញាណរបស់ Apsara។",
      mascot: {
        eyebrow: "តួអង្គតំណាង",
        title: "ស្គាល់ Makor",
        description:
          "Makor ជាតួអង្គតំណាងឱ្យជំនួយការសរសេរកូដរបស់ Apsara។ តួអង្គមករបែប pixel នេះបំផុសគំនិតពីសិល្បៈខ្មែរ ដោយមានក្បាលលម្អពណ៌មាស ប្រមោយកោង និងភ្នែកពណ៌ខៀវ។",
        activityDescription:
          "ពេលអ្នកធ្វើការលើកូដ Makor បង្ហាញនៅក្បែរសកម្មភាពបច្ចុប្បន្ន ខណៈ Apsara កំពុងគិត ប្រើឧបករណ៍ ឬរង់ចាំការអនុម័តពីអ្នក។",
        imageAlt: "Makor ជាតួអង្គមករបែប pixel ពណ៌មាស មានប្រមោយកោង និងភ្នែកពណ៌ខៀវ",
        caption: "បំផុសគំនិតពីសិល្បៈខ្មែរ បង្កើតជារូបរាង pixel។",
        motionLabel: "ចង់ឱ្យ Makor នៅស្ងៀម?",
      },
      developer: {
        eyebrow: "អ្នកអភិវឌ្ឍន៍",
        name: "Bondeth",
        role: "អ្នកអភិវឌ្ឍន៍ Apsara Agentic",
        description:
          "Bondeth បង្កើត Apsara Agentic ដោយរួមបញ្ចូលឧបករណ៍សរសេរកូដក្នុងម៉ាស៊ីន និងអត្តសញ្ញាណដែលបំផុសគំនិតពីសិល្បៈខ្មែរ ទៅក្នុង Terminal។",
        invitation:
          "ស្វែងយល់ពីកូដប្រភព តាមដានការអភិវឌ្ឍ ឬចែករំលែកគំនិតរបស់អ្នកនៅលើ GitHub។",
        profileLabel: "មើលប្រវត្តិរូប GitHub",
        sourceLabel: "ស្វែងយល់ពីកូដប្រភព",
      },
    },
    cta: {
      eyebrow: "ចាប់ផ្ដើមប្រើ",
      titleLead: "ចាប់ផ្ដើមការងារបន្ទាប់",
      titleHighlight: "ជាមួយ Apsara។",
      titleTail: "",
      description:
        "ដំឡើង CLI ភ្ជាប់ម៉ូដែល ហើយចាប់ផ្ដើមដោយកែកំហុស បង្កើតមុខងារថ្មី ឬសួរសំណួរអំពីកូដរបស់អ្នក។",
      primaryCta: "ដំឡើង Apsara",
      secondaryCta: "មើលសមត្ថភាព",
    },
    footer: {
      description:
        "ជំនួយការ AI សម្រាប់សរសេរកូដក្នុង Terminal។ ធ្វើការលើគម្រោងរបស់អ្នក ជ្រើសរើសម៉ូដែល និងសម្រេចលើការកែប្រែដោយខ្លួនឯង។",
      sections: [
        {
          title: "មើលបន្ថែម",
          links: [
            {
              href: "/install",
              label: "ដំឡើង",
            },
            {
              href: "/product",
              label: "អំពី Apsara",
            },
            {
              href: "/capabilities",
              label: "សមត្ថភាព",
            },
            {
              href: "/workflow",
              label: "របៀបប្រើ",
            },
          ],
        },
        {
          title: "កូដប្រភព",
          links: [
            { label: "GitHub", href: siteRoutes.github },
            { label: "កំណែចេញផ្សាយ", href: siteRoutes.releases },
          ],
        },
      ],
      copyright: "បង្កើតសម្រាប់ Terminal របស់អ្នក។",
    },
  },
} satisfies Record<LandingLocale, LandingCopy>;
