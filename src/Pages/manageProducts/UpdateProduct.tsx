/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetSpecificProductQuery, useUpdateProductMutation } from "@/redux/api/productApi";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //get specific data
  const [updateProduct] = useUpdateProductMutation();
  const { data:data, isLoading } = useGetSpecificProductQuery(id);
  // const existingItem=data?.data
  //update product

  const { register, handleSubmit } = useForm({
    values: data?.data,
    resetOptions: {
      keepDirtyValues: true, // keep dirty fields unchanged, but update defaultValues
    },
  });

  // image upload process
  const handleImageUpload = async (file: string | Blob) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch("https://api.imgbb.com/1/upload?expiration=600&key=856f2e6524153ff445786eb409f385dd",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data.data;
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (data: any) => {
    const file = data.image[0];
    const imageData = await handleImageUpload(file);
    const image = imageData?.display_url;

    const { name, price, category, description, stock } = data;
    const product = {
      name: name,
      price: price,
      category: category,
      description: description,
      stock: stock,
      image: image ? image : null,
    };
    await updateProduct({ id, product });
    toast.success("Product updated successfully");
    alert("Product updated successfully")
    navigate("/product-management");
  };

  if(isLoading){
    return <h1>Loading-------</h1>
  }
  return (
    <><div className=" md:w-3/4 md:mx-auto mb-8 p-4">
    <div className="w-full h-full shadow-lg shadow-baseColor">
      <h1 className="text-3xl font-bold p-2 bg-slate-200 text-black pl-6">Update Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-3 py-2 border rounded bg-black"
            // defaultValue={existingItem.name}
          />
        </div>
        <div className="grid md:grid-cols-2 justify-between gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Price</span>
            </label>
            <input
              type="number"
              {...register("price")}
              className="w-full px-3 py-2 border rounded bg-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Stock</span>
            </label>
            <input
              type="number"
              {...register("stock")}
              className="w-full px-3 py-2 border rounded bg-black"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 justify-between ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Category</span>
            </label>
            <select
              {...register("category")}
              className="select select-bordered w-full max-w-xs bg-black"
              required
            >
              <option disabled selected>
                Select Category
              </option>
              <option>Accessories</option>
              <option>Gym Equipment</option>
              <option>Cardio Equipment</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Image</span>
            </label>
            <input
              type="file"
              className="w-full px-3 py-2 border rounded bg-black"
              {...register("image")}
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="w-full px-3 py-2 border rounded bg-black"
            required
          />
        </div>
        <div className="form-control mt-6 w-1/4">
          <button className="btn my-btn">Update</button>
        </div>
      </form>
    </div>
  </div>
    </>
  );
};

export default UpdateProduct;