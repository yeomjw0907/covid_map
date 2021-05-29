import {useState, useEffect} from 'react'
import axios from 'axios'
import { Bar, Doughnut, Line } from "react-chartjs-2"
const Contents = () => {
    useEffect(()=>{
        const fetchEvent = () => {

        }
        fetchEvent = async () => {
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr")
            console.log(res)
        }

    })
    return (
        <section className='contents'>
            <h2>현황</h2>
            <div>

            </div>
        </section>
    )
}

export default Contents
