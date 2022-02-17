import { fetch } from './fetch'

export const getAllProducts = async () => {
  const response = await fetch.get('/products.json')
  return response.data
}
