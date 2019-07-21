import axios from 'axios'

export const fetchListAPI = (page) => axios.get(`/datas/data${ page }.json`)