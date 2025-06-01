import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useQuery } from '@tanstack/react-query'
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-center text-violet-600 tracking-tight drop-shadow-md underline decoration-wavy decoration-pink-500 p-6 rounded-xl bg-white shadow-lg">
        React Query está listo
      </h1>

      <FakeQueryTest />

      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  )
}

export default App