import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory } from "../api/category.api";

export function useUpdateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCategory,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });

      queryClient.invalidateQueries({
        queryKey: ["category", variables.id],
      });
    },
  });
}
