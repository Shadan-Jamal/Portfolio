import type { TreeViewElement } from "@/components/ui/file-tree"
import { File, Folder, Tree } from "@/components/ui/file-tree"
import { defaultFileId, expandedFolders, tree } from "@/data/portfolio"
import { NodeIcon } from "@/components/portfolio/icons"

function Nodes({ nodes }: { nodes: TreeViewElement[] }) {
  return nodes.map((node) => {
    const icon = <NodeIcon id={node.id} className="size-4 shrink-0" />
    const folder = node.type === "folder" || Boolean(node.children?.length)

    if (folder) {
      return (
        <Folder key={node.id} value={node.id} element={node.name} glyph={icon}>
          {node.children ? <Nodes nodes={node.children} /> : null}
        </Folder>
      )
    }

    return (
      <File key={node.id} value={node.id} fileIcon={icon}>
        <span>{node.name}</span>
      </File>
    )
  })
}

export function PortfolioTree({
  selectedId,
  onSelect,
}: {
  selectedId: string
  onSelect: (id: string) => void
}) {
  return (
    <Tree
      className="bg-transparent p-0"
      elements={tree}
      sort="none"
      indicator
      selectedId={selectedId}
      onSelect={onSelect}
      initialSelectedId={defaultFileId}
      initialExpandedItems={expandedFolders}
    >
      <Nodes nodes={tree} />
    </Tree>
  )
}
