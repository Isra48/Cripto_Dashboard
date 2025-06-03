// stores/useCryptoStore.ts
import { create } from 'zustand'
import type { CryptoCoin } from '../interfaces/crypto.interface'

type CryptoStore = {
  selectedCoin: CryptoCoin | null
  setSelectedCoin: (coin: CryptoCoin) => void
  initializeFirstCoin: (coins: CryptoCoin[]) => void 
}

export const useCryptoStore = create<CryptoStore>((set) => ({
  selectedCoin: null,
  setSelectedCoin: (coin) => set({ selectedCoin: coin }),
  initializeFirstCoin: (coins) => {
    if (coins && coins.length > 0) {
      set({ selectedCoin: coins[0] });
    }
  },
}))