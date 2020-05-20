import React, { useState, useEffect } from 'react';
import Trails from '../Trails/Trails';
import Form from '../Form/Form';
import axios from 'axios';


const Dashboard = () => {
    const [trails, setTrails] = useState([])
    // console.log(trails)

    useEffect(() => {
        axios.get('/api/trails').then(res => {
            console.log('useEffect', res.data)
            setTrails(res.data)
        })
    }, [])

    const addPost = (trail) => {
        console.log('dashPost', trail)
        axios.post('/api/trails', trail).then(res => {
            setTrails(res.data)
        })
    }

    const deletePost = (_id) => {
        axios.delete(`/api/trails/${_id}`).then(res => {
            setTrails(res.data)
        })
    }

    const displayTrails = trails.map(trail => <Trails key={trail._id} trail={trail} deletePost={deletePost}/>)
    return(
        <div className='dashboard'>
            {displayTrails}
            <Form addPost={addPost}/>
        </div>
    )
}

export default Dashboard;