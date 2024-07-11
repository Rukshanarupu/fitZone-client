import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedItems = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    // const categorys = useLoaderData();
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        // fetch(`${baseUrl}/employees`)
        fetch(`items.json`)
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    // console.log(categories)

    const handleHover = (index) => {
        setHoveredIndex(index);
    };

    const handleHoverEnd = () => {
        setHoveredIndex(-1);
    };
    return (
        <div>
            <div>

            </div>
            <div className="flex justify-center items-center h-max bg-white">
                <div className="flex flex-wrap justify-center gap-8">
                    {categories?.map((category, index) => 
                        // console.log(index)
                        <div key={index}
                        className={`relative group flex-shrink-0 w-64 overflow-hidden ${
                        index % 2 !== 0 ? 'mt-10' : 'mb-8'
                        }`} onMouseEnter={() => handleHover(index)} onMouseLeave={handleHoverEnd}>
                            <div className="h-80 rounded-lg overflow-hidden relative">
                                <img
                                className="object-cover h-full w-full transition-transform transform-gpu group-hover:scale-105"
                                src={category.image}
                                alt={category.name}
                                />
                                <div className="absolute  inset-0 bg-gradient-to-t from-[#004d6e] via-transparent to-transparent"></div>
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="flex flex-col space-y-2">
                                        <div rel="noopener noreferrer"
                                        className={`opacity-0 transition-opacity ${hoveredIndex === index ? "group-hover:opacity-0 animate-social-links": ""}`}
                                        style={{ animationDelay: `${hoveredIndex === index ?  0.1 : 0.5}s`}}>
                                            <div className="bg-gray-50 px-2 text-black">
                                                <p>{category?.name}</p>
                                                <p>{category?.Price}</p>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* <div
                                            className={`${
                                            platform == "instagram" ? "block" : "hidden"
                                            } p-2 bg-white text-black rounded-lg hover:from-[#004d6e] hover:to-[#29b1eb] hover:bg-gradient-to-r`}
                                        >
                                            <FaInstagram />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="absolute bottom-0 w-max text-center left-1/2 transform -translate-x-1/2 p-4">
                                    <div className="flex flex-col space-y-2">
                                        <p
                                        className={`text-white font-semibold transition-all ${
                                            hoveredIndex === index ? "line-animation" : ""
                                        }`}
                                        >
                                        {category.name}
                                        <span
                                            className={`block w-0 h-0.5 bg-blue-500 ${
                                            hoveredIndex === index ? "line-animation-bar" : ""
                                            }`}
                                        ></span>
                                        </p>
                                        <p className="text-gray-300">{category.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;