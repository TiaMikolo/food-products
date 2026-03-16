import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:3000' })

api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('token')
  if (token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      /* logout */
    }
    return Promise.reject(err)
  }
)

export default api
