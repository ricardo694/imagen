import { Router } from "express";
import Infocontroller from '../controller/infocontroller.js'

const router=new Router()

//Obtener info
router.get('/info',Infocontroller.index)
router.post('/info',Infocontroller.store)
router.get('/info/:id',Infocontroller.details)

export default router