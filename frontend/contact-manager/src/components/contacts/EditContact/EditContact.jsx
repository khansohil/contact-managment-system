import React from 'react'
import {Link} from 'react-router-dom'

let EditContact = () => {
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
                            <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder='Name' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder='Photo Url' />
                                </div>
                                <div className="mb-2">
                                    <input type="number" className="form-control" placeholder='Mobile' />
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" placeholder='Email' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder='Company' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder='Title' />
                                </div>
                                
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary" value='Update' />
                                    <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                                </div>

                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Ficons-logos-emojis-user-icon-png-transparent-PNG-free-PNG-Images_276583&psig=AOvVaw2H8rfjYmMHOZK2laiID5X0&ust=1644301531578000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDbxtf67PUCFQAAAAAdAAAAABAD" alt="" className='contact-img' />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default EditContact