/**
 * API Service - Placeholder functions for backend integration
 * These functions currently return mock data but are structured
 * to be easily replaced with real API calls.
 */

export interface StockDataPoint {
  date: string
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export interface AnalysisResult {
  highestPrice: number
  lowestPrice: number
  averagePrice: number
  trend: "uptrend" | "downtrend" | "sideways"
  volatility: number
  priceChange: number
  priceChangePercent: number
}

// Placeholder API endpoint
const API_BASE_URL = "/api"

/**
 * Upload CSV file for analysis
 * @placeholder Will POST to /api/upload
 */
export async function uploadStockData(file: File): Promise<{ success: boolean; data: StockDataPoint[] }> {
  // Placeholder: In production, this would upload to the backend
  // const formData = new FormData()
  // formData.append('file', file)
  // const response = await fetch(`${API_BASE_URL}/upload`, {
  //   method: 'POST',
  //   body: formData,
  // })
  // return response.json()

  console.log(`[API Placeholder] Would upload file: ${file.name} to ${API_BASE_URL}/upload`)
  
  // Return mock data for frontend demonstration
  return {
    success: true,
    data: generateMockStockData(30),
  }
}

/**
 * Get stock analysis results
 * @placeholder Will GET from /api/analysis
 */
export async function getAnalysisResults(): Promise<AnalysisResult> {
  // Placeholder: In production, this would fetch from the backend
  // const response = await fetch(`${API_BASE_URL}/analysis`)
  // return response.json()

  console.log(`[API Placeholder] Would fetch from ${API_BASE_URL}/analysis`)
  
  return {
    highestPrice: 189.45,
    lowestPrice: 142.30,
    averagePrice: 165.78,
    trend: "uptrend",
    volatility: 12.5,
    priceChange: 23.45,
    priceChangePercent: 8.7,
  }
}

/**
 * Get historical stock data
 * @placeholder Will GET from /api/stock-data
 */
export async function getStockData(): Promise<StockDataPoint[]> {
  // Placeholder: In production, this would fetch from the backend
  // const response = await fetch(`${API_BASE_URL}/stock-data`)
  // return response.json()

  console.log(`[API Placeholder] Would fetch from ${API_BASE_URL}/stock-data`)
  
  return generateMockStockData(90)
}

/**
 * Generate mock stock data for demonstration
 */
export function generateMockStockData(days: number): StockDataPoint[] {
  const data: StockDataPoint[] = []
  let basePrice = 150

  for (let i = days; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    
    // Random walk with slight upward bias
    const change = (Math.random() - 0.48) * 5
    basePrice = Math.max(100, Math.min(200, basePrice + change))
    
    const high = basePrice + Math.random() * 3
    const low = basePrice - Math.random() * 3
    const open = low + Math.random() * (high - low)
    const close = low + Math.random() * (high - low)
    
    data.push({
      date: date.toISOString().split("T")[0],
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume: Math.floor(Math.random() * 10000000) + 1000000,
    })
  }

  return data
}

/**
 * Calculate moving average
 */
export function calculateMovingAverage(data: StockDataPoint[], period: number): { date: string; ma: number }[] {
  const result: { date: string; ma: number }[] = []
  
  for (let i = period - 1; i < data.length; i++) {
    const sum = data.slice(i - period + 1, i + 1).reduce((acc, d) => acc + d.close, 0)
    result.push({
      date: data[i].date,
      ma: parseFloat((sum / period).toFixed(2)),
    })
  }

  return result
}
