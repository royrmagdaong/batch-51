'use client'
import NavBar from "./component/nav-bar";
import withDataFetching from "./component/with-data-fetching";
import { useEffect, useState } from "react";
import LeftSide from "./component/home-page-left";
import RightSide from "./component/home-page-right";
import JobContext from "./context/JobContext";

let url = './jobs.json'

const Home = (props) => {

  const [jobs, setJobs] = useState([])

  return (
    <div>
        <NavBar />
        {/* {
          props.data?.jobs?.map((job)=>(
            <div key={job?.id}>{job?.company}</div>
          ))
        } */}

       <div className="flex">
        <JobContext.Provider value={{jobs: props.data?.jobs}}>
          <LeftSide />
          <RightSide />
        </JobContext.Provider>
       </div>
    </div>
  );
}

export default withDataFetching(Home, url)
