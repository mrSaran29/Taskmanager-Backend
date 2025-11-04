const express=require('express')
const router=express.Router()
const { getUser, postUser, putUser, deleteUser } = require('../Controller/Controller.js')


router.get('/note',getUser)

router.post('/addnote',postUser)

router.put('/updatenote/:id',putUser)

router.delete('/deletenote/:id',deleteUser)

module.exports=router