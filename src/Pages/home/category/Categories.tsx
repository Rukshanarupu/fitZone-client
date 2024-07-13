import { Link } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CategoryCard from "./CategoryCard";
import CardAccessory from "./CardAccessory";
import Heading from "@/components/shared/Heading";

const Categories = () => {
    return (
        <div className=" my-10">
            <div className="text-center">
                <Heading heading={"Product Categories"}></Heading>
                <p className="text-xl my-3">See all <Link to="/" className="text-red-400">cardio</Link>, strength training, and <Link to="/" className="text-red-400">accessories</Link></p>
            </div>
            <Tabs defaultValue="equipment" className="w-[90%] mx-auto">
                <TabsList className="grid w-[400px] grid-cols-2 bg-transparent gap-1">
                    <TabsTrigger value="equipment" className="border-b-[1px] border-baseColor text-white">Equipments</TabsTrigger>
                    <TabsTrigger value="accessories" className="border-b-[1px] border-baseColor text-white">Accessories</TabsTrigger>
                </TabsList>
                <TabsContent value="equipment">
                    <CategoryCard/>
                </TabsContent>
                <TabsContent value="accessories">
                    <CardAccessory/>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Categories;