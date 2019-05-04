import mongoose, { Schema } from 'mongoose';

const smsSchema = new Schema ({
    sender: { type: String, required: true, trim: true, max:50 },
    receiver: { type: String, required: true, trim: true },
    text: { type: String, required: true, trim: true },
    contact: { type: Schema.Types.ObjectId, ref: 'contact' },
    status: { type: String, enum: ['sent', 'received'] }
},
 {
   timeStamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
});

const Sms = mongoose.model('sms', smsSchema);

export default Sms;
