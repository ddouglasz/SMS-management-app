import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema ({
    name: { type: String, required: true, trim: true },
    phoneNumber: { type: Number, required: true, min: 11, unique: true, },
},
 {
   timeStamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
});

const Contact = mongoose.model('contact', contactSchema);

export default Contact;