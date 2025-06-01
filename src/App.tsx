import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { GridStack } from 'gridstack'
import 'gridstack/dist/gridstack.min.css'

import './App.css'

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
      disableOneColumnMode: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold text-center text-violet-600 tracking-tight drop-shadow-md underline decoration-wavy decoration-pink-500 p-6 rounded-xl bg-white shadow-lg">
        React Query + Gridstack
      </h1>

      <FakeQueryTest />

      <div className="grid-stack w-full max-w-4xl mt-10">
        <div className="grid-stack-item" gs-x="0" gs-y="0" gs-width="6" gs-height="2">
          <div className="grid-stack-item-content bg-white shadow p-4 rounded">
            Widget 1
          </div>
        </div>
        <div className="grid-stack-item" gs-x="6" gs-y="0" gs-width="6" gs-height="2">
          <div className="grid-stack-item-content bg-white shadow p-4 rounded">
            Widget 2
          </div>
        </div>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  )
}

export default App