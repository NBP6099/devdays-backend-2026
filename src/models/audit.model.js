import { Schema, model } from 'mongoose';

const auditSchema = new Schema({
    endpoint: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    responseTime: {
        type: Number, 
        required: true
    },
    threshold: { 
        type: Number, 
        default: 100 
    },
    status: { 
        type: String, 
        enum: ['OK', 'SLA_VIOLATION'], // Indica si cumplió o no
        required: true 
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    }
});

export const Audit = model('Audit', auditSchema);