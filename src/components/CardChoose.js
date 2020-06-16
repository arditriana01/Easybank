import React from 'react'

const CardChoose = (props) => {
    return (
        <div className="col-md-3 mb-5">
            {props.imageLogo}
            <h3 className="card-title mt-4">{props.title}</h3>
            <p className="card-text mt-4">{props.desc}</p>
        </div>
    )
}

export default CardChoose