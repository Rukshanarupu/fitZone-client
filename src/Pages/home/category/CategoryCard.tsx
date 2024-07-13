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
    { url: "https://i.ibb.co/PDPJK2d/xtrainer-machine.jpg", alt: "Xtrainer machine", title: "Xtrainer machine" },
    { url: "https://www.shutterstock.com/shutterstock/photos/1813376068/display_1500/stock-photo-full-length-profile-shot-of-a-smiling-young-man-running-on-a-treadmill-at-home-1813376068.jpg", alt: "Image 2", title: "Treadmill" },
    { url: "https://i.ibb.co/jJ1PJ1c/elliptical-machine.jpg", alt: "Image 3", title: "Elliptical machine" },
    { url: "https://www.shutterstock.com/shutterstock/photos/564014410/display_1500/stock-photo-two-young-sportsmen-having-hard-workout-on-rowing-machines-in-gym-564014410.jpg", alt: "Image 5", title: "Rowing machine" },
    { url: "https://i.ibb.co/TbzLQpx/yoga.jpg", alt: "Image 5", title: "Yoga" },
    { url: "https://www.shutterstock.com/shutterstock/photos/2048782475/display_1500/stock-photo-horizontal-full-body-shot-of-active-young-adult-muslim-woman-wearing-hijab-exercising-in-gym-using-2048782475.jpg", alt: "Image 5", title: "" },
];

const CategoryCard = () => {
  return (
    <Carousel opts={{align: "start",}} className="w-full">
        <CarouselContent>
            {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                    <Card className="h-[300px] bg-transparent border-none">
                        <CardContent className="flex items-center justify-center p-0 w-full flex-col">
                            <Link to="/products"><img className="md:h-[300px] w-full md:w-[450px] rounded" src={image.url} alt={image.alt} /></Link>
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

export default CategoryCard
