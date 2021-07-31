import axios from 'axios'

const url = 'http://localhost:3000/SignUp'

class SignUpService {

    static insertUser (email,password){
        return axios.post(url, {
            email,password
        })
}
}

export default SignUpService