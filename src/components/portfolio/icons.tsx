import type { SVGProps } from "react"
import type { IconType } from "react-icons"
import { FaLinkedin } from "react-icons/fa"
import {
  LuAccessibility,
  LuAudioLines,
  LuAward,
  LuBox,
  LuBriefcase,
  LuCircle,
  LuClock,
  LuDatabase,
  LuFileText,
  LuFolder,
  LuLayers,
  LuLayoutGrid,
  LuMail,
  LuSparkles,
  LuUser,
} from "react-icons/lu"
import {
  SiAstro,
  SiBun,
  SiCanvas,
  SiCss,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRust,
  SiSqlite,
  SiTypescript,
  SiVite,
  SiWebgl,
} from "react-icons/si"

type MarkProps = SVGProps<SVGSVGElement> & { icon: IconType }

function Mark({ icon: Icon, ...props }: MarkProps) {
  return <Icon aria-hidden {...props} />
}

const nodeIcons: Record<string, IconType> = {
  portfolio: LuFolder,
  readme: LuUser,
  experience: LuBriefcase,
  projects: LuLayers,
  skills: LuSparkles,
  now: LuClock,
  achievements: LuAward,
}

export function NodeIcon({
  id,
  ...props
}: SVGProps<SVGSVGElement> & { id: string }) {
  const icon = id.startsWith("exp-")
    ? LuFileText
    : id.startsWith("proj-")
      ? LuBox
      : (nodeIcons[id] ?? LuCircle)
  return <Mark icon={icon} {...props} />
}

const stackIcons: Record<string, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  react: SiReact,
  astro: SiAstro,
  node: SiNodedotjs,
  postgres: SiPostgresql,
  rust: SiRust,
  webgl: SiWebgl,
  css: SiCss,
  sql: LuDatabase,
  git: SiGit,
  linux: SiLinux,
  figma: SiFigma,
  bun: SiBun,
  canvas: SiCanvas,
  vite: SiVite,
  sqlite: SiSqlite,
  "web audio": LuAudioLines,
  motion: SiFramer,
  accessibility: LuAccessibility,
  "design systems": LuLayoutGrid,
}

export function StackIcon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: string }) {
  return <Mark icon={stackIcons[name.toLowerCase()] ?? LuCircle} {...props} />
}

const socialIcons: Record<string, IconType> = {
  gh: SiGithub,
  in: FaLinkedin,
  mail: LuMail,
}

export function SocialIcon({
  id,
  ...props
}: SVGProps<SVGSVGElement> & { id: string }) {
  return <Mark icon={socialIcons[id] ?? LuCircle} {...props} />
}
