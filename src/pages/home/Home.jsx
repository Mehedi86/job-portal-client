import Banner from "../../componentes/Banner";
import HotJobs from "../../componentes/HotJobs";
import JobsCategory from "../../componentes/JobsCategory";

const Home = () => {
    return (
        <div>
            <Banner/>
            <JobsCategory/>
            <HotJobs/>
        </div>
    );
};

export default Home;