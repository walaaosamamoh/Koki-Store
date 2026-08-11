import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../api/category.api";

export function useGetCategory(id: number) {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategory(id),
  });
}
