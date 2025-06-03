import { useQuery } from '@tanstack/react-query'
import { useCryptoStore } from '../stores/useCryptoStore'
import { fetchCryptoHistory } from '../services/historyServices'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Skeleton, Button } from '@heroui/react'
import { useState } from 'react'

const timeRanges = ['24h', '7d', '30d', '90d']

const CryptoChart = () => {
  const selectedCoin = useCryptoStore((s) => s.selectedCoin)
  const [range, setRange] = useState<'24h' | '7d' | '30d' | '90d'>('7d')

  const { data, isLoading, error } = useQuery({
    queryKey: ['history', selectedCoin?.id, range],
    queryFn: () => fetchCryptoHistory(selectedCoin!.id, range),
    enabled: !!selectedCoin,
  })

  if (!selectedCoin) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 w-full">
        <Skeleton className="h-6 w-1/2 mb-4" />
        <div className="flex gap-4 items-center mb-4">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <Skeleton className="h-[250px] w-full rounded-lg mt-4" />
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
        <div className="flex items-center gap-2">
          <img src={selectedCoin.image} alt={selectedCoin.name} className="w-6 h-6" />
          <h3 className="text-lg font-bold">
            {selectedCoin.name} ({selectedCoin.symbol.toUpperCase()})
          </h3>
        </div>
     <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
          {timeRanges.map((label) => (
            <Button
              key={label}
              size="sm"
              className="px-2 py-1 text-xs sm:text-sm"
              variant={range === label ? 'solid' : 'bordered'}
              onClick={() => setRange(label as any)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">Precio histórico en USD</p>

      {isLoading || !data ? (
        <>
          <Skeleton className="h-6 w-1/4 mb-2" />
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </>
      ) : error instanceof Error ? (
        <div className="text-red-500 text-sm text-center">{error.message}</div>
      ) : (
        <ResponsiveContainer width="100%" height={300} className="mt-4">
          <LineChart data={data}>
            <XAxis dataKey="date" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default CryptoChart