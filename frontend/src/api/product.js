import { useEffect, useState } from 'react'
import api from './axiosInstance'

export const useGetProducts = () => {
  const [listProduct, setListProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        const listOfProduct = await api.get('/products')
        setListProduct(listOfProduct.data)
      } catch (error) {
        console.log('use effect error', error.message)
      }

      setIsLoading(false)
    }
    fetchData()
  }, [])
  return { listProduct, isLoading }
}
