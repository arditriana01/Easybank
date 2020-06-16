import React from 'react'
import { Link } from 'react-router-dom';

const CardArticles = (props) => {
    return (
        <div className="col-md-3">
            <div className="card mb-5">
                <img src={props.image} className="card-img-top" alt="Currency" />
                <div className="card-body">
                    <p className="card-text">By {props.text}</p>
                    <h5 className="card-title">
                        <Link to="">{props.title}</Link>
                    </h5>
                    <p className="card-text">{props.desc}</p>
                </div>
            </div>
        </div>  
    )
}

export default CardArticles