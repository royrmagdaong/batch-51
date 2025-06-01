import JobContext from "../context/JobContext";
import { useContext } from "react";

const RightSide = (props) => {
    const {job} = useContext(JobContext)

    return ( 
        <div className="bg-gray-200 m-4 h-screen w-3/4">
            <p>Job Title: {job?.position_title}</p>
            <p>Company: {job?.company}</p>
            <p>Salary: {job?.salary}</p>
            <p>Location: {job?.location}</p>
            <p>Description: {job?.description}</p>
        </div>
     );
}
 
export default RightSide;