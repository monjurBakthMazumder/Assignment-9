import { useEffect, useState } from "react"

const useGetTeam = () => {
    const [team, setTeam] = useState()
    useEffect(()=>{
        fetch('/team.json')
        .then(res=> res.json())
        .then(data=> setTeam(data))
    },[])
    return [team]
}

export default useGetTeam;