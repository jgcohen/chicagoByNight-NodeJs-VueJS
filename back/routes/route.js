import express from 'express' 
import passport from 'passport'
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
router.post('/signup', passport.authenticate('signup', {session: false}),
async(req,res,next)=>{
    res.json({
        message: 'Signup OK',
        user:  req.user
    })
})

export default router 