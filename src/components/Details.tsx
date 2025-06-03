import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Skeleton,
} from "@heroui/react";
import { useCryptoStore } from "../stores/useCryptoStore";

const Details = () => {
  const selectedCoin = useCryptoStore((s) => s.selectedCoin);

if (!selectedCoin) {
  return (
    <Card className="w-full p-6 min-h-[330px]">
      <Skeleton className="h-6 w-1/3 mb-6" />
      <div className="flex items-center gap-4 mb-6">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-5 gap-x-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <React.Fragment key={i}>
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
}

  const value = selectedCoin.price_change_percentage_24h;

  return (
    <Card className="w-full p-4">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-black mb-4 pl-2">
        <span className="text-xl">📊</span>
        Detalles
      </h2>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={selectedCoin.image}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {selectedCoin.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {selectedCoin.symbol.toUpperCase()}
            </h5>
          </div>
        </div>
      </CardHeader>

      <Table hideHeader aria-label="Coin data">
        <TableHeader>
          <TableColumn>Price</TableColumn>
          <TableColumn>Data</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Precio Actual</TableCell>
            <TableCell>${selectedCoin.current_price.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Cambio 24h</TableCell>
            <TableCell>
              <Chip color={value < 0 ? "danger" : "success"}>
                {value < 0 ? `${value.toFixed(2)}%` : `+${value.toFixed(2)}%`}
              </Chip>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Cap. de Mercado</TableCell>
            <TableCell>${selectedCoin.market_cap.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Volumen 24h</TableCell>
            <TableCell>${selectedCoin.total_volume.toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default Details;
