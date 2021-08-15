import axios from 'axios'

const url = 'http://localhost:3000/SignUp'

class SignUpService {

    static insertUser (email,password,pseudo){
        return axios.post(url, {
            email,password,pseudo
        })
}
}

export default SignUpService