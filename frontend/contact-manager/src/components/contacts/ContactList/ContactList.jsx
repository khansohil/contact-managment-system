import React from 'react'
import {Link} from 'react-router-dom'
import { ContactService } from '../../../services/ContactService'

let ContactList = () => {

    let [query, setQuery] = React.useState({
        text: ''
    })

    let[state, setState] = React.useState({
        contacts: [],
        filteredContacts: [],
        errorMessage: ''
    })

    React.useEffect(() => {
        async function fetchData(){
            try{
                let response = await ContactService.getAllContacts()
                setState({
                    ...state,
                    contacts:response.data,
                    filteredContacts: response.data
                })
            }catch(error){
                setState({
                    ...state,
                    errorMessage: error.message
                })
            }
        }
        fetchData()
    }, [])

    let clickDelete = async (contactId) => {
        try {
            let response = await ContactService.deleteContact(contactId)
            if(response){
                let response = await ContactService.getAllContacts()
                setState({
                    ...state,
                    contacts:response.data,
                    filteredContacts: response.data
                })
            }

        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
        }
    }

    let searchContacts = (event) => {
        setQuery({...query, text: event.target.value})
        let theContacts = state.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
         setState({
             ...state,
             filteredContacts: theContacts
         })
    }

    let {contacts, filteredContacts, errorMessage} = state;

    return(
        <React.Fragment>
            <section className='contact-search p-3'>
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">Contact Manager
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2"> 
                                        <i className='fa fa-plus-circle me-2'></i>
                                        New
                                    </Link>
                                </p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, incidunt reiciendis totam, optio maiores cumque ipsum quia fuga explicabo hic ea ad quod perspiciatis corporis eius magnam voluptatum. Repellendus, facilis?</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className='row'>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input 
                                                name="text"
                                                value={query.text}
                                                onChange={searchContacts}
                                                type="text" className="form-control" placeholder='Search Names' />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="submit" className="btn btn-outline-dark" value="Search" />
                                        </div>
                                    </div>   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        {
                            filteredContacts.length > 0 &&
                            filteredContacts.map(contact => {
                                return(
                                    <div className="col-md-6" key={contact.name}>
                                        <div className="card my-2">
                                            <div className="card-body">
                                                <div className="row align-items-center d-flex justify-content-around">
                                                    <div className="col-md-4">
                                                        <img src={contact.photo} alt="" className='contact-img'/>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-item-action">
                                                                    Name : <span className='fw-bold'>{contact.name}</span>
                                                            </li>
                                                            <li className="list-group-item list-group-item-action">
                                                                    Mobile : <span className='fw-bold'>{contact.mobile}</span>
                                                            </li>
                                                            <li className="list-group-item list-group-item-action">
                                                                    Email : <span className='fw-bold'>{contact.email}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                                        <Link to={`/contacts/view/${contact.name}`} className='btn btn-warning my-1'>
                                                            <i className='fa fa-eye'/>
                                                        </Link>
                                                        <Link to={`/contacts/edit/${contact.name}`} className='btn btn-primary my-1'>
                                                            <i className='fa fa-pen'/>
                                                        </Link> 
                                                        <button className='btn btn-danger my-1' onClick={() => clickDelete(contact.name)}>
                                                            <i className='fa fa-trash'/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContactList