
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Apply = () => {
    let { applyId } = useParams();
    let navigate = useNavigate()
    const [err, setErr] = useState(null)
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        id: applyId

    })
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('applyId', JSON.stringify(applyId))
        if (!e.target.value || e.target.value == '') {
            setErr(err)
            navigate("/error")

        }
        else {
            localStorage.setItem("userInfo", JSON.stringify(user))
            setUser(user)
            navigate("/confirmation")
        }

    }
    return (
        <div className='container' style={{ marginTop: "5rem" }}>
            <Link to={`/jobs/job/${applyId}`}  ><i class=" fa-2x fa-solid fa-chevron-left"></i></Link>
            <form>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        id=""
                        value={user.firstname}
                        onChange={handleChange}
                        placeholder="Förnamn"
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        id=""
                        placeholder="Efternamn"
                        value={user.lastname}
                        onChange={handleChange}

                    />
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id=""
                        placeholder="E-post"
                        value={user.email}
                        onChange={handleChange}


                    />
                </div>

                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        name="phone"
                        id=""
                        placeholder="Telefon"
                        value={user.phone}
                        onChange={handleChange}

                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="text"
                        name="id"
                        id=""
                        disabled
                        value={applyId}

                    />
                </div>
                <button type='button' className='btn btn-outline-primary' onClick={handleSubmit}>Skicka</button>
            </form>

        </div>
    )
}

export default Apply
