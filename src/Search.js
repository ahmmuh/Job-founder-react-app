import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = ({ jobs }) => {
    const [search, setSearch] = useState("")
    const filterList = jobs?.filter((c) => {
        return (
            c.jobTitle.toLowerCase().includes(search)
        )
    })

    function searchHandler(e) {
        setSearch(e.target.value)
    }

    return <div className="col-11 mb-2">
        <input onChange={searchHandler} value={search} className="form-control" placeholder="Sök jobb by title" />
        <ul className="list-group">
            {search ? filterList.map((s) => (

                <div>
                    <li className="list-group-item mb-2 lead" key={s.id}>{s.jobTitle} <Link to={`/jobs/job/${s.id}`} className="text-primary mt-2 ">Välj</Link></li>

                </div>

            )) : null}

        </ul>

    </div>

}


export default Search;