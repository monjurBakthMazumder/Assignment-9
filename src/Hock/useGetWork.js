import { useEffect, useState } from "react";

const useGetWork = () => {
    const [work , setWork] = useState()
    useEffect(()=>{
        fetch('/work.json')
        .then(res=>res.json())
        .then(data=> setWork(data))
    },[])
    return [work]
};

export default useGetWork;