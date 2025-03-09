import { jobList } from "../Data/Data";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl">Recommended Jobs</div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap gap-5">
                {
                    jobList.map((job, index) =>
                        <JobCard job={job} key={index + job.jobTitle} />
                    )
                }
            </div>
        </div>
    )
}
export default Jobs;