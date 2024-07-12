import { setSort } from "@/redux/features/filterSlice";
import { useAppDispatch } from "@/redux/hooks";

const Sorting = () => {
  const dispatch = useAppDispatch();
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "asc") {
      dispatch(setSort({ sort: "-price" }));
    }
    if (event.target.value === "desc") {
      dispatch(setSort({ sort: "price" }));
    }
  };
  return (
    <>
      <div className="mt-4 ">
        <label className="mr-2 text-md font-semibold underline">Sort By Price:</label>
        <select className="select select-bordered text-black"
          // value={sort}
          onChange={handleSortChange}
        >
          <option value="">Price</option>
          <option value="asc">High to Low</option>
          <option value="desc">Low to High</option>
        </select>
      </div>
    </>
  );
};

export default Sorting;
