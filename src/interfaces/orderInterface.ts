interface IOrder {
  id: number;
  userId: number;
  productsIds: number[];
}

interface IOrderWithourProductsIds {
  id: number;
  userId: number;
}

interface ICreatedOrder {
  userId: number;
  productsIds: number[];
}

export {
  IOrder,
  IOrderWithourProductsIds,
  ICreatedOrder,
};