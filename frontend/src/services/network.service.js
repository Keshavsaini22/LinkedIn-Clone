import axios from 'axios'
const backendUrl = process.env.REACT_APP_BACKEND_URL
// export const getSuggestionsService=(config)=> axios.get(`${backendUrl}/connection/suggestions`, config)
export const getSuggestionsService = (config) => axios.get(`http://localhost:8080/connection/suggestions`, config)