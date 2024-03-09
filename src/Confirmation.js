import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userInfo)
    return (
        <div className='container p-5 ' style={{ marginTop: "5rem" }}>
            <div
                className="row"
            >
                <div className='col-lg-6'>
                    <h4>{`Hej ${userInfo.firstname} ${userInfo.lastname}`}</h4>
                    <p>
                        Tack för din ansökan  med ref nr: {userInfo.id}.
                        När ansökningstiden är slut kommer vi att se över alla ansökningar. Därefter kommer de kandidater som är intressanta för anställningen att kontaktas för intervjuer.
                    </p>
                    <strong>
                        Med vänlig hälsning, <br />
                        Platschef Anders Peter
                    </strong> <br />
                    <Link to={`/`}>Sök fler</Link>
                </div>
            </div>

        </div>
    )
}

export default Confirmation
