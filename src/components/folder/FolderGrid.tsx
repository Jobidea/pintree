import { FolderCard } from "./FolderCard"

interface FolderGridProps {
  folders: {
    name: string
    url: string
    icon?: string
    count?: number
  }[]
}

export function FolderGrid({ folders }: FolderGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {folders.map((folder) => (
        <FolderCard
          key={folder.name}
          name={folder.name}
          url={folder.url}
          icon={folder.icon}
          count={folder.count}
        />
      ))}
    </div>
  )
} 