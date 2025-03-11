import { BookmarkGrid } from "@/components/bookmark/BookmarkGrid"
import { Breadcrumb } from "@/components/ui/breadcrumb"

const bookmarks = [
  {
    title: "7000+ Paywall examples, design inspiration and teardowns",
    url: "https://www.paywallscreens.com",
    icon: "/icons/paywall.png",
    description: "The largest collection of paywall examples and design inspiration"
  },
  {
    title: "App Motion - Mobile motion design inspiration",
    url: "https://appmotion.design",
    icon: "/icons/appmotion.png",
    description: "A curated collection of mobile app animations and interactions"
  },
  {
    title: "TOPYS",
    url: "https://www.topys.cn",
    icon: "/icons/topys.png",
    description: "创意内容与创新商业案例分享平台"
  },
  {
    title: "The Brand Styleguide Documentation",
    url: "https://www.brandguidelines.net",
    icon: "/icons/brandguide.png",
    description: "Collection of brand style guides and design systems"
  },
  {
    title: "trending.design",
    url: "https://trending.design",
    icon: "/icons/trending.png",
    description: "Daily curated design inspiration and resources"
  }
]

export default function DesignCompanyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Design", href: "/design" },
          { label: "Design Company", href: "/design/company" }
        ]}
      />
      
      <div className="mt-8">
        <h1 className="text-2xl font-semibold mb-6">Design Company</h1>
        <BookmarkGrid bookmarks={bookmarks} />
      </div>
    </div>
  )
} 