import { Folder } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FolderCardProps {
  name: string
  url: string
  icon?: string
  count?: number
}

export function FolderCard({ name, url, icon, count }: FolderCardProps) {
  return (
    <Link 
      href={url}
      className="block p-4 bg-card/50 dark:bg-gray-900 border border-[#eaebf3] dark:border-gray-800 
        rounded-2xl hover:bg-card dark:hover:bg-gray-800 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="flex aspect-square size-12 items-center justify-center rounded-xl bg-emerald-500/10">
          {icon ? (
            <Image
              src={icon}
              alt={name}
              width={24}
              height={24}
              className="rounded-lg"
            />
          ) : (
            <Folder className="size-6 text-emerald-500" />
          )}
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-sm">{name}</h3>
          {count !== undefined && (
            <p className="text-xs text-muted-foreground">{count} 个书签</p>
          )}
        </div>
      </div>
    </Link>
  )
} 