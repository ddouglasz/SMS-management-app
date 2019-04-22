import express from 'express';
const  router = express.Router();

import ContactController from '../controllers/contactController';

router.post('/', ContactController.createContact);
// router.get('/', ContactController.getAllContacts);
// router.post('/:contactId', ContactController.deleteContact);

export default router;