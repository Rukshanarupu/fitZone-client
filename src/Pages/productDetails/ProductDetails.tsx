import { useGetSpecificProductQuery } from "@/redux/api/productApi";
import { setToCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast'

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSpecificProductQuery(id);
  // destructure single product
  const product = data?.data;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);
  // console.log(cart);

  if (isLoading) {
    return <div>Loading----------</div>;
  }

  // find matching cart item
  const cartItem = cart.items.find((item) => item._id === product._id);
  // console.log(cartItem);

  //check is the product out of stock or not
  const isProductOutOfStock = cartItem ? cartItem.quantity >= product.stock : false;
  // console.log(isProductOutOfStock);
  const handleAddToCart = async () => {
    if (!isProductOutOfStock) {
      dispatch(setToCart(product));
      toast.success("Product added to cart successfully!");
      console.log("Successfully added cart!");
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl w-full">
      <div className="card card-side shadow-xl mb-8">
        <figure>
          <img
            className="w-full md:h-96"
            src={product.image}
            alt={product.name}
          />
        </figure>
        <div className="card-body">
          <h1 className="text-3xl font-bold mb-0">{product.name}</h1>
          <p className="text-xl mb-0">price: ${product.price}</p>
          <p className="mb-0">Stock: {product.stock}</p>
          <p className="mb-0">Description: {product.description}</p>
          <div className="card-actions justify-end">
            <button
              className={`btn  ${
                isProductOutOfStock ? "btn-disabled" : "my-btn"
              }`}
              onClick={handleAddToCart}
              disabled={isProductOutOfStock}
            >
              {isProductOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;