import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@heroui/react";
import { useCryptoStore } from "../stores/useCryptoStore";
import type { CryptoCoin } from "../interfaces/crypto.interface";

type Props = {
  coins: CryptoCoin[];
};

const Ranking = ({ coins }: Props) => {
  const selectedCoin = useCryptoStore((s) => s.selectedCoin);
  const setSelectedCoin = useCryptoStore((s) => s.setSelectedCoin);

function formatLargeNumber(num: number) {
  if (num >= 1e12) return (num / 1e12).toFixed(2) + "T";
  if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
  return num.toLocaleString();
}

  return (
    <div className="col-span-12 md:col-span-8 bg-white rounded-lg shadow-lg p-6 mt-4">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-black pl-2">
        <span className="text-xl">💲</span>
        Top 10 Criptomonedas
      </h2>
      <p className="text-sm text-gray-500 pl-2 mb-4">
        Ranking por capitalización de mercado
      </p>

      <div className="w-full overflow-x-auto md:overflow-visible">
        <Table aria-label="Tabla de ranking">
          <TableHeader>
            <TableColumn className="font-bold text-sm">#</TableColumn>
            <TableColumn className="font-bold text-sm">Moneda</TableColumn>
            <TableColumn className="font-bold text-sm">Precio</TableColumn>
            <TableColumn className="font-bold text-sm">24h %</TableColumn>
            <TableColumn className="font-bold text-sm">Cap. Mercado</TableColumn>
            <TableColumn className="font-bold text-sm">Volumen</TableColumn>
          </TableHeader>

          <TableBody>
            {coins.map((coin, index) => {
              const isSelected = selectedCoin?.id === coin.id;
              const isNegative = coin.price_change_percentage_24h < 0;
              return (
                <TableRow
                  key={coin.id}
                  className={`cursor-pointer transition ${
                    isSelected ? "bg-blue-50" : ""
                  }`}
                  onClick={() => setSelectedCoin(coin)}
                >
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm font-medium">
                    {index + 1}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 flex items-center gap-3">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-6 h-6"
                    />
                    <div>
                      <p className="font-semibold text-sm">{coin.name}</p>
                      <p className="text-xs text-default-500">{coin.symbol.toUpperCase()}</p>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-bold text-sm">
                    ${coin.current_price.toLocaleString()}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    <Chip color={isNegative ? "danger" : "success"} size="sm">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </Chip>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    ${formatLargeNumber(coin.market_cap)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    ${formatLargeNumber(coin.total_volume)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};



export default Ranking;