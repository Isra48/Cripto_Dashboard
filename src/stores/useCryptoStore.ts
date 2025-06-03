import { create } from 'zustand'

type Coin = {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
 
}

type CryptoStore = {
  selectedCoin: Coin | null
  setSelectedCoin: (coin: Coin) => void
}

export const useCryptoStore = create<CryptoStore>((set) => ({
  selectedCoin: null,
  setSelectedCoin: (coin) => set({ selectedCoin: coin }),
}))