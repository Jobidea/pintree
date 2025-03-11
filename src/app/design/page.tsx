import { FolderGrid } from "@/components/folder/FolderGrid"
import { Breadcrumb } from "@/components/ui/breadcrumb"

const folders = [
  {
    name: "Design Company",
    url: "/design/company",
    count: 12
  },
  {
    name: "Fonts",
    url: "/design/fonts",
    count: 8
  },
  {
    name: "LOGO Design",
    url: "/design/logo",
    count: 15
  },
  {
    name: "Color",
    url: "/design/color",
    count: 6
  },
  {
    name: "UI Design",
    url: "/design/ui",
    count: 20
  }
]

export default function DesignPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Design", href: "/design" }
        ]}
      />
      
      <div className="mt-8">
        <h1 className="text-2xl font-semibold mb-6">Design</h1>
        <FolderGrid folders={folders} />
      </div>
    </div>
  )
} 