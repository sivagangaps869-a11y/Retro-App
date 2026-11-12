import axiosService from "../api/axiosService";

// Add product API
export const addProductAPI = async (productData) => {
return await axiosService("POST", "/products", productData);}

// Get all products API
export const getAllProductsAPI = async () => {
    return await axiosService("GET", "/products");
}