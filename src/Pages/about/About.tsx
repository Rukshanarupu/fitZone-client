import { TEmployee, TTestimonial } from "@/types/types";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './customSwiper.css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Contact from "./Contact";


const AboutUs = () => {
    const [employees,setEmployees] = useState<TEmployee[]>([]);
    const [reviews, setReviews] = useState<TTestimonial[]>([]);
    useEffect(() => {
      fetch(`testimonial.json`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((error) => console.error(error));
    }, []);

    useEffect(()=>{
      fetch(`management.json`)
      .then(res=>res.json())
      .then(data=>setEmployees(data))
    },[])
    console.log(employees)

    const renderStars = (rating:number) => {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;
      
      const stars = [];
  
      for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} />);
      }
  
      if (hasHalfStar) {
        stars.push(<FaStarHalf key="half" />);
      }
  
      return stars;
    };
  return (
    <>
      <div className="">
        {/* Company Overview */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
          <p className="text-lg">
            Our company has a rich history of providing the best gym equipment
            and accessories to help you achieve your fitness goals. Our mission
            is to empower people to lead healthier lives, and our vision is to
            become the leading provider of fitness solutions worldwide.
          </p>
        </section>

        {/* Team Introduction */}
        <section className="my-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
            <div className="flex justify-center items-center h-max">
                <div className="flex flex-wrap justify-center gap-8">
                {employees?.map((employee, index) => (
                    <div
                    key={index}
                    className={`relative group flex-shrink-0 w-64 overflow-hidden ${
                    index % 2 !== 0 ? 'mt-10' : 'mb-8'
                    }`}
                    >
                    <div className="h-80 rounded-lg overflow-hidden relative ">
                        <img
                        className="object-cover h-full w-full transition-transform transform-gpu group-hover:scale-105"
                        src={employee.image}
                        alt={employee.name}
                        />
                        <div className="absolute  inset-0 bg-gradient-to-t from-green-400 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 w-max text-center left-1/2 transform -translate-x-1/2 p-4">
                        <div className="flex flex-col space-y-1">
                            <p
                            className={`text-black font-semibold transition-all `}
                            >
                            {employee.name}
                            </p>
                            <p className="text-gray-900">{employee.role}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

        {/* Customer Testimonials */}
        <section>
          <div>
          <h2 className="text-3xl font-bold text-center">
            Customer Testimonials
          </h2>
          <p className="text-center mb-4">Unleashing the power of your business</p>
          </div>
          <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{clickable: true}}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            }
          }}
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className='lg:flex md:flex gap-5 items-center mt-5 bg-green-50 rounded-xl overflow-hidden shadow-xl text-black'>
                <div className='flex justify-center flex-shrink-0 mb-3 md:mb-0'>
                <img className='cover w-[200px] h-[250px] object-cover' src={review.image} alt="alt" />
                </div>
                <div className='px-5 w-full'>
                  <div className='text-primary mb-5'>
                    <span className="flex items-center text-baseColor">
                      {renderStars(review.rating)}
                    </span>
                  </div>
                  <p>{review.feedback}</p>
                  <h1 className='text-[16px] font-bold mt-4'>{review.name}</h1>
                  <div className='flex justify-between w-full'>
                    <h1 className='font-bold text-[14px]'>{review.date}</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </section>

        {/* Contact Information */}
        <section className="text-center mt-10">
          <Contact/>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
