import axios from 'axios'

const axiosinstance=axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})


//global error handling

axiosinstance.interceptors.response.use(
    (response)=>{
        console.log("Response Received");
        return response
        
    },
    (error)=>{
        if(error.response){
            const status = error.reponse.status
            if(status==401){
                console.log("Unauthorised Access - Redirect to login page");
                
            }else if(status==404){
                console.log('API not found');
                
            }else if(status==500){
                console.log("Something went wrong..try again later!!!");
                
            }else if(error.request){
                console.log("No response from server");
                
            }else{
                console.log("Error" + error.message);
                
            }
            return Promise.reject(error)
        }
    }
)



export default axiosinstance