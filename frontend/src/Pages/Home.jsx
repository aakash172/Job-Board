import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Working from "../LandingPage/Working";
import Testimonials from "../LandingPage/Testimonials";
import Subscribe from "../LandingPage/Subscribe";

const Home = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <DreamJob />
            <Companies />
            <JobCategory />
            <Working />
            <Testimonials />
            <Subscribe />
        </div>

    )
}
export default Home;