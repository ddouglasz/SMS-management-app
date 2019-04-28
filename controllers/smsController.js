import Contact from '../models/contactModel';
import Sms from '../models/smsModel';

// eslint-disable-next-line require-jsdoc
class SmsController {
    /** 
     * @description test controller.
     * @param {object} req - the sent request.
     * @param {object} res - the expected response.
     * @returns {object} - the return function.
     */
    //create contact controller
    // eslint-disable-next-line require-jsdoc
    static sendSms(req, res) {
        const { sender, text, reciever } = req.body
        const { contactId } = req.params;

        let sms = new Sms({ sender, reciever, text })
        
        Contact.findById(contactId)
        .select('id name phoneNumber')
        .then((recieverContact) => {
        if (!recieverContact) {
          return  res.status(404).json({
            message: 'Contact not found',
        })
        }else if(recieverContact.phoneNumber.toString() === sender) {
           return res.status(400).json({
            message: 'Cannot send text message to self'
        })
        }else if(recieverContact.phoneNumber.toString() !== reciever) {
           return res.status(400).json({
            message: 'Wrong contact number'
        })
        }
        return sms
        .save()
        .then((newSms) => {
            return res.status(200).json({
                success: true,
                message: 'message sent',
                sms: newSms
            })
         })
      })
        .catch((error) => {
            res.status(500).json({
                success: false,
                error: error.message
            })
        })
    }
    
       /** 
    * @description test controller.
    * @param {object} req - the sent request.
    * @param {object} res - the expected response.
    * @returns {object} - the return function.
    */
    //get all contacts controller
    // eslint-disable-next-line require-jsdoc
    static getAllSms(req, res) {
    Sms.find()
        // .select('_sender, reciever, text, created_at, updated_at')
        .then((allSms) => {
            return res.status(200).json({
                success: true,
                message: 'All Sms',
                allSms: allSms
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error, please try again',
                error: error.message,
            });
        })
    }

}

export default SmsController;