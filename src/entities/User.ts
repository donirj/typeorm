import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    BaseEntity
} from "typeorm";

@Entity('users')
//extends es para heredar propiedades, User va heredar de BaseEntity
export class User extends BaseEntity{

    //cada usuario tendrá
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string;

    @Column({unique: true})
    email: string;

    @Column()
    lastname: string;

    @Column({
        default: true
    })

    active: boolean
    
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAd: Date;
}