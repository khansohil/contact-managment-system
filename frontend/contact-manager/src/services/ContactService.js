import axios from 'axios'

export class ContactService{
    static serverURL = `http://127.0.0.1:8000`

    static getAllContacts(){
        let dataURL = `${this.serverURL}/api/contact`
        return axios.get(dataURL)
    }

    static getContact(contactId){
        let dataURL = `${this.serverURL}/api/contact${contactId}`
        return axios.get(dataURL)
    }

    static createContact(contact){
        let dataURL = `${this.serverURL}/api/contact`
        return axios.post(dataURL, contact)
    }
}