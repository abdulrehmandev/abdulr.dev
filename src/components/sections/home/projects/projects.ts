export type ProjectType = {
    image: string;
    title: string;
    type?: string;
    url?: string;
    description?: string
}

export type TestimonialType = {
    content: string;
    name: string;
    title?: string;
    company: string;
    avatar?: string;
}


export const Projects: Record<string, ProjectType> = {
    myTpen: {
        image: "/images/projects/mytpen.jpg",
        title: "myTpen",
        type: "Ed-Tech Products Suite",
        url: "https://mytpen.app",
    },
    sdk: {
        image: "/images/projects/sdk.jpg",
        title: "Custom SDKs",
        description: "Custom SDKs for iOS and Android",
    },
    truematch: {
        image: "/images/projects/truematch.jpg",
        title: "TrueMatch",
        type: "Website Development",
    },
    customWorkflows: {
        image: "/images/projects/customWorkflows.jpg",
        title: "Custom Workflows",
    },
    hellodrew: {
        image: "/images/projects/hellodrew.jpg",
        title: "HelloDrew AI",
        type: "Real Estate AI Assistant",
        url: "https://hellodrew.ai",
    },
    ngpt: {
        image: "/images/projects/ngpt.jpg",
        title: "NotesGPT",
        type: "AI SaaS Product",
        url: "https://notesgpt.mytpen.app",
    },
    iena: {
        image: "/images/projects/iena.jpg",
        title: "Recommendation Engine",
    },
}