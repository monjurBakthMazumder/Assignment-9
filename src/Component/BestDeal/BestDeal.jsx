
const BestDeal = () => {
    return (
        <div className="bg-gray-800 text-white py-10 md:py-14 px-[5%] text-center">
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold">Best Deal of the Day</h1>
                <p className="text-lg sm:text-xl lg:text-2xl my-5">30% discount in every service</p>
                <div className="flex justify-center items-center">
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                        <span style={{"--value":10}}></span>
                        </span>
                        hours
                    </div> 
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                        <span style={{"--value":24}}></span>
                        </span>
                        min
                    </div> 
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                        <span style={{"--value":38}}></span>
                        </span>
                        sec
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default BestDeal;