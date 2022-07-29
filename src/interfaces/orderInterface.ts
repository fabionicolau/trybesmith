interface IOrder {
  id: number;
  userId: number;
  productsIds: number[];
}

interface IOrderWithourProductsIds {
  id: number;
  userId: number;
}

export {
  IOrder,
  IOrderWithourProductsIds,

};