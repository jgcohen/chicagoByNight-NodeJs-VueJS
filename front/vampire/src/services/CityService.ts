import { City } from '@/models/city.model'
import axios from 'axios'
const API_URL = process.env.VUE_APP_API_ENDPOINT + '/contents'

class CityService {
    async findAll(): Promise<City[]> {
      const response = await axios.get(`${API_URL}/findAll`)
      return response.data
    }
}

export default new CityService()