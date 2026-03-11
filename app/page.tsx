import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, BarChart3, ArrowRight } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Analyze Price Trends",
    description: "Automatically detect uptrends, downtrends, and sideways movements with advanced algorithms.",
  },
  {
    icon: BarChart3,
    title: "Visualize Insights",
    description: "Interactive charts and dashboards to help you understand price movements and make informed decisions.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative">
            <div className="max-w-3xl mx-auto text-center">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4" />
                Stock Analysis Made Simple
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance mb-6">
                Analyze Stock Price Trends Easily
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Search stocks instantly, analyze price movements, and visualize insights with powerful charts.
              </p>
              
              <div className="flex items-center justify-center">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Everything You Need for Stock Analysis
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              A complete toolkit for analyzing stock price trends and extracting valuable insights.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {features.map((feature) => (
              <Card key={feature.title} className="border-border bg-card hover:shadow-lg transition-shadow">

                <CardHeader>

                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>

                  <CardTitle className="text-foreground">
                    {feature.title}
                  </CardTitle>

                </CardHeader>

                <CardContent>

                  <CardDescription className="text-muted-foreground text-base">
                    {feature.description}
                  </CardDescription>

                </CardContent>

              </Card>
            ))}

          </div>

        </section>

      </main>

    </div>
  )
}