import { User } from '../models/user.model.js';

export const getAllUsers = async () => {
    return await User.find(); // Busca en la base de datos real
};

export const createUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save(); // Guarda en MongoDB
};

export const getUserById = async (id) => {
    return await User.findById(id);
};

export const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};