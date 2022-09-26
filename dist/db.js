"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
//conxion de la bd
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Reforma01!',
    port: 5432,
    //a que bd se va conectar
    database: 'typeormdb',
    //es para que nosotros podamos pasar que entidades o clases queremos que cargue la bd, que tabla queremos que genere typeorm por nosotros
    entities: [],
    //para ver los mensajes en la terminal, si revisas aparecen los queries con las consultas hechas
    logging: true
});
