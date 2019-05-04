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
    const { sender, text, receiver } = req.body

    Contact.findOne({ phoneNumber: receiver })
      .select('_id name phoneNumber')
      .then((receiverContact) => {
        if (!receiverContact) {
          return res.status(404).json({
            message: 'Contact not found',
          })
        } else if (receiverContact.phoneNumber.toString() === sender) {
          return res.status(400).json({
            message: 'Cannot send text message to self'
          })
        } else if (receiverContact.phoneNumber.toString() !== receiver) {
          return res.status(400).json({
            message: 'Wrong contact number'
          })
        }
        let sms1 = new Sms({
          sender, receiver, text, contact: receiverContact._id, status: 'sent'
        })
        let sms2 = new Sms({
          sender, receiver, text, contact: receiverContact._id, status: 'received'
        })
        sms2.save()
        return sms1
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
  //get all sms controller
  // eslint-disable-next-line require-jsdoc
  static getAllSms(req, res) {
    Sms.find()
      // .select('_sender, receiver, text, created_at, updated_at')
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
  /** 
* @description test controller.
* @param {object} req - the sent request.
* @param {object} res - the expected response.
* @returns {object} - the return function.
*/
  //get all sent sms controller
  // eslint-disable-next-line require-jsdoc
  static getSentSms(req, res) {
    const { phoneNumber } = req.params;
    const sentSmsRequests = { sender: phoneNumber, status: 'sent' }
    Sms.find(sentSmsRequests)
      .populate('contact')
      .exec()
      // .select('_sender, receiver, text, created_at, updated_at')
      .then((allSentSms) => {
        return res.status(200).json({
          success: true,
          message: 'All sent Sms',
          sentSms: allSentSms
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

    /** 
* @description test controller.
* @param {object} req - the sent request.
* @param {object} res - the expected response.
* @returns {object} - the return function.
*/
  //get all received sms controller
  // eslint-disable-next-line require-jsdoc
  static getReceivedSms(req, res) {
    const { phoneNumber } = req.params;
    const receivedSmsRequests = { receiver: phoneNumber, status: 'received' }
    Sms.find(receivedSmsRequests)
      .populate('contact')
      .exec()
      // .select('_sender, receiver, text, created_at, updated_at')
      .then((allReceivedSms) => {
        return res.status(200).json({
          success: true,
          message: 'All received Sms',
          receivedSms: allReceivedSms
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