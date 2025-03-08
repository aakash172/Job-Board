import { TextInput, Avatar } from "@mantine/core"
import { IconSearch } from '@tabler/icons-react';
const DreamJob = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="font-bold text-6xl text-mine-shaft-100 leading-tight [&>span]:text-bright-sun-400">Find Your
                    <span> Dream</span>
                    <span> Job</span>  With Us</div>
                <div className="text-lg text-mine-shaft-200">Good life begins with a good Company.Start explore thousands of jobs in one place</div>
                <div className=" flex gap-2 mt-5">
                    <TextInput
                        className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                    />
                    <TextInput
                        className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Full Time"
                    />
                    <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch className="h-[85%] w-[85%]" />
                    </div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="Lap.png" />
                    <div className="absolute -right-10 w-fit top-[50%] border border-bright-sun-400 rounded-lg p-2 backdrop-blur-lg ">
                        <div className="text-center mb-1 text-sm text-mine-shaft-100">5k+ Got Job</div>
                        <Avatar.Group>
                            <Avatar src="avatar-1.png" />
                            <Avatar src="avatar-2.png" />
                            <Avatar src="avatar9.png" />
                            <Avatar>+5</Avatar>
                        </Avatar.Group>
                    </div>

                    <div className="absolute -left-20 w-fit top-[30%] border border-bright-sun-400 rounded-lg p-2 backdrop-blur-lg flex flex-col gap-3">
                        <div className="flex gap-2 items-center">
                            <div className="w-14 h-14 p-1 bg-mine-shaft-900 rounded-lg">
                                <img src="google.png" alt="" />
                            </div>
                            <div className="text-sm text-mine-shaft-100 ">
                                <div>Software Engineer</div>
                                <div className="text-mine-shaft-200 text-xs">Benglore</div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
                            <span>1 day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default DreamJob;