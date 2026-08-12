import { useQuery } from "@tanstack/react-query";
import { getProductsByCategoryId } from "../api/category.api";

export function useGetProductsCategory(id: number | undefined) {
  return useQuery({
    queryKey: ["products", "category", id],
    queryFn: () => {
      if (id === undefined) {
        throw new Error("Category ID is required");
      }

      return getProductsByCategoryId(id);
    },
    enabled: id !== undefined,
  });
}
