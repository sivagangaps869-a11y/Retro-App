import axiosService from "../api/axiosService";

export const registerAPI = async (userDetails) => {
    return await axiosService('POST', '/login_users', userDetails)
}

export const getUsersAPI = async () => {
    return await axiosService('GET', '/login_users', {})
}