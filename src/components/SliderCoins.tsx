import { Card, CardHeader, CardBody, Image } from "@heroui/react";

const SliderCoins = () => {
  return (
    
        <div className="flex flex-nowrap gap-6 w-full overflow-x-auto mt-2 py-4 px-4 scrollbar-hide scrollbar-hover">
  {Array.from({ length: 10 }).map((_, index) => (
    <Card
      key={index}
      className="min-w-[200px] w-[220px] flex-shrink-0"
    >
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div>
          <p className="text-md">BTC</p>
          <p className="text-small text-default-500">Bitcoin</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>$106,282.00</p>
        <p>$106,282.00</p>
      </CardBody>
    </Card>
  ))}
</div>
  )
}

export default SliderCoins