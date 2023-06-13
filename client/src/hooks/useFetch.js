import axios from "axios" 
import { useState, useEffect } from "react";

axios.defaults.baseURL='https://booking-app-z2m7.onrender.com/api'



const useFetch = (url)=>{
    const [data,setData] =useState([])
    const [loading,setLoading] =useState(false)
    const [error,setError] =useState(false)

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try {
                const res=await axios.get(url)
                setData(res.data)
                
            } catch (err) {
                setError(err)
                
            }
            setLoading(false)
        }
        fetchData();
    },[])
    
    
    const reFetch = async ()=>{
        setLoading(true)
        try {
            const res=await axios.get(url)
            setData(res.data)
            
        } catch (err) {
            setError(err)
            
        }
        setLoading(false);
    };
    return {data,loading,error,reFetch}
};

export default useFetch;












