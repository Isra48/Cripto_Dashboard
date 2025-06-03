import type { HistoryPoint } from '../interfaces/crypto.interface'
import { historyCryptosMock } from '../mocks/historyCryptos.mock'

export const fetchCryptoHistory = async (
  coinId: string,
  range: '24h' | '7d' | '30d' | '90d'
): Promise<HistoryPoint[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.05
      if (shouldFail) {
        reject(new Error('No se pudo obtener el histórico de la criptomoneda'))
      } else {
        const formatted: HistoryPoint[] = historyCryptosMock.prices.map(
          ([timestamp, price]) => ({
            date: new Date(timestamp).toLocaleDateString('es-MX', {
              month: 'numeric',
              day: 'numeric',
              year: 'numeric',
            }),
            price: +price.toFixed(2),
          })
        )
        resolve(formatted)
      }
    }, 1200)
  })
}