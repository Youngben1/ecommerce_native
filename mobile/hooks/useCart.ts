import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useApi } from "@/lib/api";
import { Cart } from "@/types";


const useCart = () => {
    const api = useApi();
    const queryClient = useQueryClient();

    const {data: cart, isLoading, isError} = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const {data} = await api.get<{cart: Cart}>("/cart");
            return data.cart;
        }
    });

    const addToCartMutation = useMutation({
    mutationFn: async ({ productId, quantity = 1 }: { productId: string; quantity?: number }) => {
      const { data } = await api.post<{ cart: Cart }>("/cart", { productId, quantity });
      return data.cart;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });


  return {
    addToCart: addToCartMutation.mutate,
    isAddingToCart: addToCartMutation.isPending,
  };
};

export default useCart;