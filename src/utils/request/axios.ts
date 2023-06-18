import axios, { type AxiosResponse } from 'axios'
import VueCookies from 'vue-cookies'
import { useAuthStore } from '@/store'
import { setCookie } from '@/utils/setCookie'

const service = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
})

// withCredentials: true,

service.interceptors.request.use(
  (config) => {
    // const token = useAuthStore().token
    // if (token)
    //   config.headers.Authorization = `Bearer ${token}`
		let user_token =  VueCookies.get('user_token')
    if ( user_token){
			config.headers.user_token =  user_token
			setCookie('user_token',  user_token)
		}

    return config
  },
  (error) => {
    return Promise.reject(error.response)
  },
)

service.interceptors.response.use(
  (response: any): any => {
    if (response.status === 200)
      return response

    throw new Error(response.status.toString())
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
