import { useParams } from "react-router-dom";
import useGetData from "../../Hock/useGetData";
import { useEffect, useState } from "react";
import DetailsCard from "../../Component/DetailsCard/DetailsCard";

const Details = () => {
    const [data, setData] = useState(null)
    const [allData] = useGetData()
    const id = useParams()
    const idInt = Number(id.id)
    useEffect(()=>{
        const find = allData?.find(data => data.id === idInt)
        setData(find)
    },[allData, idInt])
    return (
        <div className="px-[5%] my-10">
            <DetailsCard
                data={data}
            />
        </div>
    );
};

export default Details;