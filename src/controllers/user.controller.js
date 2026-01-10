import { getAllUsers, getUserById, createUser, deleteUser } from '../services/user.service.js';

export const getUsers = async (req, res) => {
    const users = await getAllUsers();
    res.status(200).json(users);
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);
    if (user) res.status(200).json(user);
    else res.status(404).json({ message: 'User not found' });
};

export const addUser = async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const removeUser = async (req, res) => {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    if (deletedUser) res.status(200).json(deletedUser);
    else res.status(404).json({ message: 'User not found' });
};