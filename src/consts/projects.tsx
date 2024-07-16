import { aws, figma, go, mysql, nextjs, springboot, stripe, tailwind, typescript, type Skill } from "./skills"

export type Project = {
  name: string
  description: string
  extraDescription?: string
  website: string
  frontendRepo?: string
  backendRepo?: string
  skills: Skill[]
  desktopImage: string
  tabletImage: string
  mobileImage: string
}

export const PROJECTS: Project[] = [
  {
    name: "DiceLogger",
    description: "DiceLogger es una aplciación de gestión de campañas y personajes de Dungeons & Dragons.",
    extraDescription: "Además, Dicelogger permite a sus usuarios suscribirse para obtener contenido exclusivo y agregar amigos dentro de la aplicación.",
    website: "https://dicelogger.vercel.app/landing",
    frontendRepo: "https://github.com/proyecto-dnd/frontend",
    backendRepo: "https://github.com/proyecto-dnd/backend",
    skills: [nextjs, go, aws, mysql, typescript, figma, stripe],
    desktopImage: "/img/dicelogger-desktop.webp",
    tabletImage: "/img/dicelogger-tablet.webp",
    mobileImage: "/img/dicelogger-mobile.webp"
  },
  {
    name: "RoomRover",
    description: "RoomRover es una plataforma para reservar alojamientos desarrollada con Next.js y Java Spring Boot.",
    extraDescription: "Permite a los usuarios registrados realizar reservas y agregar productos a sus favoritos.",
    website: "https://lodging-front.vercel.app/",
    frontendRepo: "https://github.com/BautistaOnorato/LodgingFront",
    backendRepo: "https://github.com/BautistaOnorato/LodgingProyect",
    skills: [nextjs, typescript, mysql, tailwind, springboot],
    desktopImage: "/img/roomrover-desktop.webp",
    tabletImage: "/img/roomrover-tablet.webp",
    mobileImage: "/img/roomrover-mobile.webp"
  },

]