import useGetTeam from "../../Hock/useGetTeam";
import TeamCart from "./TeamCart";

const Team = () => {
    const [teams] = useGetTeam()
    console.log(teams);
    return (
        <div className="bg-gray-800 text-white py-10 md:py-14">
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 ">Meat our team</h1>
            <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-20 px-[5%]">
                {
                    teams?.map(team=> 
                        <TeamCart
                            key={team.id}
                            team={team}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Team;