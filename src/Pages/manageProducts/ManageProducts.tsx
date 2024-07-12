import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useDeleteProductMutation, useGetProductsQuery } from "@/redux/api/productApi";
import { TProducts } from "@/types/types";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ManageProducts = () => {
  const { data: products, isLoading, refetch } = useGetProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  if (isLoading) {
    return <h1>Loading..........</h1>
  }
  //handle delete
  const handleDelete = (id: string) => {
    deleteProduct(id);
    toast.success("Product deleted successfully");
    alert("Product deleted successfully")
    refetch()
  };

  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <div className="overflow-x-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Product Management</h1>
        <Table className="border bg-slate-800">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">Sl. No.</TableHead>
                    <TableHead className="">Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="">
                {products?.data?.map((product: TProducts, index: number) => (
                    <TableRow key={product._id}>
                        <TableCell className="font-medium text-center">{index + 1}</TableCell>
                        <TableCell>{product?.name}</TableCell>
                        <TableCell>{product?.price}</TableCell>
                        <TableCell>{product?.category}</TableCell>
                        <TableCell className="flex justify-center items-center gap-2">
                            <Link to={`/update-product/${product._id}`} className="text-2xl"><CiEdit /></Link>
                            <button onClick={() => handleDelete(product._id!)} className="text-2xl"><MdDelete /></button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <div className="text-center mt-4">
          <Link to="/add-product">
            <button className="btn my-btn py-2 px-4 rounded mb-4">
              Create New Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;