import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/header/Header";


const MainLayout = () => {

    return (
        <div className="bg-slate-900 text-white min-h-screen">
            <div className=" mx-auto max-w-screen-xl w-full">
                <Header></Header>
                <div className="">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;