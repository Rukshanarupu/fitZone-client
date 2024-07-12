import { removeCategory, setCategory } from "@/redux/features/filterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { categoriesArr } from "@/utils/categoryArr";
  
  const Category = () => {
    const dispatch = useAppDispatch();
    // get local categories
    const { categories } = useAppSelector((state: RootState) => state.filters);
  
    // dispatch category
    const handleCategoryChange = (category: string) => {
      if (categories.includes(category)) {
        dispatch(removeCategory(category));
      } else {
        dispatch(setCategory(category));
      }
    };
    return (
      <>
        <div className="flex space-x-4 mt-4 justify-end">
          <label className="text-md font-semibold underline">Filter product:</label>
          {categoriesArr.map((category) => (
            <label key={category.name} className="flex items-center space-x-2">
              <input type="checkbox" className="checkbox bg-green-200"
                onChange={() => handleCategoryChange(category.name)}
              />
              <span className="font-light">{category.name}</span>
            </label>
          ))}
        </div>
      </>
    );
  };
  
  export default Category;
  