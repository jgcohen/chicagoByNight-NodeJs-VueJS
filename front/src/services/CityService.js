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
    
    static insertCity (name,description){
        return axios.post(url, {
            name,description
        })
    }

    static deleteCity(id){
        return axios.delete(`${url}${id}`)
    }

    static getCity(id){
        //  console.log(axios.get(`${url}${id}`))
        return axios.get(`${url}${id}`)
    }

    static updateCity(id,name,description){
        return axios.patch(`${url}${id}`,name,description)
    }
 }

 export default CityService