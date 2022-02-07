import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ContactService} from '../../../services/ContactService'

let AddContact = () => {

    let navigate = useNavigate()

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

    let updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name] : event.target.value
            }
        })
    }

    let submitForm = async (event) => {
        event.preventDefault()
        try {
            let response = await ContactService.createContact(state.contact)
            if(response){
               navigate('/contacts/list',{replace:true})
            }
        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
            navigate('/contacts/add',{replace:false})
        }
    }

    let {contact, errorMessage} = state

    return(
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">Create Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea culpa consequatur nihil provident a nam. Minus cumque ipsam libero, perferendis eligendi tempore reprehenderit quo, harum saepe modi suscipit asperiores blanditiis!  </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input    
                                        required={true}                        
                                        name="name"
                                        value={contact.name}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder='Name' />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        name="photo"
                                        value={contact.photo}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder='Photo Url' />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required={true}                        
                                        name="mobile"
                                        value={contact.mobile}
                                        onChange={updateInput}
                                        type="number" className="form-control" placeholder='Mobile' />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        name="email"
                                        value={contact.email}
                                        onChange={updateInput}
                                        type="email" className="form-control" placeholder='Email' />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        name="company"
                                        value={contact.company}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder='Company' />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        name="title"
                                        value={contact.title}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder='Title' />
                                </div>
                                
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success" value='Create' />
                                    <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AddContact