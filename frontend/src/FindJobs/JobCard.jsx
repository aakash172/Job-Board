import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";

const JobCard = ({ job }) => {
    console.log(job);
    return (
        <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-2 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src="/Company/Google.png" alt="google" />
                    </div>
                    <div>
                        <div className="font-semibold">{job.jobTitle}</div>
                        <div className="text-xs text-mine-shaft-300">{job.company} &#x2022; {job.applicants} applicants</div>
                    </div>
                </div>
                <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
                <div>{job.experience}</div>
                <div>{job.jobType}</div>
                <div>{job.location}</div>
            </div>
            <Text lineClamp={3}
                className="text-justify !text-xs !text-mine-shaft-300 m">
                {job.description}
            </Text>
            <Divider size="xs" color="mineShaft.7" />
            <div className="flex justify-between ">
                <div className="font-semibold text-mine-shaft-200">&#8377;{job.package}</div>
                <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                    <IconClockHour3 stroke={1.5} className="h-5 w-5" />
                    {job.postedDaysAgo} days ago</div>
            </div>
        </div>
    );
}
export default JobCard;