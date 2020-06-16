import React from 'react'
import '../App.css'
import Mockups from '../images/image-mockups.png'

const Banner = () => (
    <section className="banner">
        <div className="container">
            <div className="row">

                <div className="col-md-6 text-center">
                    <img src={Mockups} className="img-fluid img-header" alt="Banner" />
                    <h1>Next generation digital banking</h1>
                    <p className="mt-3">Take yout finacial lofe online. Your Easybank account will be a one-stop-shop for spending, saving,  budgenting, investing, and much more.</p>
                    <a href="#contact" className="btn btn-home mt-3 mb-5">Request Invite</a>

                </div>
                
            </div>
        </div>
    </section>
)

export default Banner