import React, { useState, useEffect } from 'react';
import Trails from '../Trails/Trails';
import axios from 'axios';
import './Dashboard.scss'


const Dashboard = () => {
    const [trails, setTrails] = useState([])
    // console.log(trails)

    useEffect(() => {
        axios.get('/api/trails').then(res => {
            console.log('useEffect', res.data)
            setTrails(res.data)
        })
    }, [])


    const deletePost = (_id) => {
        axios.delete(`/api/trails/${_id}`).then(res => {
            setTrails(res.data)
        })
    }

    const displayTrails = trails.map(trail => <Trails key={trail._id} trail={trail} deletePost={deletePost}/>)
    return(
        <div className='dashboard'>
      
                 {displayTrails}
        
        </div>
    )
}

export default Dashboard;