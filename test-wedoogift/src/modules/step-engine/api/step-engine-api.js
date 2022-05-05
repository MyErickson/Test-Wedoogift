import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.headers.common['Authorization'] ="tokenTest123"

export const searchCombination =async (shopId,amount)=>{
    return await axios.get(`/shop/${shopId}/search-combination`,{
      params: {amount}
    })
}