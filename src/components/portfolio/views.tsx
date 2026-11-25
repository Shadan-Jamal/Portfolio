import { useEffect, useState, type ReactNode } from "react"
import { motion } from "motion/react"

import { BorderBeam } from "@/components/ui/border-beam"
import { Dock, DockIcon } from "@/components/ui/dock"
import { HyperText } from "@/components/ui/hyper-text"
import { MagicCard } from "@/components/ui/magic-card"
import { Marquee } from "@/components/ui/marquee"
import { NumberTicker } from "@/components/ui/number-ticker"
import { RetroGrid } from "@/components/ui/retro-grid"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation as TerminalLine,
} from "@/components/ui/terminal"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { AnimatedList } from "@/components/ui/animated-list"
import { SocialIcon, StackIcon } from "@/components/portfolio/icons"
import {
  achievements,
  findNode,
  now,
  profile,
  projects,
  roles,
  skills,
  socials,
  stack,
  type Achievement,
  type Project,
  type Role,
} from "@/data/portfolio"

type Open = (id: string) => void

function Buffer({
  children,
  wide = false,
}: {
  children: ReactNode
  wide?: boolean
}) {
  return (
    <div
      className={`mx-auto flex w-full flex-col gap-8 px-4 py-6 md:px-8 md:py-8 ${
        wide ? "max-w-5xl" : "max-w-3xl"
      }`}
    >
      {children}
    </div>
  )
}

function Comment({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground text-sm leading-relaxed">{children}</p>
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-primary text-xs tracking-[0.18em] uppercase">{children}</p>
  )
}

function ReadmeView() {
  return (
    <Buffer>
      <div className="hero-grid border-border relative isolate h-72 overflow-hidden rounded-2xl border md:h-80">
        <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-6 md:p-8">
          <HyperText
            as="p"
            className="text-primary text-xs font-normal tracking-[0.18em]"
            startOnView={false}
            animateOnHover
            duration={700}
          >
            {profile.location}
          </HyperText>
          <h1 className="font-heading text-5xl leading-none font-light tracking-tight md:text-7xl">
            {profile.name}
          </h1>
          <TypingAnimation
            words={profile.roles}
            loop
            cursorStyle="line"
            className="font-heading text-primary text-xl italic md:text-2xl"
            typeSpeed={70}
            deleteSpeed={40}
            pauseDelay={1400}
          />
          <p className="max-w-md text-sm leading-relaxed md:text-base">
            {profile.tagline}
          </p>
        </div>
        <RetroGrid
          angle={68}
          cellSize={56}
          opacity={0.35}
          lightLineColor="#b8885a"
          darkLineColor="#b8885a"
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="px-1 py-2">
            <NumberTicker
              value={stat.value}
              className="font-heading text-foreground text-4xl font-light"
            />
            <p className="text-muted-foreground mt-1 text-xs tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <Marquee pauseOnHover className="[--duration:32s]">
        {stack.map((item) => (
          <span
            key={item}
            className="text-muted-foreground flex items-center gap-2 px-4 text-sm"
          >
            <StackIcon name={item} className="size-4" />
            {item}
          </span>
        ))}
      </Marquee>

      <div className="max-w-xl space-y-4 text-base leading-7">
        <h2 className="font-heading text-4xl leading-tight font-light">
          A short stand-in, until the real story is ready.
        </h2>
        <p>
          {profile.name} is a {profile.role}, {profile.location}. The sentences
          here are temporary so the page has a voice while the layout settles.
        </p>
        <p>
          The work usually lives where a product meets the people using it:
          planning tools, live views, and the small gestures someone repeats
          all day. Clarity first, then a little warmth.
        </p>
        <p>
          Away from the desk: long walks, printed matter, and the occasional
          old interface that still feels considered.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-heading text-4xl font-light">Say hello.</h2>
        <Terminal
          className="border-border max-h-none max-w-none rounded-2xl bg-card"
          startOnView={false}
        >
          <TerminalLine>{`Hello, I'm ${profile.name}.`}</TerminalLine>
          <AnimatedSpan className="text-muted-foreground">
            {`A ${profile.role}, for now a placeholder.`}
          </AnimatedSpan>
          <TerminalLine>{profile.email}</TerminalLine>
          <AnimatedSpan>
            The links below are stand-ins until the real ones arrive.
          </AnimatedSpan>
        </Terminal>
        <Dock
          direction="middle"
          iconSize={46}
          iconMagnification={58}
          className="border-border bg-card/80 mt-0 rounded-full"
        >
          {socials.map((social) => (
            <DockIcon key={social.id} className="rounded-full hover:bg-accent transition-colors duration-200 ease-in">
              <a
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={social.name}
                className="text-foreground"
              >
                <SocialIcon id={social.id} className="size-8" />
              </a>
            </DockIcon>
          ))}
        </Dock>
      </div>
    </Buffer>
  )
}

function RoleCard({ role, onOpen }: { role: Role; onOpen?: Open }) {
  const body = (
    <div className="border-border bg-card w-full rounded-2xl border px-4 py-4 text-left">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-heading text-xl font-light">{role.org}</p>
        <p className="text-muted-foreground text-xs">{role.when}</p>
      </div>
      <p className="text-primary mt-1 text-sm">{role.title}</p>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        {role.summary}
      </p>
    </div>
  )

  if (!onOpen) return body

  return (
    <button type="button" className="w-full" onClick={() => onOpen(role.id)}>
      {body}
    </button>
  )
}

function ExperienceFolder({ onOpen }: { onOpen: Open }) {
  return (
    <Buffer>
      <SectionLabel>Work</SectionLabel>
      <h2 className="font-heading text-4xl font-light">Places I have worked</h2>
      <Comment>Newest first. Open a name for a longer note.</Comment>
      <AnimatedList delay={450} className="items-stretch">
        {[...roles].reverse().map((role) => (
          <RoleCard key={role.id} role={role} onOpen={onOpen} />
        ))}
      </AnimatedList>
    </Buffer>
  )
}

function ExperienceFile({ id }: { id: string }) {
  const role = roles.find((item) => item.id === id)
  if (!role) return null

  return (
    <Buffer>
      <SectionLabel>{role.when}</SectionLabel>
      <h2 className="font-heading text-4xl font-light">{role.org}</h2>
      <p className="text-primary">{role.title}</p>
      <p className="max-w-xl text-base leading-7">{role.summary}</p>
      <ul className="max-w-xl space-y-3 text-sm leading-relaxed">
        {role.notes.map((note) => (
          <li key={note} className="border-border border-l pl-4">
            {note}
          </li>
        ))}
      </ul>
    </Buffer>
  )
}

const enter = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
} as const

function ProjectRow({ project, onOpen }: { project: Project; onOpen?: Open }) {
  return (
    <li className="grid items-stretch gap-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8">
      <motion.figure
        {...enter}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="border-border relative overflow-hidden rounded-2xl border"
      >
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="aspect-[4/3] h-full w-full object-cover"
          />
        ) : (
          <div className="bg-muted text-muted-foreground flex aspect-[4/3] items-center justify-center text-sm">
            Picture
          </div>
        )}
        {project.featured ? (
          <BorderBeam
            colorFrom="#e4c4a0"
            colorTo="#8d4b32"
            size={70}
            radius={26}
            duration={8}
          />
        ) : null}
      </motion.figure>

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      >
        <MagicCard
          className="soft-magic h-full rounded-2xl"
          gradientFrom="#e4c4a088"
          gradientTo="#8d4b3266"
          gradientColor="color-mix(in oklch, var(--primary) 28%, transparent)"
          gradientOpacity={0.35}
        >
          <div className="flex h-full flex-col gap-3 p-5 text-left md:p-6">
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="text-primary">{project.status}</span>
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            {onOpen ? (
              <button
                type="button"
                onClick={() => onOpen(project.id)}
                className="font-heading text-left text-3xl font-light"
              >
                {project.name}
              </button>
            ) : (
              <h3 className="font-heading text-3xl font-light">{project.name}</h3>
            )}
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.summary}
            </p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground flex items-center gap-1.5 text-xs"
                >
                  <StackIcon name={item} className="size-3.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </MagicCard>
      </motion.div>
    </li>
  )
}

function ProjectsFolder({ onOpen }: { onOpen: Open }) {
  return (
    <Buffer wide>
      <SectionLabel>Selected</SectionLabel>
      <h2 className="font-heading text-4xl font-light">A few recent pieces</h2>
      <ol className="space-y-12">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} onOpen={onOpen} />
        ))}
      </ol>
    </Buffer>
  )
}

function ProjectFile({ id }: { id: string }) {
  const project = projects.find((item) => item.id === id)
  if (!project) return null

  return (
    <Buffer wide>
      <SectionLabel>{project.year}</SectionLabel>
      <ol>
        <ProjectRow project={project} />
      </ol>
      <a
        className="text-primary w-fit text-sm underline decoration-primary/30 underline-offset-4"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        Visit {project.name}
      </a>
    </Buffer>
  )
}

const skillGroups = [
  { title: "Languages", items: skills.languages },
  { title: "Interfaces", items: skills.interface },
  { title: "Everyday", items: skills.tools },
]

function SkillsView() {
  return (
    <Buffer>
      <SectionLabel>Practice</SectionLabel>
      <h2 className="font-heading text-4xl font-light">What I reach for</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <p className="text-primary text-sm">{group.title}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <StackIcon name={item} className="text-primary size-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Marquee reverse pauseOnHover className="[--duration:36s]">
        {Object.values(skills)
          .flat()
          .map((item) => (
            <span
              key={item}
              className="text-muted-foreground flex items-center gap-2 px-4 text-sm"
            >
              <StackIcon name={item} className="size-4" />
              {item}
            </span>
          ))}
      </Marquee>
    </Buffer>
  )
}

function NowView() {
  return (
    <Buffer>
      <SectionLabel>Lately</SectionLabel>
      <h2 className="font-heading text-4xl font-light">What is on the desk</h2>
      <ul className="max-w-xl space-y-5">
        {now.map((entry) => (
          <li key={entry.when} className="grid grid-cols-[3.5rem_1fr] gap-4">
            <span className="text-primary text-sm">{entry.when}</span>
            <span className="text-sm leading-relaxed">{entry.text}</span>
          </li>
        ))}
      </ul>
    </Buffer>
  )
}

function shiftBy<T>(items: T[], amount: number) {
  const index = amount % items.length
  return [...items.slice(index), ...items.slice(0, index)]
}

function AchievementColumn({
  items,
  duration,
  reverse = false,
  className = "",
  onOpen,
}: {
  items: Achievement[]
  duration: string
  reverse?: boolean
  className?: string
  onOpen: (item: Achievement) => void
}) {
  return (
    <Marquee
      vertical
      reverse={reverse}
      pauseOnHover
      repeat={2}
      className={`h-full p-0 [--gap:0.75rem] ${duration} ${className}`}
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onOpen(item)}
          className="border-border block w-full overflow-hidden rounded-2xl border"
        >
          <img
            src={item.image}
            alt={item.title}
            className="aspect-[3/4] w-full object-cover"
          />
        </button>
      ))}
    </Marquee>
  )
}

function AchievementsView() {
  const [open, setOpen] = useState<Achievement | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <Buffer wide>
      <SectionLabel>Achievements</SectionLabel>
      <h2 className="font-heading text-4xl font-light">A wall of moments</h2>
      <Comment>The pictures and notes are placeholders. Click one to read it.</Comment>
      <div className="grid h-[68vh] grid-cols-2 gap-3 overflow-hidden sm:grid-cols-3">
        <AchievementColumn
          items={achievements}
          duration="[--duration:58s]"
          onOpen={setOpen}
        />
        <AchievementColumn
          items={shiftBy(achievements, 2)}
          duration="[--duration:72s]"
          reverse
          onOpen={setOpen}
        />
        <AchievementColumn
          items={shiftBy(achievements, 4)}
          duration="[--duration:64s]"
          className="hidden sm:flex"
          onOpen={setOpen}
        />
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="achievement-title"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-background grid max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl md:grid-cols-[1.1fr_0.9fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={open.image}
              alt=""
              className="h-72 w-full object-cover md:h-full"
            />
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <p className="text-primary text-xs tracking-[0.18em] uppercase">
                {open.year}
              </p>
              <h3 id="achievement-title" className="font-heading text-4xl font-light">
                {open.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{open.detail}</p>
              <button
                type="button"
                className="text-primary mt-auto w-fit text-sm underline underline-offset-4"
                onClick={() => setOpen(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Buffer>
  )
}

function DirectoryView({ id, onOpen }: { id: string; onOpen: Open }) {
  const node = findNode(id)
  if (!node) return null

  return (
    <Buffer>
      <SectionLabel>Index</SectionLabel>
      <h2 className="font-heading text-4xl font-light">{node.name}</h2>
      <ul className="max-w-md">
        {(node.children ?? []).map((child) => (
          <li key={child.id} className="border-border border-b">
            <button
              type="button"
              onClick={() => onOpen(child.id)}
              className="hover:text-primary flex w-full items-center justify-between py-3 text-left"
            >
              <span className="font-heading text-2xl font-light">{child.name}</span>
              <span className="text-muted-foreground text-xs">Open</span>
            </button>
          </li>
        ))}
      </ul>
    </Buffer>
  )
}

export function FileView({ id, onOpen }: { id: string; onOpen: Open }) {
  if (id === "readme" || id === "about" || id === "contact") return <ReadmeView />
  if (id === "experience") return <ExperienceFolder onOpen={onOpen} />
  if (id === "projects") return <ProjectsFolder onOpen={onOpen} />
  if (id === "achievements") return <AchievementsView />
  if (id === "skills") return <SkillsView />
  if (id === "now") return <NowView />
  if (id.startsWith("exp-")) return <ExperienceFile id={id} />
  if (id.startsWith("proj-")) return <ProjectFile id={id} />
  if (findNode(id)?.children) return <DirectoryView id={id} onOpen={onOpen} />

  return (
    <Buffer>
      <p>No buffer for {id}.</p>
    </Buffer>
  )
}
