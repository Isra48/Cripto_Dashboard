import { Card, CardHeader, CardBody } from "@heroui/react";
import { useCryptoStore } from "../stores/useCryptoStore";
import type { CryptoCoin } from "../interfaces/crypto.interface";
import { TrendingUp, TrendingDown } from "lucide-react";

type Props = {
    coins: CryptoCoin[];
};

const SliderCoins = ({ coins }: Props) => {
    const selectedCoin = useCryptoStore((s) => s.selectedCoin);
    const setSelectedCoin = useCryptoStore((s) => s.setSelectedCoin);



    return (
        <div className="flex flex-nowrap gap-6 w-full overflow-x-auto mt-2 py-4 px-4 scrollbar-hide scrollbar-hover">
            {coins.map((coin) => {

                return (
                    <div onClick={() => {

                        setSelectedCoin(coin);
                    }
                    } key={coin.id}>
                        <Card
                            className={`min-w-[200px] w-[220px] flex-shrink-0 cursor-pointer transition 
    ${selectedCoin?.id === coin.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-xl'}`}
                        >

                            {/* Quitamos posibles márgenes verticales */}
                            <CardHeader className="flex items-center gap-4 pb-0">
                                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                                <div className="leading-tight">
                                    <p className="text-sm font-bold">{coin.symbol.toUpperCase()}</p>
                                    <p className="text-sm text-default-500">{coin.name}</p>
                                </div>
                            </CardHeader>

                            <CardBody className="pt-2 pb-3 px-4">
                                <p className="text-2xl font-bold text-black">
                                    ${coin.current_price.toLocaleString()}
                                </p>
                                <div
                                    className={`flex items-center text-sm font-medium ${coin.price_change_percentage_24h < 0
                                        ? 'text-red-500'
                                        : 'text-green-600'
                                        }`}
                                >
                                    {coin.price_change_percentage_24h < 0 ? (
                                        <TrendingDown className="w-4 h-4 mr-1" />
                                    ) : (
                                        <TrendingUp className="w-4 h-4 mr-1" />
                                    )}
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};

export default SliderCoins;