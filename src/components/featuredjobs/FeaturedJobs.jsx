import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('./jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])
    return (
        <div>
            
            <div className="grid grid-cols-2 gap-5 mt-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.length} job={job}></Job>)
                }
            </div>
            
            <div className={dataLength=== jobs.length && 'hidden'}>
            <div className={`flex justify-center mt-10 mb-10 `}>
                <button onClick={() => setDataLength(jobs.length)} className="mx-auto bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white btn">See All Jobs</button>
            </div>
            </div>
           

        </div>
    );
};

export default FeaturedJobs;