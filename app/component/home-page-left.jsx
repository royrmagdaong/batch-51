
import JobCard from "./job-card";
import {useState, useContext, useEffect} from 'react'
import JobContext from "../context/JobContext";

const LeftSide = () => {
    const jobs = useContext(JobContext)
   

    useEffect(()=> {
         console.log('from left side', jobs)

         let token = JSON.parse(localStorage.getItem('currentUser'))

        console.log('token', JSON.parse(localStorage.getItem('currentUser')))
    }, [])

    // console.log('from left side', jobs)

    return ( 
        <div className="bg-blue-200 h-screen w-1/4 p-4">
            {
                jobs?.jobs?.map((job)=>(
                    <JobCard key={job?.id} job={job}/>
                ))
            }
            
        </div>
     );
}
 
export default LeftSide;