import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from '@/components/shared/Heading';

type TBenefits={
    title: string,
    image: string,
    description: string
}
const Benefits = () => {
    const [benefits, setBenefits] = useState<TBenefits[]>([]);
  
    useEffect(() => {
      fetch('benefitsData.json')
        .then(response => response.json())
        .then(data => setBenefits(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    // console.log(benefits);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

    return (
        <div className='py-10'>
            <Heading heading='Benefits of Our Products'></Heading>
            <div className="benefits-carousel w-[95%] mx-auto">
                <Slider {...settings}>
                    {benefits?.map((item, index) => (
                    <div key={index} className="p-4">
                        <div className="card card-side bg-slate-200 text-black shadow-xl rounded-lg overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-48 h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-gray-700"><span className='text-black underline font-semibold'>Benefit:</span> {item.description}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Benefits;