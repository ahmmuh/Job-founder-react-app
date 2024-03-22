
import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Search from "./Search"
import { Link, json } from "react-router-dom"
import Rate from "./Rate"
import Ratehalf from "./Ratehalf"



const BASE_URL = "https://jobicy.com/api/v2/remote-jobs"

const JobList = () => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const count = 300;

    const [search, setSearch] = useState([])


    const getJobs = async () => {
        try {

            const res = await fetch(BASE_URL);
            const data = await res.json();
            setJobs(data.jobs)
            setLoading(false)
        } catch (error) {

            setError(error)
            setLoading(false)

        }

    }



    useEffect(() => {
        getJobs()

    }, [])



    return (
        <>
            <div className="container my-5" id="card-list">
                <div className="row p-5">

                    <ul className="list-group list-group-flush ">
                        <Search jobs={jobs} />

                        {
                            loading ? <Loading /> : error ? <div
                                class="alert alert-danger"
                                role="alert"
                            >

                                <p>Ojdå, det gick inte så bra !!!</p>
                                <hr />
                                <p class="mb-0">Något fel med API anrop</p>
                            </div>
                                :
                                jobs?.map((job, index) => (
                                    <div key={job.id} className="p-2">
                                        <li className="list-group-item p-5">
                                            <div className="d-flex ">
                                                <img
                                                    src={job.companyLogo}
                                                    className="img-fluid rounded-top rounded-circle"
                                                    width={40}
                                                    alt="Company Logo"
                                                />
                                                <h6 className="ms-3 mt-2 ">{job.companyName}</h6>
                                            </div>
                                            <div className="mt-3">
                                                <h4 className="lead text-primary">{job.jobTitle}</h4>

                                                <p>{job.jobDescription.slice(0, count)}</p>
                                                <span className="text-success">Position: {job.jobType[0] ? job.jobType[0] : job.jobType[1]}</span> <br />
                                                <span className="text-primary">Level: {job.jobLevel}</span> <br />
                                                <span className=""><i className="fa-solid fa-location-dot"></i> {job.jobGeo}</span>
                                                <p>Lön {job.annualSalaryMin ? job.annualSalaryMin : ' 1500 USD '} {job.salaryCurrency}</p>

                                                {
                                                    job.annualSalaryMin ? <Rate /> : <Ratehalf />
                                                }
                                            </div>


                                            <Link to={`/jobs/job/${job.id}`} className="btn bg-color text-white mt-2 ">Visa mer</Link>
                                        </li>
                                    </div>
                                ))
                        }

                    </ul>

                </div>
            </div >
        </>
    )
}


export default JobList