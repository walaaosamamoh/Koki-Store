import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../api/category.api";

export function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });

      queryClient.invalidateQueries({
        queryKey: ["category", id],
      });
    },
  });
}
