import JobContext from "../context/JobContext";
import { useContext, useEffect } from "react";

const JobCard = (props) => {
    const {job, setJob} = useContext(JobContext)

    const handleClick = () => {
        // console.log('job', props.job)
        setJob(props.job)
        console.log(props.job)
    }

    useEffect(()=>{
        if(props.job?.id === 1){
            setJob(props.job)
            console.log(props.job)
        }
    }, [])

    return ( 
        <div className="w-full bg-white p-2 mb-2 cursor-pointer hover:bg-blue-400 hover:text-white" onClick={handleClick}>
            <div>
                <p>Job Title: {props.job?.position_title}</p>
                <p>Company: {props.job?.company}</p>
                <p>Salary: {props.job?.salary}</p>
                <p>Location: {props.job?.location}</p>
            </div>
        </div>
     );
}
 
export default JobCard;
