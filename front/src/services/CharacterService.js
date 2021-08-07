import axios from 'axios'

const url = 'http://localhost:3000/character'

class CharacterService {

    static async getCharacters(){
       return axios.get(url).then(res => res.data).catch(err => err)
    }

   static insertCharacter (name,description){
       return axios.post(url, {
           name,description
       })
   }

   static deleteCharacter(id){
       return axios.delete(`${url}/${id}`)
   }

   static getCharacter(id){
       return axios.get(`${url}/${id}`).then(res => res.data[0]).catch(err => err)
   }

   static updateCharacter(id,name,description){
       return axios.patch(`${url}/${id}`, { name, description })
   }
}

export default CharacterService