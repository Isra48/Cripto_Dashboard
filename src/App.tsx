
import  {useEffect } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useQuery } from '@tanstack/react-query'
import 'gridstack/dist/gridstack.min.css'
import './App.css'
import SliderCoin from './components/SliderCoins'
import Details from './components/Details'
import Ranking from './components/Ranking'
import { fetchTopCryptos } from './services/cryptoServices'
import { Skeleton } from '@heroui/react'
import type { CryptoCoin } from './interfaces/crypto.interface'
import { useCryptoStore } from './stores/useCryptoStore'
import CryptoChart from './components/CryptoChart'


function App() {
 
const { data: coins = [], isLoading, error } = useQuery<CryptoCoin[], Error>({
  queryKey: ['top-cryptos'],
  queryFn: fetchTopCryptos,
});

 const initializeFirstCoin = useCryptoStore((s) => s.initializeFirstCoin);


  useEffect(() => {
  if (coins.length > 0) {
    initializeFirstCoin(coins)
  }
}, [coins, initializeFirstCoin])


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex justify-center">
      <div className="w-full max-w-screen-xl px-4 py-8">
        <h1 className="text-6xl font-extrabold text-center text-[#2e9f30] tracking-tight drop-shadow-md">
         kubo.bitBoard
          <span className="block text-xl font-medium text-sky-500 tracking-widest mt-2">
            your intelligent crypto dashboard
          </span>
        </h1>
        <p className="mt-2 text-lg text-center text-gray-700">
          Visualización en tiempo real de las principales{' '}
          <span className="font-semibold text-sky-600">criptomonedas</span>
        </p>

        {isLoading ? (
          <div className="flex gap-4 overflow-x-auto mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-[124px] w-[220px] rounded-lg" />
            ))}
          </div>
        ) : error instanceof Error ? (
          <div className="bg-red-100 text-red-600 p-4 rounded-lg text-center mt-6">
            ❌ {error.message}
          </div>
        ) : (
          <SliderCoin coins={coins} />
        )}







        <div className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
          <div className="col-span-12 md:col-span-8">
  <CryptoChart />
</div>
            <div className="col-span-12 md:col-span-4">
              <Details />
            </div>
          </div>
        </div>

    {isLoading ? (
  <div className="col-span-12 md:col-span-8 bg-white rounded-lg shadow-lg p-6 mt-4">
    <Skeleton className="h-6 w-1/2 mb-4" />
    <Skeleton className="h-4 w-40 mb-4" />
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex gap-4 justify-between items-center mb-3">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/6" />
        <Skeleton className="h-4 w-1/6" />
        <Skeleton className="h-4 w-1/4 hidden sm:block" />
        <Skeleton className="h-4 w-1/4 hidden md:block" />
      </div>
    ))}
  </div>
) : (
  <Ranking coins={coins} />
)}


        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </div>
  )
}


export default App