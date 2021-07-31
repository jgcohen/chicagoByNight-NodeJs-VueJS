import express from 'express' 
import passport from 'passport'
import { addCity, getCities, getCity, updateCity, deleteCity } from '../controllers/cityController.js'
import { catchErrors } from '../helpers.js'
import  jwt  from 'jsonwebtoken'
 
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
router.post('/login',(req,res,next)=>{
    passport.authenticate('login',async(err,user)=>{
        try{
          if (err || !user){
              const error = new Error('error occured')
              return next(error)
          }  
          req.login(user,{session: false}, async error =>{
              if(error)return next(error)
              const body = {_id:user._id, email: user.email}
              const token = jwt.sign({user:body},'orihulk17')  
              res.json({token, body})
          })
        }catch(error){
            return next (error)
        }
    })(req,res,next)
})

export default router 