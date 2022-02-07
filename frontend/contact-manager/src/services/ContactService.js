import axios from 'axios'

export class ContactService{
    static serverURL = `http://127.0.0.1:8000`

    static getAllContacts(){
        let dataURL = `${this.serverURL}/api/contact`
        return axios.get(dataURL)
    }
}