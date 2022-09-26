import {DataSource} from 'typeorm'
import {User} from './entities/User'
//conxion de la bd
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Reforma01!',
    port: 5432,
    //a que bd se va conectar
    database: 'typeormdb',
    //es para que nosotros podamos pasar que entidades o clases queremos que cargue la bd, que tabla queremos que genere typeorm por nosotros
    //User será una clase
    entities: [User],
    //para ver los mensajes en la terminal, si revisas aparecen los queries con las consultas hechas
    logging: true,
    //synchronice lee las entidades y vuelve a crearlas
    synchronize: true
})