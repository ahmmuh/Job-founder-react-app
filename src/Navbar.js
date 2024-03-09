import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <>

            <nav
                className="navbar navbar-expand-sm bg-color fixed-top "
            >
                <div className="container">
                    <Link className="navbar-brand text-white" to="/"><i className="fa-solid fa-laptop-file"></i> JobFounder</Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <i className="fa-solid fa-bars text-white "></i>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link text-white" to="">Lediga jobb</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>

    )



}

export default Navbar