import { Router } from 'express'
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/user.controllers'

const router = Router()

//hello world mensaje
// router.get('/hello', (req, res) => res.send('hello world'))

//crear usuario
//traemos la funcion de crear el usuario
router.post("/users", createUser)

//peticion leer usuarios
router.get("/users", getUsers)

//ruta de update
router.put("/users/:id", updateUser)

//delete
router.delete("/users/:id", deleteUser)

export default router