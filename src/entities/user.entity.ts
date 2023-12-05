import {Column, Entity} from 'typeorm';
import Model from './model.entity';

@Entity('users')
export class User extends Model {
    @Column()
    name: string;

    @Column()
    email: string;
}