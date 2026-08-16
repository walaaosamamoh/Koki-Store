import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../api/products.api";

export function useGetProduct(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
}
