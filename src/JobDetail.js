
import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import Loading from "./Loading";
const JobDetail = () => {
    let { id } = useParams()

    const [selectedJob, setSelectedJob] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getJob = async () => {
            try {

                const res = await fetch("https://jobicy.com/api/v2/remote-jobs");
                const data = await res.json()
                const job = data.jobs.find((j) => j.id == id)
                setSelectedJob(job)
                setLoading(false)

            } catch (error) {
                setError(error)
            }
        }
        getJob()
    }, [])


    const applyJob = (job) => {
        console.log(job);
        < Navigate replace={true} job={job} />
    }

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <Link to="/" className="pt-5" ><i className=" fa-2x fa-solid fa-chevron-left"></i></Link>
                {
                    loading ? <Loading /> :
                        <div className="col-lg-10">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="d-flex ">
                                        <img
                                            src={selectedJob.companyLogo}
                                            className="img-fluid rounded-top rounded-circle"
                                            width={40}
                                            alt="Company Logo"
                                        />
                                        <h6 className="ms-3 mt-2 ">{selectedJob.companyName}</h6>
                                    </div>
                                </li>
                                <li className="list-group-item">


                                    <h4 className="card-title">{selectedJob.jobTitle}</h4>
                                    <p className="card-text">{selectedJob.jobDescription?.substring(0, 300)}</p>
                                    <p>Level: {selectedJob.jobLevel}</p>
                                    <p>Position: {selectedJob.jobType}</p>
                                    <p><i className="fa-solid fa-location-dot"></i>  {selectedJob.jobGeo}</p>

                                    <Link to="/confirmation" className="btn bg-color text-white ">Sök tjänsten</Link>
                                </li>
                            </ul>

                        </div>
                }

            </div>
        </div >
    )
}


export default JobDetail;