import { Icons } from "./components/icons";

export const data = {
    contact: {
        email: 'hello@abdulr.dev',
        consultation: 'https://cal.com/abdulrdev/consultation'
    },
    socials: {
        github: 'https://github.com/abdulrehmandev',
        linkedin: "https://www.linkedin.com/in/abdulrdev/",
        x: 'https://twitter.com/iiiabdulrehman',
    }
} as const


export const socials = {
    x: {
        url: data.socials.x,
        icon: Icons.x,
    },
    github: {
        url: data.socials.github,
        icon: Icons.github,
    },
    linkedin: {
        url: data.socials.linkedin,
        icon: Icons.linkedin,
    },
};