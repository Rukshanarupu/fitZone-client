import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/header/Header";


const MainLayout = () => {

    return (
        <div className="bg-slate-900 text-white min-h-screen">
            <Header></Header>
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;