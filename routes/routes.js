import express from 'express';

const  router = express.Router();

import ContactController from '../controllers/contactController';
import SmsController from '../controllers/SmsController';

router.post('/', ContactController.createContact);
router.get('/', ContactController.getAllContacts);
router.get('/:contactId', ContactController.getSingleContact);
router.put('/:contactId', ContactController.updateContact);
router.delete('/:contactId', ContactController.deleteContact);
router.post('/sms/:contactId', SmsController.sendSms);
router.get('/sms/allmessages', SmsController.getAllSms);

export default router;