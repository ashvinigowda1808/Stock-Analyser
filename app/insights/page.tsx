"use client"

import { useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity, Info } from "lucide-react"

import { 
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer,
ReferenceLine
} from "recharts"

import { generateMockStockData } from "@/lib/api"


const mockInsights = {
trend: "uptrend" as const,
volatility: 12.5,
support: 145.20,
resistance: 185.50,
recommendation:
"The stock shows strong upward momentum with healthy volume. Consider maintaining current positions.",
}


export default function InsightsPage() {

const stockData = useMemo(() => generateMockStockData(90), [])

const chartData = useMemo(() => {
return stockData.map((item) => ({
date: item.date,
price: item.close,
}))
}, [stockData])


const firstPrice = chartData[0]?.price || 0
const lastPrice = chartData[chartData.length - 1]?.price || 0

const change = lastPrice - firstPrice

const percentChange =
firstPrice !== 0
? ((change / firstPrice) * 100).toFixed(2)
: "0"

const isUp = change > 0


return (

<div className="min-h-screen flex flex-col bg-background">

<Navbar />

<main className="flex-1 container mx-auto px-4 py-8 md:py-12">

<header className="mb-8">

<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
Analysis Insights
</h1>

<p className="text-muted-foreground">
Detailed analysis and insights from your stock data.
</p>

</header>


{/* PRICE MOVEMENT CARD */}

<Card className="mb-8">

<CardContent className="p-6 flex items-center justify-between">

<div>

<p className="text-sm text-muted-foreground">
Price Movement (90 Days)
</p>

<h2 className="text-3xl font-bold">
${lastPrice.toFixed(2)}
</h2>

</div>


<div className={`flex items-center gap-2 text-xl font-semibold ${
isUp ? "text-green-500" : "text-red-500"
}`}>

{isUp ? <TrendingUp /> : <TrendingDown />}

{isUp ? "+" : ""}{percentChange}%

</div>

</CardContent>

</Card>


{/* PRICE MOVEMENT CHART */}

<Card className="mb-8">

<CardHeader>

<div className="flex items-center gap-2">

<Activity className="h-5 w-5 text-primary" />

<CardTitle>Price Movement Analysis</CardTitle>

</div>

<CardDescription>
90-day price movement with support and resistance levels
</CardDescription>

</CardHeader>

<CardContent>

<div className="h-[400px] w-full">

<ResponsiveContainer width="100%" height="100%">

<LineChart data={chartData}>

<CartesianGrid strokeDasharray="3 3" />

<XAxis
dataKey="date"
tickFormatter={(value) => value.slice(5)}
/>

<YAxis
domain={['auto','auto']}
tickFormatter={(value) => `$${value}`}
/>

<Tooltip
formatter={(value) => [`$${Number(value).toFixed(2)}`, "Price"]}
/>

<ReferenceLine
y={mockInsights.support}
stroke="#22c55e"
strokeDasharray="5 5"
label={{ value: "Support", fontSize: 12 }}
/>

<ReferenceLine
y={mockInsights.resistance}
stroke="#ef4444"
strokeDasharray="5 5"
label={{ value: "Resistance", fontSize: 12 }}
/>

<Line
type="monotone"
dataKey="price"
stroke={isUp ? "#22c55e" : "#ef4444"}
strokeWidth={3}
dot={false}
/>

</LineChart>

</ResponsiveContainer>

</div>

</CardContent>

</Card>


{/* AI SUMMARY */}

<Card className="mb-8">

<CardHeader>

<div className="flex items-center gap-2">
<Info className="h-5 w-5 text-primary" />
<CardTitle>AI Summary</CardTitle>
</div>

<CardDescription>
Automated insights generated from the analyzed stock data
</CardDescription>

</CardHeader>

<CardContent>

<div className="space-y-4">

<div className="flex items-center gap-2">

<Badge variant="secondary">
Trend: {mockInsights.trend}
</Badge>

<Badge variant="outline">
Volatility: {mockInsights.volatility}%
</Badge>

</div>

<p className="text-muted-foreground">
{mockInsights.recommendation}
</p>

</div>

</CardContent>

</Card>

</main>

</div>

)
}