import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const registerUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

export const loginUser = async (email, password) => {
    // 1. Buscamos al usuario por email
    const user = await User.findOne({ email });
    if (!user) throw new Error('Usuario no encontrado');

    // 2. Comparamos la contraseña usando el método que creamos en el modelo
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Contraseña incorrecta');

    // 3. Si todo es ok, generamos el Token (JWT)
    const token = jwt.sign(
        { id: user._id.toString() }, 
        process.env.JWT_SECRET,     
        { expiresIn: '1h' }
    );

    return { user, token };
};