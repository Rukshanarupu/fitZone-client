import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { removeFromCart, updateCartQuantity } from "@/redux/features/cartSlice";
import { MdDeleteForever } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Cart = () => {
  //grab cart data from local state
  const cart = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  // calculate total price
  const subTotal = () => {
    return cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity, 0
    );
  };
  const vat = subTotal() * 0.07;
  const totalPrice = subTotal() + vat;

  // handle remove from cart
  const handleRemoveFromCart = (id: string) => {
    if (window.confirm("Are you sure you want to remove this item from the cart?")){
      dispatch(removeFromCart(id));
    }
  };

  //handle update quantity
  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };

  return (
    <div className="">
      <div className=" p-4 my-8">
        {cart?.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center ">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-700 mb-6">Looks like you haven't added anything to your cart yet. Browse our
                    products and find something you like!</p>
                    <div className="flex justify-center">
                    <Link to="/products" className="btn my-btn bg-black text-white transition duration-300">
                      Shop Now
                    </Link>
                    </div>
                </div>
            </div>
        ) : (          
          <div>
            <Heading heading="Your Cart"/>
            <Table className="border bg-slate-800">
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="">Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>In Total</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="">
                {cart?.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell> ${item.price.toFixed(2)}</TableCell>
                    <TableCell> 
                      <div className="flex items-center gap-2">
                        <button className="btn btn-xs" disabled={item.quantity <= 1}
                        onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}>
                          <FaMinus className="text-black"/>
                        </button>
                        <span className="">{item.quantity}</span>
                        <button className="btn btn-xs" disabled={item.quantity >= item.stock}
                        onClick={() =>handleUpdateQuantity(item._id, item.quantity + 1)}>
                          <FaPlus className="text-black"/>
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="">${(item.price * item.quantity).toFixed(2)}</TableCell>
                    <TableCell className="flex justify-end"><MdDeleteForever className="text-3xl text-baseColor" onClick={() => handleRemoveFromCart(item._id)}/></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="md:flex justify-center gap-5 mt-5">
              <div className="border md:w-[50%] lg:w-[35%] mb-5">
                <h1 className="bg-white text-black p-2">Coupon</h1>
                <div className="px-2 pb-4">
                <p className="my-3">Enter your coupon code if you have one.</p>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="text" placeholder="Coupon Code" className="bg-transparent h-[47px]"/>
                  <Button type="submit" className="btn my-btn hover:bg-baseColor py-0">Apply Coupon</Button>
                </div>
                </div>
              </div>
              <div className="border md:w-[50%] lg:w-[35%]">
                <h1 className="bg-white text-black p-2">CART TOTALS</h1>
                <div className="px-2 pb-4 ">
                  <div className="border-b-2 border-slate-700">
                    <div className="my-3 flex justify-between items-center"><p>Subtotal:</p> <p>${subTotal().toFixed(2)}</p></div>
                    <div className="my-3 flex justify-between items-center"><p>Vat (7%):</p> <p>${vat.toFixed(2)}</p></div>
                  </div>
                  <div className="my-3 flex justify-between items-center font-semibold"><p>Total:</p> <p>${totalPrice.toFixed(2)}</p></div>
                  <Link
                    to={{
                      pathname: "/checkout",
                      state: { subtotal: subTotal().toFixed(2), vat: vat.toFixed(2), totalPrice: totalPrice.toFixed(2) }
                    } as unknown as string} 
                    className="flex justify-end"
                  >
                    <Button type="button" className="btn my-btn hover:bg-baseColor py-0">Proceed to Checkout</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
