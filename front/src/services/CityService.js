 import axios from 'axios'

 const url = 'http://localhost:3000/city/'

 class CityService{
    
    static async getCities(){
       
            try{
                const res= await axios.get(url)
                const data = res.data
                 return data
                
            } catch(err){
                return err;
            }
        }
    
    static insertCity (name){
        return axios.post(url, {
            name
        })
    }

    static deleteCity(id){
        return axios.delete(`${url}${id}`)
    }
 }

 export default CityService