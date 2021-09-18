import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from '../../Redux/actions';


const Home = () => {

    const data = useSelector((state)=>state.data)
    const isLoading = useSelector((state)=> state.isLoading)
    console.log(data , isLoading)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchData(data))
    },[] )
    
    return (
        <div>
            welcome Home
        </div>
    )
}

export default Home
