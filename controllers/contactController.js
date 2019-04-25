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
            name,
            phoneNumber: Number(phoneNumber)
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

    /** 
    * @description test controller.
    * @param {object} req - the sent request.
    * @param {object} res - the expected response.
    * @returns {object} - the return function.
    */
    //get all contacts controller
    // eslint-disable-next-line require-jsdoc
    static getAllContacts(req, res) {
    Contact.find()
        .select('_id name phoneNumber')
        .then((allContacts) => {
            return res.status(200).json({
                success: true,
                message: 'all contacts',
                Contacts: allContacts
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
    //get all contacts controller
    // eslint-disable-next-line require-jsdoc
    static getSingleContact(req, res) {
    const { contactId } = req.params;
    
    Contact.findById(contactId)
        .select('id name phoneNumber')
        .then((contactDetail) => {
            if(contactDetail) {
                return res.status(200).json({
                    success: true,
                    message: 'contact found',
                    Contact: contactDetail
                });
            }
            return res.status(404).json({
                message: 'This contact does not exist'
            })
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'This contact does not exist',
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
    //update controller
    // eslint-disable-next-line require-jsdoc
    static updateContact(req, res) {
        const { contactId } = req.params;
        const updateObject = req.body;
        Contact.findByIdAndUpdate({ _id: contactId }, { $set: updateObject })
        .exec()
        .then(() => {
                res.status(200).json({
                success: true,
                message: 'contact updated successfully',
                updateContact: updateObject,
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
    //delete contact controller 
    // eslint-disable-next-line require-jsdoc
    static deleteContact(req, res) {
    const { contactId } = req.params;
    Contact.findByIdAndRemove({ _id:contactId })
        .exec()
        .then(() => {
                res.status(200).json({
                success: true,
                message: 'Contact deleted successfully',
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'This contact does not exist',
                error: error.message,
            });
        })
    }
}

export default ContactController;