import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api/orders.api";

export function useGetOrders(){
    return useQuery({
        queryKey: ["orders"],
        queryFn: getOrders,
    })
}