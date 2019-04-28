import mongoose, { Schema } from 'mongoose';

const smsSchema = new Schema ({
    sender: { type: String, required: true, trim: true, max:50 },
    reciever: { type: String, required: true, trim: true },
    text: { type: String, required: true, trim: true },
},
 {
   timeStamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
});

const Sms = mongoose.model('sms', smsSchema);

export default Sms;