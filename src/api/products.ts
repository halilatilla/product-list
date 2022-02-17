import { fetch } from './fetch'

export const getAllProducts = async () => {
  const response = await fetch.get('/mock_data.json')
  return response.data
}
