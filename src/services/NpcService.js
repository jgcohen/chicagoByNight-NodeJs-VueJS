import axios from 'axios'

const url = 'http://192.168.1.28:3000/pnj'

class NpcService {

    static async getNpcs(){
       return axios.get(url).then(res => res.data).catch(err => err)
    }

    static insertNpc (firstname, lastname,description, status, race, clan, faction, image){
        return axios.post(url, {
            firstname, lastname,description, status, race, clan, faction, image
        })
    }
}

export default NpcService