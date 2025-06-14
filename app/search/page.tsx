import type { Metadata } from "next"
import SearchResults from "../components/SearchResults"
import SearchFilters from "../components/SearchFilters"

export const metadata: Metadata = {
  title: "Search Results - CIVIL-G Clone",
  description: "Find local businesses and services near you",
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; location?: string; category?: string }
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SearchFilters />
          </div>
          <div className="lg:col-span-3">
            <SearchResults query={searchParams.q} location={searchParams.location} category={searchParams.category} />
          </div>
        </div>
      </div>
    </div>
  )
}
