import axios from 'axios'

const url = 'http://localhost:3000/user'

class UserService {

    static async getUser(id){
        return axios.get(`${url}/${id}`).then(res => res.data[0]).catch(err => err)
    }

//    static insertCity (name,description){
//        return axios.post(url, {
//            name,description
//        })
//    }

//    static deleteCity(id){
//        return axios.delete(`${url}/${id}`)
//    }

//    static getCity(id){
//        return axios.get(`${url}/${id}`).then(res => res.data[0]).catch(err => err)
//    }

//    static updateCity(id,name,description){
//        return axios.patch(`${url}/${id}`, { name, description })
//    }
}

export default UserService