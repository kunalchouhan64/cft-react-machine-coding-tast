import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { adddata } from '../Slices/DataSlice';


// This is the custom hook we are using to fetch our data, to maintain the code re-usability and readability
const useFetchData = () => {

    const dispatch = useDispatch()
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const [data, SetData] = useState([])

    const FetchData = async () => {
        try {
            await axios.get(API_URL)
                .then((res) => {

                    //⭐ Adding 5 Second Timout According to the task Requirements
                    setTimeout(() => {
                        SetData(res?.data)
                        dispatch(adddata(res?.data))
                    }, 5000);

                }).catch((err) => {
                    console.warn(err)
                })
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        FetchData()
    }, [])

    // Returning the data from the custom Hook
    return data;
}

export default useFetchData;
