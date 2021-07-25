import express from 'express' 
import { addCity, getCities, getCity, updateCity, deleteCity } from '../controllers/cityController.js'
import { catchErrors } from '../helpers.js'

 
const router = express.Router()

router.get('/', (req, res) =>{
    res.send("Welcome to Chicago")
})

router.get('/city', catchErrors(getCities))
router.get('/city/:id', catchErrors(getCity))
router.post('/city', catchErrors(addCity))
router.patch('/city/:id', catchErrors(updateCity))
router.delete('/city/:id', catchErrors(deleteCity))

export default router 