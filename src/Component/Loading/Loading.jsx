import { ClockLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-[75vh]">
            <ClockLoader
                color="#0000FF"
                size={100}
                />
        </div>
    );
};

export default Loading;