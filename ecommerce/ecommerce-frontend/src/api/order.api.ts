import api from "./axios";

const orderApi = {
  get: () => {
    return api.get("/carts");
  },
  create: (payload: {}) => {
    return api.post("/orders", payload);
  },
  update: (cartId: number, quantity: number) => {
    return api.put(`/carts/${cartId}`, { quantity });
  },
  delete: (cartId: number) => {
    return api.delete(`/carts/${cartId}`);
  },
  verification: (payload: { token: string }) => {
    return api.post(`/orders/verification`, payload);
  },
};

export const getCartItems = () => {
  return api.get("/carts");
};

export default orderApi;
