"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function SearchPage() {

  const router = useRouter()
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (!query.trim()) return

    router.push(`/dashboard?symbol=${query}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">

      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">

        <div className="max-w-3xl mx-auto">

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Search Market Asset
            </h1>

            <p className="text-muted-foreground">
              Enter a stock, crypto, or commodity to analyze price trends and market insights.
            </p>
          </header>

          <Card>
            <CardContent className="p-6">

              <div className="flex flex-col md:flex-row gap-4">

                <input
                  type="text"
                  placeholder="Example: AAPL, TSLA, GOLD, BTC"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 border rounded-md p-3"
                />

                <Button onClick={handleSearch} size="lg">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>

              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Popular searches: AAPL, TSLA, GOLD, BTC
              </p>

            </CardContent>
          </Card>

        </div>

      </main>

    </div>
  )
}