import type { TreeViewElement } from "@/components/ui/file-tree"

/**
 * Temporary portfolio copy.
 * Swap the strings in this file when the real bio, work, and links are ready.
 */

export const profile = {
  name: "Alex Rivera",
  handle: "alex",
  role: "design engineer",
  location: "working remotely",
  email: "alex.rivera@example.com",
  tagline:
    "I design and build interfaces that feel calm in the hand, and quick when the day gets busy.",
  roles: ["design engineer", "product designer", "interface maker"],
  stats: [
    { label: "years", value: 6 },
    { label: "projects", value: 18 },
    { label: "talks", value: 4 },
  ],
}

export const stack = [
  "TypeScript",
  "React",
  "Astro",
  "Node",
  "Postgres",
  "Rust",
  "WebGL",
  "CSS",
]

export type Role = {
  id: string
  file: string
  org: string
  title: string
  when: string
  summary: string
  notes: string[]
}

export const roles: Role[] = [
  {
    id: "exp-abai",
    file: "AutobotAI",
    org: "Northwind Labs",
    title: "Senior design engineer",
    when: "2024 — now",
    summary: "Led the console used by operators to watch a fleet of sensors.",
    notes: [
      "Rebuilt the live map so 2k markers stay at 60fps.",
      "Designed a keyboard-first command palette the night shift actually uses.",
      "Cut dashboard load from 4.8s to 900ms.",
    ],
  },
  {
    id: "exp-scc",
    file: "St. Claret College",
    org: "Lumen Transit",
    title: "Product engineer",
    when: "2021 — 2024",
    summary: "Shipped the rider and dispatcher apps for a regional transit tool.",
    notes: [
      "Owned the trip-planning UI from sketch to production.",
      "Introduced a shared design token pipeline across web and kiosk.",
      "Mentored two juniors through their first production releases.",
    ],
  },
]

export type Project = {
  id: string
  file: string
  name: string
  year: string
  status: string
  summary: string
  stack: string[]
  featured?: boolean
  href: string
  /** Drop a picture path here, for example "/projects/orbit.jpg". */
  image?: string
}

export const projects: Project[] = [
  {
    id: "proj-orbit",
    file: "Orbit Desk",
    name: "Orbit Desk",
    year: "2025",
    status: "in progress",
    summary:
      "A scheduling desk for small teams. Days are a grid, meetings are blocks you can throw.",
    stack: ["TypeScript", "React", "Postgres"],
    featured: true,
    href: "https://example.com/orbit",
  },
  {
    id: "proj-cassette",
    file: "Cassette",
    name: "Cassette",
    year: "2024",
    status: "shipped",
    summary:
      "A listening room in the browser. Drop in a song and the artwork moves with it.",
    stack: ["Web Audio", "Canvas", "Vite"],
    href: "https://example.com/cassette",
  },
  {
    id: "proj-signal",
    file: "Signal Board",
    name: "Signal Board",
    year: "2023",
    status: "shipped",
    summary:
      "A status page written in plain language, so people can see what is happening without decoding a chart.",
    stack: ["Astro", "SQLite"],
    href: "https://example.com/signal",
  },
]

export const skills = {
  languages: ["TypeScript", "JavaScript", "Rust", "SQL", "CSS"],
  interface: ["React", "Astro", "accessibility", "motion", "design systems"],
  tools: ["Git", "Postgres", "Linux", "Figma", "Bun"],
}

export const now = [
  { when: "Nov", text: "Shaping this portfolio, and leaving room for the real story." },
  { when: "Oct", text: "Sketching a calmer way to plan the week in Orbit Desk." },
  { when: "Aug", text: "Collecting references from old print and quiet interfaces." },
]

export type Achievement = {
  id: string
  title: string
  year: string
  detail: string
  /** Replace the file in public/achievements, or point this at your own image. */
  image: string
}

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Achievement title",
    year: "2025",
    detail: "Replace this note with what the picture is about.",
    image: "/achievements/01.svg",
  },
  {
    id: "ach-2",
    title: "Achievement title",
    year: "2024",
    detail: "Replace this note with what the picture is about.",
    image: "/achievements/02.svg",
  },
  {
    id: "ach-3",
    title: "Achievement title",
    year: "2024",
    detail: "Replace this note with what the picture is about.",
    image: "/achievements/03.svg",
  },
  {
    id: "ach-4",
    title: "Achievement title",
    year: "2023",
    detail: "Replace this note with what the picture is about.",
    image: "/achievements/04.svg",
  },
  {
    id: "ach-5",
    title: "Achievement title",
    year: "2022",
    detail: "Replace this note with what the picture is about.",
    image: "/achievements/05.svg",
  },
  {
    id: "ach-6",
    title: "Achievement title",
    year: "2021",
    detail: "Replace this note with what the picture is about.",
    image: "/achievements/06.svg",
  },
]

export const socials = [
  { id: "gh", label: "GitHub", name: "GitHub", href: "https://github.com" },
  { id: "in", label: "LinkedIn", name: "LinkedIn", href: "https://www.linkedin.com" },
  {
    id: "mail",
    label: "Email",
    name: "Email",
    href: "mailto:alex.rivera@example.com",
  },
]

export const tree: TreeViewElement[] = [
  {
    id: "portfolio",
    name: "src",
    type: "folder",
    children: [
      { id: "readme", name: "Intro" },
      {
        id: "experience",
        name: "Work",
        type: "folder",
        children: roles.map((role) => ({ id: role.id, name: role.file })),
      },
      {
        id: "projects",
        name: "Selected",
        type: "folder",
        children: projects.map((project) => ({
          id: project.id,
          name: project.file,
        })),
      },
      { id: "achievements", name: "Achievements" },
      { id: "skills", name: "Practice" },
      { id: "now", name: "Lately" },
    ],
  },
]

const index = new Map<string, TreeViewElement>()

function walk(nodes: TreeViewElement[]) {
  for (const node of nodes) {
    index.set(node.id, node)
    if (node.children) walk(node.children)
  }
}

walk(tree)

export function findNode(id: string) {
  return index.get(id)
}

export function isFolder(id: string) {
  const node = index.get(id)
  return node?.type === "folder" || Boolean(node?.children?.length)
}

export function pathTo(id: string): TreeViewElement[] {
  const trail: TreeViewElement[] = []

  function search(nodes: TreeViewElement[]): boolean {
    for (const node of nodes) {
      trail.push(node)
      if (node.id === id) return true
      if (node.children && search(node.children)) return true
      trail.pop()
    }
    return false
  }

  search(tree)
  return trail
}

export const defaultFileId = "readme"

export const expandedFolders = ["portfolio", "experience", "projects"]
