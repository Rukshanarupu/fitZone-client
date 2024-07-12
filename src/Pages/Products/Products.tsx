import Sorting from "@/components/my-ui/Sorting";
import Category from "./Category";
import SearchBar from "@/components/my-ui/SearchBar";
import Heading from "@/components/shared/Heading";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCategory } from "@/redux/features/categorySlice";
import { RootState } from "@/redux/store";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { TProducts } from "@/types/types";
import { Link } from "react-router-dom";
import { clearFilters } from "@/redux/features/filterSlice";


const Products = () => {
  const dispatch = useAppDispatch();

  // grab category name from local state
  const selectedCategory = useAppSelector(
    (state: RootState) => state.category.category
  );

  // grab filtering value from local state
  const { searchTerm, sort, categories } = useAppSelector(
    (state: RootState) => state.filters
  );

  // console.log('Category:', selectedCategory);
  // console.log('Filters:', { searchTerm, sort, categories });

  // data fetching
  const {data: products, isLoading} = useGetProductsQuery({category: selectedCategory,
    searchTerm,
    sort,
    categories});
  // console.log('Products data:', products);

  // reset filters
  const handleFilterReset = () => {
    dispatch(clearCategory());
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="my-10 mx-auto max-w-screen-xl w-full ">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <SearchBar></SearchBar>
          <Sorting></Sorting>
          {/* clear button */}
          <button className="my-btn mt-4" onClick={() => dispatch(clearFilters())}>Clear Filters</button>
        </div>
        <Category></Category>
        <Heading heading="Products"></Heading>
        {selectedCategory && (
          <div className="mb-4">
            <span className="mr-2">Category: {selectedCategory}</span>
            <button className="btn btn-secondary" onClick={handleFilterReset}>
              Clear Filter
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.data?.map((product: TProducts) => (
            <div key={product._id} className="border p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4"/>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl">{product.name}</h2>
                  <p>Price: ${product.price}</p>
                </div>

                <div className="flex justify-end">
                  <Link to={`/product-details/${product._id}`}
                    className="btn my-btn mt-2 "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
