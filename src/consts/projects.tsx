import { astro, aws, css, figma, go, mysql, nextjs, react, springboot, stripe, tailwind, typescript, type Skill } from "./skills"

export type Project = {
  name: string
  description: string
  descriptionEN: string
  extraDescription?: string
  extraDescriptionEN?: string
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
    name: "Hay algo ahí",
    description: "Página con toda la información acerca de la primera temporada del programa de streaming Hay algo ahí.",
    descriptionEN: "Page with all the information about the first season of the streaming show Hay algo ahí.",
    extraDescription: "Esta página fue realizada utilizando Astro como framework principal, aprovechando su eficiencia para generar contenido estático. Se utilizó React en los componentes que requieren interacción con el usuario, permitiendo una experiencia dinámica sin sacrificar el rendimiento.",
    extraDescriptionEN: "This site was built with Astro as the core framework to deliver fast, static content. React was integrated for components that involve user interaction, ensuring a smooth and dynamic user experience.",
    website: "https://estoeshaa.vercel.app/",
    frontendRepo: "https://github.com/BautistaOnorato/HAA",
    skills: [css, astro, react, typescript, figma],
    desktopImage: "/img/haa-desktop.webp",
    tabletImage: "/img/haa-tablet.webp",
    mobileImage: "/img/haa-mobile.webp"
  },
  {
    name: "DiceLogger",
    description: "DiceLogger es una aplciación de gestión de campañas y personajes de Dungeons & Dragons.",
    descriptionEN: "DiceLogger is a campaign and character management application for Dungeons & Dragons.",
    extraDescription: "Además, Dicelogger permite a sus usuarios suscribirse para obtener contenido exclusivo, agregar amigos dentro de la aplicación y compartir las campañas.",
    extraDescriptionEN: "In addition, Dicelogger allows its users to subscribe to obtain exclusive content, add friends within the application, and share campaigns.",
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
    descriptionEN: "RoomRover is a platform for booking accommodations developed with Next.js and Java Spring Boot.",
    extraDescription: "Permite a los usuarios registrados realizar reservas y agregar productos a sus favoritos.",
    extraDescriptionEN: "It allows registered users to make reservations and manage favorite products.",
    website: "https://lodging-front.vercel.app/",
    frontendRepo: "https://github.com/BautistaOnorato/LodgingFront",
    backendRepo: "https://github.com/BautistaOnorato/LodgingProyect",
    skills: [nextjs, typescript, mysql, tailwind, springboot],
    desktopImage: "/img/roomrover-desktop.webp",
    tabletImage: "/img/roomrover-tablet.webp",
    mobileImage: "/img/roomrover-mobile.webp"
  },

]