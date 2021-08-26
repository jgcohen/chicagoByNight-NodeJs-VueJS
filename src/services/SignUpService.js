import axios from 'axios'

const url = 'http://192.168.1.28:3000/SignUp'

class SignUpService {

    static insertUser (email,password,pseudo){
        return axios.post(url, {
            email,password,pseudo
        })
}
}

export default SignUpService