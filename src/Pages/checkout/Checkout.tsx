/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";
import { clearCart } from "@/redux/features/cartSlice";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Checkout = () => {
    const location = useLocation();
  const { totalPrice } = location.state || { subtotal: 0, vat: 0, totalPrice: 0 };
  console.log(totalPrice);
  
  const navigate = useNavigate();
  //grab cart data from local state
  const cart = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
//  console.log(cart.items);
  const [createOrder] = useCreateOrderMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const order = {
      userDetails: data,
      cartItems: cart.items,
    };
    try {
      // creating order
      await createOrder(order);
    //   console.log(order.cartItems);
      dispatch(clearCart());
      toast.success("Order confirmed");
      console.log("Order confirmed");
      alert("Order confirmed");
      navigate("/product-success");
    } catch (err) {
      toast.error("Something went wrong");
      console.error("Failed to place the order:", err);
      alert("Failed to place the order. Please try again.");
    }
  };
  return (
    <div className="">
        <div className="grid lg:grid-cols-2 md:justify-between justify-center mb-8">
            <div className="p-4 text-white w-full">
                <h1 className="text-2xl font-bold p-2 bg-slate-200 text-black">Billing Details</h1>
                <div>
                    <div className="shadow-md shadow-white">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name")}
                                className="w-full p-2 border border-gray-300 rounded bg-black"
                                required
                            />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                className="w-full p-2 border border-gray-300 rounded bg-black"
                                required
                            />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Phone</span>
                            </label>
                            <input
                                type="text"
                                {...register("phone")}
                                className="w-full p-2 border border-gray-300 rounded bg-black"
                                required
                            />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">address</span>
                            </label>
                            <input
                                type="text"
                                {...register("address")}
                                className="w-full p-2 border border-gray-300 rounded bg-black"
                                required
                            />
                            </div>
                            <div className="mt-4">
                            <h2 className="text-xl font-bold mb-2">Payment Method</h2>
                            <div>
                                <label className="block mb-2">
                                <input
                                    type="radio"
                                    value="cash"
                                    {...register("paymentMethod")}
                                    className="mr-2"
                                    required
                                />
                                Cash on Delivery
                                </label>
                            </div>
                            </div>
                            <div className="form-control mt-6 md:w-1/4">
                            <button
                                disabled={cart.items.length === 0}
                                className="btn my-btn"
                            >
                                Place Order
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="p-4 text-white">
                <h1 className="text-2xl font-bold p-2 bg-slate-200 text-black">Your order</h1>
                <div>
                    <div className="shadow-md shadow-white">
                    
                        <Table className="border bg-slate-800">
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Name</TableHead>
                                    <TableHead>Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="">
                                {cart?.items?.map((item) => (
                                <TableRow>
                                    <TableCell className="font-medium">{item.name}*{item.quantity}</TableCell>
                                    <TableCell> ${item.price}</TableCell>
                                </TableRow>
                                ))}
                                <TableRow>
                                  <TableCell className="font-medium">Cart Total:</TableCell>
                                  <TableCell>${totalPrice}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell className="font-medium">Shipping charge:</TableCell>
                                  <TableCell>$100</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell className="font-medium">Order Total:</TableCell>
                                  <TableCell>${(parseFloat(totalPrice) + 100).toFixed(2)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Checkout;