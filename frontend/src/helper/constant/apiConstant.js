import envVariables from "./envVariables";

const {backendBaseUrl, nodeEnvironment}  = envVariables 

const BASE_URL = nodeEnvironment !== "production" ? backendBaseUrl : "/api/v1";

const API = {
    Product:{
        CREATE:`${BASE_URL}/products`,
        GET:`${BASE_URL}/products`,
        UPDATE:(id) => `${BASE_URL}/products/${id}`,
        DELETE:(id) => `${BASE_URL}/products/${id}`
    }

}

export default API; 

