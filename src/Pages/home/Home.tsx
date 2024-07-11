import Benefits from "./Benefits";
import Categories from "./category/Categories";
import FeaturedItems from "./FeaturedItems";
import Gallery from "./Gallery";
import Hero from "./Hero";


const Home = () => {
    return (
        <div>
            <Hero/>
            <Categories/>
            <FeaturedItems/>
            <Benefits/>
            <Gallery/>
        </div>
    );
};

export default Home;