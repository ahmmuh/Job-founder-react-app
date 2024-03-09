import { Outlet } from "react-router-dom";
import JobList from "./JobList";

const Home = () => {
    return <div className="container">
        <JobList />
    </div>
}


export default Home;