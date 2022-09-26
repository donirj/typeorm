import "reflect-metadata"
import app from './app'
import {AppDataSource} from './db'

async function main() {
    try {
        await AppDataSource.initialize()
        console.log('database connected')
        app.listen(3000)
        console.log('srv listen on port', 3000)
    } catch (error) {
        console.log(error)
    }
}

main()