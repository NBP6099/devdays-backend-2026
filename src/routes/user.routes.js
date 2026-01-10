import { Router } from "express";
import { addUser, getUser, getUsers, removeUser } from "../controllers/user.controller.js";
import { validateCreateUser } from "../middlewares/user.middleware.js";
import { verifyToken } from "../middlewares/auth.middleware.js"; // <--- Importamos al guardia

export const userRouter = Router();

// Estas rutas siguen siendo públicas (o podrías protegerlas si quisieras)
userRouter.post('/users', validateCreateUser, addUser);
userRouter.get('/users/:id', getUser);

// --- RUTAS PROTEGIDAS ---
// Ahora ponemos el 'verifyToken' antes de la función final
userRouter.get('/users', verifyToken, getUsers); // Solo logueados ven la lista
userRouter.delete('/users/:id', verifyToken, removeUser); // Solo logueados pueden borrar