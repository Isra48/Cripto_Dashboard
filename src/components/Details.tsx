import { Card, CardHeader,  Avatar, } from "@heroui/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import {Chip} from "@heroui/react";

const Details = () => {
   const value = -2.5;
    return (
    <>
  <Card className=" w-full  max-w-none p-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-black mb-4 pl-2 ">
                  <span className="text-xl">📊</span>
                  Detalles
                </h2>
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar
                      isBordered
                      radius="full"
                      size="md"
                      src="https://heroui.com/avatars/avatar-1.png"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                      <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                    </div>
                  </div>

                </CardHeader>

                <Table hideHeader aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>Price</TableColumn>
                    <TableColumn>data</TableColumn>

                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Precio Actual</TableCell>
                      <TableCell>CEO</TableCell>

                    </TableRow>
                    <TableRow key="2">
                      <TableCell>Cambio 24h</TableCell>
                      <TableCell>
                        <Chip color={value < 0 ? "danger" : "default"}>
                          {value < 0 ? `${value}%` : `+${value}%`}
                        </Chip>
                      </TableCell>

                    </TableRow>
                    <TableRow key="3">
                      <TableCell>Cap. de Mercado</TableCell>
                      <TableCell>Senior Developer</TableCell>

                    </TableRow>
                    <TableRow key="4">
                      <TableCell>Volumen 24h</TableCell>
                      <TableCell>Community Manager</TableCell>

                    </TableRow>
                  </TableBody>
                </Table>

              </Card>
               </>
  )
}

export default Details