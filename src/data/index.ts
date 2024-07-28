import { IconProps } from "@/components";

export const DayIStarted = "2021-07-01";

export const PrimaryColors = [
  "11 100% 64%",
  "120 100% 60%",
  "220 100% 60%",
  "330 100% 64%",
  "265 100% 64%",
];

export const MailLink = "mailto:beingabdulr@gmail.com";
export const GithubLink = "https://github.com/abdulrehmandev";
export const ConsultationLink = "https://cal.com/abdulrdev/consultations";
export const PortfolioRepoLink = "https://github.com/abdulrehmandev/abdulr.dev";

export const SocialLinks: {
  label: string;
  href: string;
  icon: IconProps["name"];
}[] = [
  { label: "Email", href: MailLink, icon: "mail" },
  { label: "GitHub", href: GithubLink, icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdulrdev",
    icon: "linkedin",
  },
  { label: "Twitter", href: "https://x.com/iiiabdulrehman", icon: "twitter" },
  {
    label: "Instagram",
    href: "https://instagram.com/iiiabdulrehman",
    icon: "instagram",
  },
];

export const TestimonialsList = [
  {
    name: "Shariq Ansar",
    title: "Founder, myTpen",
    quote: "Glad I found you..Shukriya to Allah again",
  },
  {
    name: "David Mancusi",
    title: "Techinical Manager, Ability Beyond",
    quote:
      "Abdul, you have done an incredible job, and the whole team is amazed by your skills.",
  },
];

export const Projects: {
  title: string;
  href?: string;
  description: string;
  image: string;
  skills?: string[];
  imageClassName?: string;
}[] = [
  {
    title: "NotesGPT",
    href: "https://github.com/abdulrehmandev/notes-gpt",
    description:
      "Chat with your notes effectively. Easily access and organize your notes with our AI assistant. Enhance your workflow with NotesGPT.",
    image: "/static/images/projects/ngpt.png",
    imageClassName: "object-contain px-8 md:p-3",
    skills: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    title: "Einwelt",
    href: "https://einwelt.com",
    description:
      "AI for users to learn German through engaging, AI-powered conversations like ChatGPT.",
    image: "/static/images/projects/einwelt.jpeg",
    skills: ["Next.js", "TypeScript", "Firebase", "OpenAI"],
  },
  {
    title: "Abiltiy Beyond",
    description:
      "Staff and Patients management application to analyze and visualize data. Easy access for staff to manage their shifts and patients.",
    image: "/static/images/projects/ability-beyond.jpeg",
    skills: ["React", "TypeScript", "Prisma", "Chart.js"],
  },
  {
    title: "myTpen",
    href: "https://mytpen.app",
    description:
      "Grade paper-based assignments, digital assignments, leave personalized comments, track student progress, all on one platform",
    image: "/static/images/projects/mytpen.jpeg",
    skills: ["React", "Tailwind CSS"],
  },
];

export const ExperienceList: {
  company: string;
  role: string;
  timeline: string;
  description?: string;
  coreSkills: string[];
  companyLink?: string;
}[] = [
  {
    company: "Instantly Creative",
    role: "Junior UI Developer",
    timeline: "May 2024 — Present",
    description:
      "Developed and maintained a real estate web app, collaborating closely with team members to create user interfaces and style components with enhanced functionality.",
    coreSkills: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    companyLink: "https://www.instantlycreative.com/",
  },
  {
    company: "Upwork",
    role: "Top Rated Freelance Developer",
    timeline: "Aug 2023 — Present",
    description:
      "Built web applications from scratch, maintained existing projects, and provided solutions for clients across various time zones.",
    coreSkills: [
      "React",
      "Prisma",
      "tRPC",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "SQL",
      "Node.js",
    ],
    companyLink: "https://www.upwork.com",
  },
  {
    company: "Ability Beyond",
    role: "Full Stack Developer",
    description:
      "Created and maintained a staff and patient management application to analyze and visualize data, providing easy access for staff to manage their shifts and patients.",
    timeline: "Sep 2023 — Mar 2024",
    coreSkills: ["Next.js", "Prisma", "Chart.js", "Salesforce"],
    companyLink: "https://abilitybeyond.org/",
  },
];
