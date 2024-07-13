import Heading from "@/components/shared/Heading";

const Gallery = () => {

  return (
    <div className=''>
        <Heading heading="Our Gallery"></Heading>
        <div className="gallery grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <div>
                <img className='mb-4 w-full' src="https://i.ibb.co/Z6YswLp/ketball.jpg" alt="image1" />
                <img className='mb-4  w-full' src="https://www.shutterstock.com/shutterstock/photos/723094507/display_1500/stock-photo-attractive-young-sports-woman-is-working-out-in-gym-doing-cardio-training-on-treadmill-running-on-723094507.jpg" alt="image1" />
                <img className='mb-4  w-full' src="https://i.ibb.co/fnFNHFD/Dumbbells.jpg" alt="image1" />
            </div>
            <div>
                <img className='mb-4  w-full' src="https://i.ibb.co/hKtSssc/edgar-chaparro-s-Hfo3-WOg-GTU-unsplash.jpg" alt="image1" />
                <img className='mb-4  w-full' src="https://i.ibb.co/k6kG9rJ/bands.jpg" alt="image1" />
                <img className='mb-4  w-full h-[235px]' src="https://i.ibb.co/ZgxPj0R/rowing-machine.jpg" alt="image1" />
            </div>
            <div>
                <img className='mb-4 w-full h-[420px]' src="https://i.ibb.co/wzF2NT6/nature-zen-Eszi6j-Z0-Pfk-unsplash.jpg" alt="image1" />
                <img className='mb-4 w-full h-[497px]' src="https://i.ibb.co/qjMW8dS/logan-weaver-lgnwvr-t-Bmm-A3p-Tci-A-unsplash.jpg" alt="image1" />
                
            </div>
            <div>
                <img className='mb-4 w-full' src="https://i.ibb.co/BBj1D2j/bike.jpg" alt="image1" />
                <img className='mb-4 w-full' src="https://i.ibb.co/MkkTPLz/cardio.jpg" alt="image1" />
                <img className='mb-4 w-full ' src="https://i.ibb.co/z89F3h6/foam-rollers.jpg" alt="image1" />
                <img className='mb-4 w-full h-[210px]' src="https://i.ibb.co/Mf1TvmT/cardio-600w.webp" alt="image1" />
            </div>
    </div>
    </div>
  );
};

export default Gallery;
