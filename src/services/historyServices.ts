import type { HistoryPoint } from '../interfaces/crypto.interface'
import { historyCryptosMock } from '../mocks/historyCryptos.mock'

const rangeToDaysMap: Record<'24h' | '7d' | '30d' | '90d', number> = {
  '24h': 1,
  '7d': 7,
  '30d': 30,
  '90d': 90,
}

export const fetchCryptoHistory = async (
  coinId: string,
  range: '24h' | '7d' | '30d' | '90d'
): Promise<HistoryPoint[]> => {
  const days = rangeToDaysMap[range]

  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&x_cg_demo_api_key=CG-fVDb1nKqs5855FB7eqCpP94g`,
    {
      headers: {
        Accept: "application/json",
        "User-Agent": "CryptoDashboard/1.0.0",
      },
      cache: "no-store",
    }
  )

  if (!response.ok) {
    throw new Error(`API responded with status: ${response.status}`)
  }

  const data = await response.json()

  if (!data.prices || !Array.isArray(data.prices)) {
    throw new Error("Invalid data format received from API")
  }

  const formattedData = data.prices.map((price: [number, number]) => ({
    timestamp: price[0],
    price: price[1],
    date: new Date(price[0]).toLocaleDateString(),
    time: new Date(price[0]).toLocaleTimeString(),
  }))

  return formattedData
}