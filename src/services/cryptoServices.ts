import type { CryptoCoin } from '../interfaces/crypto.interface'
const baseUrl = import.meta.env.VITE_BASEURL 
const apiKey = import.meta.env.VITE_APIKEY


export const fetchTopCryptos = async (): Promise<CryptoCoin[]> => {
  const response = await fetch(
    `${baseUrl}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${apiKey}`,
    {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'CryptoDashboard/1.0.0',
      },
      cache: 'no-store',
    }
  )

  if (!response.ok) {
    throw new Error(`API responded with status: ${response.status}`)
  }

  const data = await response.json()

  return data as CryptoCoin[]
}