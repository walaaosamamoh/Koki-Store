import { useParams } from "react-router-dom";
import { useGetProduct } from "../../../hooks/products/useGetProduct";
import { useGetCategory } from "../../../hooks/useGetCategory";

export default function ShowProduct() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProduct(Number(id));

  const { data: category } = useGetCategory(product?.categoryId);

  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (isError || !product) {
    return <div>Faild to load product</div>;
  }

  return (
    <div className="m-8">
      <h1 className="font-semibold text-xl md:text-3xl mb-4 md:mb-8">
        {product?.title}
      </h1>
      {/*  info  */}
      <div className="h-auto md:h-96 mb-10 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 w-full md:h-full h-64 rounded-xl overflow-hidden mb-2">
          <img
            src={product?.image}
            alt="product image"
            className="size-full object-cover"
          />
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-sm md:text-xl">
            Title:{" "}
            <span className="text-gray-600 font-normal text-md">
              {product?.title}
            </span>
          </p>
          <p className="font-semibold text-sm md:text-xl">
            Category:{" "}
            <span className="text-gray-600 font-normal text-md">
              {category?.title}
            </span>
          </p>
          <p className="font-semibold text-sm md:text-xl">
            Description:{" "}
            <span className="text-gray-600 font-normal text-md">
              {product?.description}
            </span>
          </p>
          <p className="font-semibold text-sm md:text-xl">
            Price:{" "}
            <span className="text-yellow-500 font-semibold text-2xl">
              ${product?.price}
            </span>
          </p>
          <p className="font-semibold text-sm md:text-xl">
            On Stock:{" "}
            <span
              className={`text-gray-500 font-semibold text-2xl ${product?.stock > 10 ? "text-green-600" : "text-red-600"}`}
            >
              {product?.stock}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
