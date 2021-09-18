import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from '../../Redux/actions';
import Card from '../Card/Card';


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
            <div style={{background:"black" , height:"90px", width:"100%"}}>

            </div>
            <Card data={data}/>
        </div>
    )
}

export default Home
