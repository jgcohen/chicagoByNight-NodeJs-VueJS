import axios from 'axios'

const url = 'http://localhost:3000/login'

class LoginService {

    static connectUser (email,password){
        return axios.post(url, {
            email,password
        })
      
}
}

export default LoginService