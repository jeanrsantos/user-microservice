import { Request } from 'express';
import { User } from '../entities/user.entity';
import { AppDataSource } from '../utils/data-source';

const userRepository = AppDataSource.getRepository(User);

export const createUser = async (input: Partial<User>) => {
    return await userRepository.save(userRepository.create({ ...input }));
};

export const getUser = async (userId: string) => {
    return await userRepository.findOneBy({ id: userId });
};

export const findUsers = async (req: Request) => {
    const builder = userRepository.createQueryBuilder('user');

    if (req.query.search) {
        builder.where('user.name LIKE :search OR user.email LIKE :search', {
            search: `%${req.query.search}%`,
        });
    }

    if (req.query.sort) {
        const sortQuery = req.query.sort === '-price' ? 'DESC' : 'ASC';
        builder.orderBy('user.name', sortQuery);
    }

    return await builder.getMany();
};