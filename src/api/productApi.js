import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    return axiosClient.get("/products", { params });
  },

  get: (id) => {
    return axiosClient.get(`/products/${id}`);
  },
};

export default productApi;
