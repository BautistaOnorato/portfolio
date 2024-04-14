import {
  AmazonWebServicesIcon,
  AstroIcon,
  CSSIcon,
  DockerIcon,
  ExpressJsIcon,
  FigmaIcon,
  GitIcon,
  GolangIcon,
  HTMLIcon,
  JavaIcon,
  JavaScriptIcon,
  MongoDBIcon,
  MySQLIcon,
  NestJsIcon,
  NextJsIcon,
  NodeJsIcon,
  PostgresIcon,
  PrismaIcon,
  ReactIcon,
  SpringBootIcon,
  StripeIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../icons/skills";

export type Skill = {
  name: string;
  icon: (size: number) => JSX.Element;
};

export const astro: Skill = {
  name: "Astro",
  icon: (size) => <AstroIcon size={size} />,
};

export const aws: Skill = {
  name: "AWS",
  icon: (size) => <AmazonWebServicesIcon size={size} />,
};

export const css: Skill = {
  name: "CSS",
  icon: (size) => <CSSIcon size={size} />,
};

export const docker: Skill = {
  name: "Docker",
  icon: (size) => <DockerIcon size={size} />,
};

export const express: Skill = {
  name: "Express.js",
  icon: (size) => <ExpressJsIcon size={size} />,
};

export const figma: Skill = {
  name: "Figma",
  icon: (size) => <FigmaIcon size={size} />,
};

export const git: Skill = {
  name: "Git",
  icon: (size) => <GitIcon size={size} />,
};

export const go: Skill = {
  name: "Go",
  icon: (size) => <GolangIcon size={size} color="#08AFD8" />,
};

export const html: Skill = {
  name: "HTML",
  icon: (size) => <HTMLIcon size={size} />,
};

export const java: Skill = {
  name: "Java",
  icon: (size) => <JavaIcon size={size} />,
};

export const javascript: Skill = {
  name: "JavaScript",
  icon: (size) => <JavaScriptIcon size={size} />,
};

export const mongodb: Skill = {
  name: "MongoDB",
  icon: (size) => <MongoDBIcon size={size} />,
};

export const mysql: Skill = {
  name: "MySQL",
  icon: (size) => <MySQLIcon size={size} />,
};

export const nestjs: Skill = {
  name: "Nest.js",
  icon: (size) => <NestJsIcon size={size} />,
};

export const nextjs: Skill = {
  name: "Next.js",
  icon: (size) => <NextJsIcon size={size} />,
};

export const nodejs: Skill = {
  name: "Node.js",
  icon: (size) => <NodeJsIcon size={size} />,
};

export const postgersql: Skill = {
  name: "PostgreSQL",
  icon: (size) => <PostgresIcon size={size} />,
};

export const prisma: Skill = {
  name: "PrismaDB",
  icon: (size) => <PrismaIcon size={size} />,
};

export const react: Skill = {
  name: "React",
  icon: (size) => <ReactIcon size={size} />,
};

export const springboot: Skill = {
  name: "Spring Boot",
  icon: (size) => <SpringBootIcon size={size} />,
};

export const stripe: Skill = {
  name: "Stripe",
  icon: (size) => <StripeIcon size={size} />,
};

export const tailwind: Skill = {
  name: "Talwind CSS",
  icon: (size) => <TailwindIcon size={size} />,
};

export const typescript: Skill = {
  name: "TypeScript",
  icon: (size) => <TypescriptIcon size={size} />,
};

export const SkillsFront: Skill[] = [
  html,
  css,
  javascript,
  react,
  tailwind,
  nextjs,
  typescript,
  astro,
  figma,
] 

export const SkillsBack: Skill[] = [
  mongodb,
  mysql,
  postgersql,
  nodejs,
  git,
  java,
  springboot,
  go,
  docker,
  aws
];
