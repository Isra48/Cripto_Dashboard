import type { CryptoCoin } from '../interfaces/crypto.interface'


export const fetchTopCryptos = async (): Promise<CryptoCoin[]> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-fVDb1nKqs5855FB7eqCpP94g`,
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