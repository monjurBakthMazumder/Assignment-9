import Banner from "../../Component/Banner/Banner";
import HomeCard from "../../Component/HomeCard/HomeCard";
import Team from "../../Component/Team/Team";
import WorkCard from "../../Component/WorkCard/WorkCard";
import useGetData from "../../Hock/useGetData";
import useGetWork from "../../Hock/useGetWork";

const Home = () => {
    const [allData] = useGetData();
    const [allWork] = useGetWork()
    return (
        <div>
            <Banner/>
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mt-10">Our service</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 px-[5%]">
                {
                    allData?.map(data=> 
                        <HomeCard
                        key={data.id}
                        data={data}
                        />
                        )
                    }
            </div>
            <Team/>
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mt-10">Latest work</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 px-[5%]">
                {
                    allWork?.map(work=> 
                        <WorkCard
                            key={work.id}
                            work={work}
                        />
                    )
                }
            </div>

        </div>
    );
};

export default Home;