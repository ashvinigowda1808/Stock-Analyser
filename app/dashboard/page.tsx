"use client"

import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { createChart, CandlestickSeries } from "lightweight-charts"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {

const chartContainerRef = useRef(null)

const searchParams = useSearchParams()
const symbol = searchParams.get("symbol")

useEffect(() => {

if (!chartContainerRef.current) return

const chart = createChart(chartContainerRef.current, {
height: 400,
layout: {
background: { color: "#0f172a" },
textColor: "#ffffff"
},
grid: {
vertLines: { color: "#1e293b" },
horzLines: { color: "#1e293b" }
}
})

const candlestickSeries = chart.addSeries(CandlestickSeries)

candlestickSeries.setData([
{ time: "2024-01-01", open:150, high:160, low:145, close:155 },
{ time: "2024-01-02", open:155, high:165, low:150, close:162 },
{ time: "2024-01-03", open:162, high:170, low:158, close:168 },
{ time: "2024-01-04", open:168, high:172, low:160, close:164 },
{ time: "2024-01-05", open:164, high:175, low:162, close:170 },
{ time: "2024-01-06", open:170, high:180, low:168, close:178 }
])

chart.timeScale().fitContent()

return () => chart.remove()

}, [])

return (

<div className="min-h-screen flex flex-col bg-background">

<Navbar />

<main className="flex-1 container mx-auto px-4 py-8">

<div className="max-w-6xl mx-auto">

<header className="mb-8">

<h1 className="text-3xl font-bold mb-2">
Stock Analysis Dashboard - {symbol?.toUpperCase()}
</h1>

</header>

<Card>

<CardHeader>
<CardTitle>Market Chart</CardTitle>
</CardHeader>

<CardContent>
<div ref={chartContainerRef} />
</CardContent>

</Card>

</div>

</main>

</div>

)

}