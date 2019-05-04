import express from 'express';

const  router = express.Router();

import ContactController from '../controllers/contactController';
import SmsController from '../controllers/SmsController';

router.post('/contact', ContactController.createContact);
router.get('/contacts', ContactController.getAllContacts);
router.get('/:contactId', ContactController.getSingleContact);
router.put('/:contactId', ContactController.updateContact);
router.delete('/:contactId', ContactController.deleteContact);
router.post('/sms', SmsController.sendSms);
router.get('/sms/allmessages', SmsController.getAllSms);
router.get('/sms/sent/:phoneNumber', SmsController.getSentSms);
router.get('/sms/received/:phoneNumber', SmsController.getReceivedSms);

export default router;