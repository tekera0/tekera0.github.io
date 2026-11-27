// Single source of truth. To add a project: copy one object, edit it, save, push.
// Leave `github` or `demo` as "" to hide that button. Leave `image` as "" for a colored placeholder.
const projects = [
  {
    title: "KAVACH",
    tagline: "Local-first, privacy-preserving AI verification system.",
    details: "Built for the ASYNC'26 hackathon (Track 1). Write 2-3 sentences here: the problem, how it works, what you built.",
    category: "AI & Agents",
    featured: true,
    impact: "ASYNC'26 hackathon", // put your result/award here
    tech: ["Python", "FastAPI", "React", "SQLite", "Ollama"],
    image: "",
    github: "https://github.com/tekera0/kavach",
    demo: ""
  },
  {
    title: "RGB Color Game",
    tagline: "Mobile game where you identify colors from their RGB values.",
    details: "A Flutter/Dart game that shows a color and challenges you to match its RGB values. Add what you learned or how scoring works.",
    category: "Mobile",
    featured: true,
    impact: "",
    tech: ["Flutter", "Dart"],
    image: "",
    github: "https://github.com/tekera0/rgb-color-game",
    demo: ""
  },
  {
    title: "Student Productivity App",
    tagline: "Cross-platform app combining live weather with task management.",
    details: "A Flutter/Dart app that pairs a weather view with a task list for students. Add the APIs and features you used.",
    category: "Mobile",
    featured: true,
    impact: "",
    tech: ["Flutter", "Dart"],
    image: "",
    github: "https://github.com/tekera0/student-productivity-app",
    demo: ""
  },
  {
    title: "Session Log Analytics",
    tagline: "Analyzes website login behavior with relational schemas and SQL.",
    details: "Designed database schemas and queries to study how users log in. Add the key findings or queries you are proud of.",
    category: "Data",
    featured: false,
    impact: "",
    tech: ["SQL"],
    image: "",
    github: "https://github.com/tekera0/session-log-analytics",
    demo: ""
  }
  // Add OmniCheck, Aegis EDR, your Security Gateway, etc. here.
];