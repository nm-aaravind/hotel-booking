import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export const register =  async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/users/register`, JSON.stringify(formData) ,{
            headers: {
                "Content-Type":"application/json"
            }
        })
        if(response.status !== 200){
            throw Error(response.data.message)
        }
        return response.data
    } catch (error) {
        console.log(error.response)
        throw Error(error.response.data.message)
    }
}

export const validateToken = async () => {
    try {
        const response = axios.get(`${API_BASE_URL}/api/users/test`);
        console.log(response, "Inside frontend api")
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}