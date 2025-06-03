
import type { CryptoCoin } from '../interfaces/crypto.interface'
import { topCryptos } from '../mocks/topCryptos.mock'

export const fetchTopCryptos = async (): Promise<CryptoCoin[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.1 
      if (shouldFail) {
        reject(new Error('No se pudo obtener los datos de las criptomonedas'))
      } else {
        resolve(topCryptos)
      }
    }, 1500)
  })
}