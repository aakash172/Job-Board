import { Carousel } from '@mantine/carousel';
import { jobcategory } from '../Data/Data';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
const JobCategory = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center font-semibold text-mine-shaft-100 ">Browse
                <span className="text-bright-sun-400"> Job</span> Category
            </div>
            <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto mb-10">
                Explore diverse job opportunities tailored to your skills . Start your career journey today!
            </div>
            <Carousel slideSize="25%" slideGap="md" loop className="focus-visible:[&-button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 "
                previousControlIcon={<IconArrowLeft className='h-8 w-8' />}>
                {jobcategory.map((category, index) =>
                    <Carousel.Slide key={category.name} >
                        <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-300 my-5 transition duration-300 ease-in-out">
                            <div className="p-2 bg-bright-sun-300 rounded-full">
                                <img className="h-8 w-8" src="/announce.png" />
                            </div>
                            <div className="text-mine-shaft-100 text-xl font-semibold text-center">{category.name}</div>
                            <div className="text-sm text-center text-mine-shaft-300">{category.desc}</div>
                            <div className="text-bright-sun-300 text-lg text-center">{category.jobs}+ new jobs posted</div>
                        </div>
                    </Carousel.Slide>
                )}
            </Carousel>

        </div>
    )
}
export default JobCategory;