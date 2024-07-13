import Heading from '@/components/shared/Heading';
import { Link } from 'react-router-dom';
import "../../styles/style.css"
import { useGetProductsQuery } from '@/redux/api/productApi';
import { TProducts } from '@/types/types';

const FeaturedItems = () => {
    const {data: products, isLoading} = useGetProductsQuery({});
    console.log(products?.data);

    const featuredItems=products?.data.filter((product: TProducts) => product.featured_item === true)

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className='bg-base-200 py-10'>
            <div className='text-black'>
                <Heading heading={"Featured Products"}></Heading>
            </div>
            <div className="flex justify-center items-center h-max ">
                <div className="flex flex-wrap justify-center gap-8">
                    {featuredItems?.map((product:TProducts, index:number) => 
                        <div key={product._id} className={`featured-item rounded-lg relative group flex-shrink-0 w-64 overflow-hidden ${index % 2 !== 0 ? 'md:mt-10' : 'md:mb-8'}`}>
                            <div className="h-80 overflow-hidden relative">
                                <img
                                className="object-cover h-full w-full transition-transform transform-gpu group-hover:scale-105"
                                src={product.image}
                                alt={product.name}
                                />
                                <div className="absolute  inset-0 bg-gradient-to-t from-[#004d6e] via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 w-max text-center left-1/2 transform -translate-x-1/2 p-4">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-white font-semibold transition-all">{product.name}</p>
                                        <p className="text-gray-300">{product.price}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center justify-between pb-5 bg-[#004d6e] px-2 btn-overlay'>
                                <Link className='bg-slate-300 border border-slate-700 hover:bg-baseColor text-slate-800 transition-all py-1 px-2 rounded-xl'  to={`/product-details/${product._id}`} >View Details</Link>
                                <Link className='hover:bg-slate-700 border border-slate-700 text-slate-800 hover:text-white py-1 px-2 bg-baseColor rounded-xl transition-all' to="/products" >Explore more</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;