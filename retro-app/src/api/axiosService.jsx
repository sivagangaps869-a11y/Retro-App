import axiosInstance from "./axiosInstance";

//api call should be call by component axiosService
const axiosService=async(httpMethod,url,reqBody)=>{
    
        const reqConfig={
            method: httpMethod,
            url,
            data:reqBody
        }
        try{
            const response=await axiosInstance(reqConfig)
            return response
    }catch(err){
        console.log(err);
        throw err
        
    }
}

export default axiosService