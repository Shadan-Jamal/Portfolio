import { useCallback, useEffect, useState } from "react"
import { FileView } from "@/components/portfolio/views"
import { PortfolioTree } from "@/components/portfolio/PortfolioTree"
import {
  defaultFileId,
  findNode,
  isFolder,
  pathTo,
  profile,
} from "@/data/portfolio"
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler"

export default function Workstation() {
  const [selectedId, setSelectedId] = useState(defaultFileId)
  const [tabs, setTabs] = useState<string[]>([defaultFileId])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme")
    const next = stored !== "light"
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
  }, [])

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current
      localStorage.setItem("portfolio-theme", next ? "dark" : "light")
      document.documentElement.classList.toggle("dark", next)
      return next
    })
  }

  const open = useCallback((id: string) => {
    if (!findNode(id)) return
    setSelectedId(id)
    if (!isFolder(id)) {
      setTabs((current) => (current.includes(id) ? current : [...current, id]))
    }
    const nextHash = `#${id}`
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash)
    }
    setSidebarOpen(false)
  }, [])

  useEffect(() => {
    const raw = window.location.hash.replace("#", "")
    const id = raw === "about" || raw === "contact" ? "readme" : raw
    if (id && findNode(id)) open(id)
  }, [open])

  useEffect(() => {
    document
      .querySelector<HTMLElement>('[role="tab"][aria-selected="true"]')
      ?.scrollIntoView({ inline: "nearest", block: "nearest" })
  }, [selectedId])

  const closeTab = (id: string) => {
    if (tabs.length === 1) return
    const remaining = tabs.filter((tab) => tab !== id)
    setTabs(remaining)
    if (id === selectedId) {
      const fallback = remaining[remaining.length - 1]
      if (fallback) open(fallback)
    }
  }

  const trail = pathTo(selectedId)

  return (
    <div className="flex h-svh p-2 md:p-5">
      <div className="border-border bg-background relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border shadow-[0_24px_60px_-32px_oklch(0.35_0.04_55/0.45)]">
        <header className="flex h-14 shrink-0 items-center gap-3 px-4 md:px-5">
          <button
            type="button"
            className="border-border text-foreground hover:bg-muted rounded-full border px-3 py-1 text-xs md:hidden"
            aria-expanded={sidebarOpen}
            aria-controls="explorer"
            onClick={() => setSidebarOpen((openNow) => !openNow)}
          >
            Index
          </button>
          <div className="min-w-0">
            <p className="font-heading truncate text-lg leading-none">
              {profile.name}
            </p>
            <p className="text-muted-foreground mt-1 text-xs">{profile.role}</p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <p className="text-muted-foreground hidden text-xs sm:block">
              {profile.location}
            </p>
            <AnimatedThemeToggler 
              aria-pressed={dark}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="border-border bg-card text-foreground hover:border-primary/50 hover:bg-accent cursor-pointer inline-flex size-9 items-center justify-center rounded-full border transition-colors duration-200"
              onThemeChange={toggleTheme} 
              variant="circle"
              duration={400}/>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          {sidebarOpen ? (
            <button
              type="button"
              aria-label="Close index"
              className="absolute inset-0 z-10 bg-stone-900/25 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          ) : null}

          <aside
            id="explorer"
            className={`${
              sidebarOpen ? "flex" : "hidden"
            } border-border bg-sidebar absolute inset-y-14 left-0 z-20 w-64 shrink-0 flex-col overflow-hidden border-r md:static md:flex md:h-auto md:w-64 md:min-h-0`}
          >
            <p className="text-muted-foreground px-4 pt-3 pb-1 text-[11px] tracking-[0.16em] uppercase">
              Index
            </p>
            <nav aria-label="Portfolio sections" className="explorer min-h-0 flex-1 pb-4">
              <PortfolioTree selectedId={selectedId} onSelect={open} />
            </nav>
          </aside>

          <section className="flex min-w-0 flex-1 flex-col">
            <div
              role="tablist"
              aria-label="Open sections"
              className="border-border flex shrink-0 gap-2 overflow-x-auto border-b px-4 py-3 md:px-6"
            >
              {tabs.map((id) => {
                const node = findNode(id)
                const active = id === selectedId
                return (
                  <div
                    key={id}
                    className={`flex shrink-0 items-center rounded-xl border shadow-sm transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out ${
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-[0_8px_20px_-12px_var(--primary)]"
                        : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-primary/45 hover:bg-accent hover:text-foreground hover:shadow-md"
                    }`}
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected={active}
                      className="py-1.5 pr-1 pl-3 text-sm transition-colors duration-200 hover:cursor-pointer"
                      onClick={() => open(id)}
                    >
                      {node?.name ?? id}
                    </button>
                    <button
                      type="button"
                      aria-label={`Close ${node?.name ?? id}`}
                      className={`mr-1.5 grid size-5 place-items-center rounded-md text-sm leading-none transition-colors duration-200 hover:cursor-pointer ${
                        active
                          ? "text-primary-foreground/75 hover:bg-primary-foreground/15 hover:text-primary-foreground"
                          : "hover:bg-primary/15 hover:text-primary"
                      }`}
                      onClick={() => closeTab(id)}
                    >
                      ×
                    </button>
                  </div>
                )
              })}
            </div>

            <div className="mt-3 flex shrink-0 items-center gap-1.5 overflow-x-auto px-4 pb-2 text-xs md:px-6">
              {trail.map((node, index) => (
                <span key={node.id} className="flex items-center gap-1.5">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-muted-foreground">
                      ·
                    </span>
                  ) : null}
                  <button
                    type="button"
                    className="border-border bg-card text-foreground/80 hover:border-primary/40 hover:bg-accent hover:text-foreground rounded-lg border px-2.5 py-1 transition-colors"
                    onClick={() => open(node.id)}
                  >
                    {node.name}
                  </button>
                </span>
              ))}
            </div>

            <div className="min-h-0 flex-1 overflow-auto">
              <FileView key={selectedId} id={selectedId} onOpen={open} />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
