import api from "./axios";

const cartApi = {
  get: () => {
    return api.get("/carts");
  },
  create: (payload: { productId: number }) => {
    return api.post("/carts", payload);
  },
  //   create: (data: { productId: number }) => {
  //     return api.post("/carts",{
  //         data :data
  //     });
  //   },
};

export const getCartItems = () => {
  return api.get("/carts");
};

export default cartApi;
