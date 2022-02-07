import React from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { ContactService } from '../../../services/ContactService';

let EditContact = () => {

    let navigate = useNavigate()

    let {contactId} = useParams();

    let [state, setState] = React.useState({
        contact: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            company: '',
            title: ''
        },
        errorMessage: ''
    })

    React.useEffect( () => {
        async function fetchCall(){
            try {
                let response = await ContactService.getContact(contactId)
                setState({
                    ...state,
                    contact: response.data
                })
            }catch (error) {
                setState({
                    ...state,
                    errorMessage: error.message
                })
            }
        } 
        fetchCall()
    }, [contactId])

    let updateInput = (event) =>{
        setState({
            ...state,
            contact:{
                ...state.contact,
                [event.target.name] : event.target.value
            }
        })
    }

    let submitForm = async (event) => {
        event.preventDefault()
        try {
            let response = await ContactService.updateContact(state.contact, contactId)
            if(response){
               navigate('/contacts/list',{replace:true})
            }
        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
            navigate(`/contacts/edit/${contactId}`,{replace:false})
        }
    }

    let {contact, errorMessage} = state

    return(
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-primary fw-bold">Edit Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea culpa consequatur nihil provident a nam. Minus cumque ipsam libero, perferendis eligendi tempore reprehenderit quo, harum saepe modi suscipit asperiores blanditiis!  </p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input 
                                        require="true"
                                        name="name"
                                        value={contact.name}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder='Name' />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        require="true"
                                        name="photo"
                                        value={contact.photo}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder='Photo Url' />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        require="true"
                                        name="mobile"
                                        value={contact.mobile}
                                        onChange={updateInput}
                                        type="number" className="form-control" placeholder='Mobile' />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        require="true"
                                        name="email"
                                        value={contact.email}
                                        onChange={updateInput}
                                        type="email" className="form-control" placeholder='Email' />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        require="true"
                                        name="company"
                                        value={contact.company}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder='Company' />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        require="true"
                                        name="title"
                                        value={contact.title}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder='Title' />
                                </div>
                                
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary" value='Update' />
                                    <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                                </div>

                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={contact.photo} alt="" className='contact-img' />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default EditContact