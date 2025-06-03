
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
} from "@heroui/react";


const rows = [
    {
        key: "1",
        moneda: "Tony Reichert",
        precio: "CEO",
        status: "Active",
        cap: "$1,000,000",
        volumen: "$500,000",
    },
    {
        key: "2",
        moneda: "Zoey Lang",
        precio: "Technical Lead",
        status: "Paused",
        cap: "$750,000",
        volumen: "$300,000",
    },
    {
        key: "3",
        moneda: "Jane Fisher",
        precio: "Senior Developer",
        status: "Active",
        cap: "$500,000",
        volumen: "$200,000",
    },
    {
        key: "4",
        moneda: "William Howard",
        precio: "Community Manager",
        status: "Vacation",
        cap: "$300,000",
        volumen: "$150,000",
    },
];

const columns = [
    {
        key: "moneda",
        label: "MONEDA",
    },
    {
        key: "precio",
        label: "PRECIO",
    },
     {
        key: "status",
        label: "24%",
    },
  
    {
        key: "cap",
        label: "CAP. DE MERCADO",
    },
    {
        key: "volumen",
        label: "VOLUMEN",
    },
];
const Ranking = () => {
    return (
        <div className="col-span-12 md:col-span-8 bg-white rounded-lg shadow-lg p-6 mt-4">

            <h2 className="flex items-center gap-2 text-lg font-semibold text-black  pl-2 ">
                <span className="text-xl">📊</span>
                Top 10 Criptomonedas
            </h2>
            <p className="text-sm text-gray-500  pl-2">
                Ranking por capitalización de mercado
            </p>
            <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>


        </div>
    )
}

export default Ranking