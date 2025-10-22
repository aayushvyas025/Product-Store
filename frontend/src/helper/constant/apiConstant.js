import envVariables from "./envVariables";

const {backendBaseUrl}  = envVariables 



const API = {
    Product:{
        CREATE:`${backendBaseUrl}/products`,
        GET:`${backendBaseUrl}/products`,
        UPDATE:(id) => `${backendBaseUrl}/products/${id}`,
        DELETE:(id) => `${backendBaseUrl}/products/${id}`
    }

}

export default API; 

