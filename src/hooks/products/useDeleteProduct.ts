import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../api/products.api";

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      queryClient.invalidateQueries({
        queryKey: ["product", id],
      });
    },
  });
}
