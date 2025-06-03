import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { GridStack } from 'gridstack'

import 'gridstack/dist/gridstack.min.css'
import './App.css'
import SliderCoin from './components/SliderCoins'

function FakeQueryTest() {
  const { data, isLoading } = useQuery({
    queryKey: ['hello'],
    queryFn: () =>
      new Promise((res) =>
        setTimeout(() => res('✅ React Query está funcionando!'), 1000)
      ),
  })

  if (isLoading) return <p className="text-gray-600">Cargando prueba local...</p>

  return <p className="text-green-600 font-medium">{data}</p>
}

function App() {
  useEffect(() => {
    GridStack.init({
      float: true,
      cellHeight: 100,

    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex justify-center">
      <div className="w-full max-w-screen-xl px-4 py-8">
        <h1 className="text-6xl font-extrabold text-center text-violet-700 tracking-tight drop-shadow-md">
          BitBoard
          <span className="block text-xl font-medium text-violet-400 tracking-widest mt-2">
            your intelligent crypto dashboard
          </span>
        </h1>
        <p className="mt-2 text-lg text-center text-gray-700">
          Visualización en tiempo real de las principales{' '}
          <span className="font-semibold text-violet-600">criptomonedas</span>
        </p>

        <SliderCoin />







        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </div>
  )
}


export default App