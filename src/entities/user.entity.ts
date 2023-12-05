import {Column, Entity} from 'typeorm';
import Model from './model.entity';

@Entity('users')
export class User extends Model {
    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    email: string;
}