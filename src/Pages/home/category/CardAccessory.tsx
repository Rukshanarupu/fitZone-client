import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom";

const images = [
    { url: "https://i.ibb.co/tsHxnNG/power-rasistance.jpg", alt: "Xtrainer machine", title: "Power Resistance rope" },
    { url: "https://i.ibb.co/SrMVCTv/medicine-ball.jpg", alt: "Image 2", title: "Medicine Ball" },
    { url: "https://i.ibb.co/z89F3h6/foam-rollers.jpg", alt: "Image 3", title: "Foam Roller" },
    { url: "https://i.ibb.co/G5vVhb3/gloves.png", alt: "Image 5", title: "Gloves" },
    { url: "https://i.ibb.co/zX3DTpK/core-bags.png", alt: "Image 5", title: "Core bags" },
    { url: "https://i.ibb.co/0D61rJZ/tires.png", alt: "Image 5", title: "Tire" },
];

const CardAccessory = () => {
  return (
    <Carousel opts={{align: "start",}} className="w-full">
        <CarouselContent>
            {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                    <Card className="h-[300px] bg-transparent border-none">
                        <CardContent className="flex items-center justify-center p-0 w-full flex-col">
                            <Link to="/products"><img className="h-[300px] w-[450px] rounded" src={image.url} alt={image.alt} /></Link>
                            <h1 className="-m-10 bg-black text-white w-full py-2 text-center">{image.title}</h1>
                        </CardContent>
                    </Card>
                </div>
                </CarouselItem>
            ))}
        </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CardAccessory
