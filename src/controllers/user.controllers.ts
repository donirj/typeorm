import { Request, Response } from 'express'
import { userInfo } from 'os'
import { User } from '../entities/User'

//peticion de crear usuarios
//para que await funcione, debemos colocar async
export const createUser = async (req: Request, res: Response) => {
    try {
        //extraemos first y lastname
        const {firstname, lastname} = req.body

        //vamos a generar un nuevo usuario aqui
        const user = new User()
        user.firstname = firstname;
        user.lastname = lastname;
    
        await user.save()
    
        console.log(user);
        return res.json(user)
    } catch (error) {
        //codigo de estado para un error
        //si el error es una instancia
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message})
        }
    }
}

export const getUsers = async (req: Request, res: Response) => {
    
    try {
        const users = await User.find()
        return res.json(users)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const {firstname, lastname} = req.body
    const {id} = req.params

    const user = await User.findOneBy({id: parseInt(req.params.id)})
    
    if(!user) return res.status(404).json({message: 'user does not exist'})

    User.update({id: parseInt(id)}, req.body)

    user.save();

    return res.sendStatus(204)
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const {id} = req.params

        const result = await User.delete({id: parseInt(id)})
        console.log(result)

        if(result.affected === 0) {
            return res.status(404).json({message: 'user not found'})
        }

        return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const getUser = async (req: Request, res: Response) => {

    try {
        const {id} = req.params
        const user = await User.findOneBy({id: parseInt(id)})
        return res.json(user)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}