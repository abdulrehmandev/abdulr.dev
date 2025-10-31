type Work = {
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  content?: {
    images: { label: string; src: string }[];
    description: string;
    slug: string;
  };
  date?: Date;
  industry?: string[];
  client?: string;
  featured?: boolean;
};

export const allWork: Record<string, Work> = {
  einwelt: {
    title: "Einwelt",
    description: "A german learning chat bot built with OpenAI",
    coverImage:
      "https://images.ctfassets.net/kftzwdyauwt9/6bU3sUQ4xHv1r7eyHJxaWO/868bcc4d42d2c06d406ada5b20a44237/Apps_in_ChatGPT.png?w=1920&q=90&fm=webp",
    tags: ["OpenAI"],
    date: new Date("2024-08-01"),
    content: {
      description: "beaosd",
      images: [],
      slug: "einwelt",
    },
  },
  developersworld: {
    title: "DevelopersWorld",
    description: "A german learning chat bot built with OpenAI",
    coverImage:
      "https://images.ctfassets.net/kftzwdyauwt9/6bU3sUQ4xHv1r7eyHJxaWO/868bcc4d42d2c06d406ada5b20a44237/Apps_in_ChatGPT.png?w=1920&q=90&fm=webp",
    tags: ["OpenAI"],
    date: new Date("2024-08-01"),
  },
  nypedicab: {
    title: "NY Pedicab",
    description: "A german learning chat bot built with OpenAI",
    coverImage:
      "https://images.ctfassets.net/kftzwdyauwt9/6bU3sUQ4xHv1r7eyHJxaWO/868bcc4d42d2c06d406ada5b20a44237/Apps_in_ChatGPT.png?w=1920&q=90&fm=webp",
    tags: ["OpenAI"],
    date: new Date("2024-08-01"),
  },
  qwesty: {
    title: "Qwesty",
    description: "A german learning chat bot built with OpenAI",
    coverImage:
      "https://images.ctfassets.net/kftzwdyauwt9/6bU3sUQ4xHv1r7eyHJxaWO/868bcc4d42d2c06d406ada5b20a44237/Apps_in_ChatGPT.png?w=1920&q=90&fm=webp",
    tags: ["OpenAI"],
    date: new Date("2024-08-01"),
  },
};
