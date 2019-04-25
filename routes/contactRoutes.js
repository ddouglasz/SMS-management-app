import express from 'express';
const  router = express.Router();

import ContactController from '../controllers/contactController';

router.post('/', ContactController.createContact);
router.get('/', ContactController.getAllContacts);
router.get('/:contactId', ContactController.getSingleContact);
router.put('/:contactId', ContactController.updateContact);
router.delete('/:contactId', ContactController.deleteContact);

export default router;