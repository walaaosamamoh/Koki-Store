import { useGetProducts } from "../../hooks/products/useGetProducts";
import { useGetCategories } from "../../hooks/useGetCategories";
import Card from "../Card";

export default function MainSection() {
  const { data: categories, isLoading, isError } = useGetCategories();
  const { data: products } = useGetProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load categories</div>;
  }

  return (
    <div className="p-6">
      {categories?.map((category) => {
        const categoryProducts = products?.filter(
          (product) => product.categoryId === category.id,
        );

        return (
          <div key={category.id} className="py-4">
            <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categoryProducts?.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
