import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long']
    },
    email: { 
        type: String,
        required: [true, 'Email is required'],
        unique: true, 
        lowercase: true
    },
    password: { 
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// --- Lógica de Seguridad ---
// Antes de guardar, encriptamos la contraseña de forma asíncrona
userSchema.pre('save', async function () {
    // Si la contraseña no ha cambiado, no hacemos nada
    if (!this.isModified('password')) return;
    
    // Generamos la "sal" y encriptamos
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    // Al ser una función async, Mongoose sabe cuándo termina sin usar next()
});

// Método para comparar contraseñas (útil para el login)
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

export const User = model('User', userSchema);