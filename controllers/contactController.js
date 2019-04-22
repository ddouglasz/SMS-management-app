import Contact from '../models/contactModel';

// eslint-disable-next-line require-jsdoc
class ContactController {
    /** 
     * @description test controller.
     * @param {object} req - the sent request.
     * @param {object} res - the expected response.
     * @returns {object} - the return function.
     */
    //create contact controller
    // eslint-disable-next-line require-jsdoc
    static createContact(req, res) {
        const { name, phoneNumber } = req.body

        let contact = new Contact({
            name, phoneNumber: Number(phoneNumber)
        });

        return contact
        .save()
        .then((newContact) => {
            return res.status(200).json({
                success: true,
                message: 'New contact created successfully',
                contact: newContact
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'server error',
                error: error.message,
            });
        });
    }
}

export default ContactController;