import express from 'express';
import {
    createUserHandler,
    deleteUserHandler,
    getUserHandler,
    getUsersHandler,
    updateUserHandler,
} from '../controllers/user.controller';
import { validate } from '../middleware/validate';
import {
    createUserSchema,
    deleteUserSchema,
    getUserSchema,
    updateUserSchema,
} from '../schemas/user.schema';

const router = express.Router();

router
    .route('/')
    .post(validate(createUserSchema), createUserHandler)
    .get(getUsersHandler);

router
    .route('/:userId')
    .get(validate(getUserSchema), getUserHandler)
    .patch(validate(updateUserSchema), updateUserHandler)
    .delete(validate(deleteUserSchema), deleteUserHandler);

export default router;