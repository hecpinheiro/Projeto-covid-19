import axios from 'axios'

const api = axios.create({ baseURL: 'https://brasil.io/api/dataset/covid19/caso/data' })

export default api