import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {ContactService} from '../../../services/ContactService'


let ViewContact = () => {

    let {contactId} = useParams()

    let [state, setState] = React.useState({
        contact: {},
        errorMessage : ''
    })

    React.useEffect(() => {
        async function fetchCall(){
            try {
                let response = await ContactService.getContact(contactId)
                setState({
                    ...state,
                    contact: response.data
                })
            } catch (error) {
                setState({
                    ...state,
                    errorMessage: error.message
                })
            }
        }
        fetchCall()
    }, [contactId])

    let {contact, errorMessage} = state

    return(
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis quod. Dolore aperiam dolor minus perferendis? Odit iure nostrum vel veniam doloribus vitae modi. Nemo tenetur suscipit nostrum perspiciatis deserunt?</p>

                        </div>
                    </div>
                </div>
            </section>
            {
                Object.keys(contact).length > 0 &&
                <section className="view-contact mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={contact.photo} alt="" className='contact-img'/>
                            </div>
                            <div className="col-md-8">
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
                                    <li className="list-group-item list-group-item-action">
                                        Company : <span className='fw-bold'>{contact.company}</span>
                                    </li>                    
                                    <li className="list-group-item list-group-item-action">
                                        Title : <span className='fw-bold'>{contact.title}</span>
                                    </li>                    
                                                       
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to={"/contacts/list"} className="btn btn-warning">Back</Link>
                            </div>
                        </div>
                    </div>
                </section>
            }
            
        </React.Fragment>
    )
}

export default ViewContact