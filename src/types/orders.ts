type orderProduct = {
  productId: number;
  qty: number;
};

export type order = {
  id: number;
  userId: number;
  products: orderProduct[];
  total: number;
  status: string;
};
