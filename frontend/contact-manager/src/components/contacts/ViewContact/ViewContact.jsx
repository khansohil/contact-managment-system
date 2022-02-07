import React from 'react'
import { Link } from 'react-router-dom'

let ViewContact = () => {
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
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Ficons-logos-emojis-user-icon-png-transparent-PNG-free-PNG-Images_276583&psig=AOvVaw2H8rfjYmMHOZK2laiID5X0&ust=1644301531578000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDbxtf67PUCFQAAAAAdAAAAABAD" alt="" className='contact-img'/>
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    Name : <span className='fw-bold'>Rajan</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Mobile : <span className='fw-bold'>9912812112</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Email : <span className='fw-bold'>rajan@gmail.com</span>
                                </li>                    
                                <li className="list-group-item list-group-item-action">
                                    Company : <span className='fw-bold'>rajan@gmail.com</span>
                                </li>                    
                                <li className="list-group-item list-group-item-action">
                                    Title : <span className='fw-bold'>rajan@gmail.com</span>
                                </li>                    
                                <li className="list-group-item list-group-item-action">
                                    Group : <span className='fw-bold'>rajan@gmail.com</span>
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
        </React.Fragment>
    )
}

export default ViewContact