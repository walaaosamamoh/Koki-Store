import { useForm } from "@tanstack/react-form";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateProduct } from "../../../hooks/products/useUpdateProduct";
import { useGetProduct } from "../../../hooks/products/useGetProduct";
import { productSchema } from "../../../schemas/productSchema";
import { useGetCategories } from "../../../hooks/useGetCategories";

export default function UpdateProduct() {
  const updateMutation = useUpdateProduct();
  const { id } = useParams();
  const { data: product, isLoading } = useGetProduct(Number(id));
  const { data: categories } = useGetCategories();

  const navigate = useNavigate()

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: { handleChange: (value: string) => void },
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        field.handleChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const form = useForm({
    defaultValues: {
      title: product?.title ?? "",
      description: product?.description ?? "",
      categoryId: product?.categoryId ?? 1,
      price: product?.price ?? 0,
      stock: product?.stock ?? 0,
      image: product?.image ?? "",
    },

    validators: {
      onChange: productSchema,
    },

    onSubmit: async ({ value }) => {
      try {
        const product = await updateMutation.mutateAsync({
          data: value,
          id: Number(id),
        });
        console.log("Updated:", product);
        navigate("/products")
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 m-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Update product
          </h3>
          <p className="text-gray-600 text-sm">
            Edit and update this product details
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="px-6 py-4"
      >
        <form.Field name="title">
          {(field) => (
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
              />
              {field.state.meta.isTouched && (
                <p id={`${field.name}-error`} className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        </form.Field>
        <form.Field name="description">
          {(field) => (
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
              />
              {field.state.meta.isTouched && (
                <p id={`${field.name}-error`} className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        </form.Field>
         <form.Field name="categoryId">
          {(field) => (
            <div className="mb-4">
              <label
                htmlFor="categoryId"
                className="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
              >
                Category
              </label>
              <select
                name="categoryId"
                id="categoryId"
                value={field.state.value}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
              >
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
              {field.state.meta.isTouched && (
                <p id={`${field.name}-error`} className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        </form.Field>
        <form.Field name="price">
          {(field) => (
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
              >
                Price
              </label>
              <input
                type="number"
                min={0}
                step={0.01}
                id="price"
                value={field.state.value}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
              />
              {field.state.meta.isTouched && (
                <p id={`${field.name}-error`} className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        </form.Field>
        <form.Field name="stock">
          {(field) => (
            <div className="mb-4">
              <label
                htmlFor="stock"
                className="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
              >
                Stock
              </label>
              <input
                type="number"
                id="stock"
                value={field.state.value}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
              />
              {field.state.meta.isTouched && (
                <p id={`${field.name}-error`} className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        </form.Field>
        <form.Field name="image">
          {(field) => (
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, field)}
                className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
              />
              {field.state.meta.isTouched && (
                <p id={`${field.name}-error`} className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
              {field.state.value && (
                <img
                  src={field.state.value}
                  alt="Preview"
                  className="mt-4 w-40 h-40 object-cover rounded-lg"
                />
              )}
            </div>
          )}
        </form.Field>
        <button
          type="submit"
          disabled={updateMutation.isPending}
          className="block px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded-lg text-white m-auto cursor-pointer shadow-sm"
        >
          Update
        </button>
      </form>
    </div>
  );
}
