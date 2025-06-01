const JobCard = (props) => {
    return ( 
        <div className="w-full bg-white p-2 mb-1">
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
