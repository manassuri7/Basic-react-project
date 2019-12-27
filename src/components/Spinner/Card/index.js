import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Card = ({ element }) => {

    const [redirect, setRedirect] = useState(false)

    const onClick = () => {
        setRedirect({ redirect: true })
    }
    return (
        <>
            {redirect ? <Redirect to={{
                pathname: `/user?id=${element.id}`
            }}
            /> : null}
            <div className="card" style={{ width: "300px", margin: "20px 20px" }}>
                <img className="card-img-top" src={element.avatar} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{element.first_name} {element.last_name}</h4>
                    <p className="card-text">{element.email}</p>
                    <button onClick={onClick} className="btn btn-primary">
                        See Profile
                </button>
                </div>
            </div>
        </>
    )
}

export default Card