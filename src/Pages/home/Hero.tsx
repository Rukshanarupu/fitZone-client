
const Hero = () => {
    return (
        <div className="hero md:min-h-screen">
            <div className="grid grid-cols-2 items-center">
                <div className="w-full md:w-[80%] p-2">
                    <p className="text-baseColor font-semibold text-lg">Fitzone Store</p>
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold my-5">The Most Complete Gym equipment and accessories Store</h1>
                    <p className="py-6 hidden md:block">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className="md:flex gap-2 items-center">
                        <button className="btn bg-black text-white my-btn mr-3 hover:text-black hidden md:block mb-2">Learn More</button>
                        <button className="btn md:my-btn lg:my-btn">Shop Online</button>
                    </div>
                </div>
                <img src="https://media.istockphoto.com/id/695456786/photo/young-people-group-of-women-and-men-doing-sport-biking-in-the-gym-for-fitness.jpg?s=1024x1024&w=is&k=20&c=TTiNBV4WnCG_Jq6sXiAkeMgUCj2dfCwRVMBiRuVxNKU="
                className="shadow-2xl" />
            </div>
            </div>
    );
};

export default Hero;