import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    const id = JSON.parse(localStorage.getItem("applyId"))
    return (
        <div className='container' style={{ marginTop: '5rem' }}>
            <div
                className="alert alert-danger"
                role="alert"
            >
                <p className="mb-2">Fyll i alla fält för att kunna skicka in din ansökan</p>
                <Link to={`/job/${id}`}  ><i class=" fa-2x fa-solid fa-chevron-left"></i></Link>
            </div>

        </div>
    )
}

export default Error
