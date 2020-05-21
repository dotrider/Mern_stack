import React, {useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import './Form.scss';


const Form = (props) => {
    const [name, setName] = useState(''),
        [location, setLocation] = useState(''),
        [review, setReview] = useState(''),
        [difficulty, setDifficulty] = useState(''),
        [imageUrl, setImage] = useState('');



    useEffect(() => {
        axios.get(`/api/trails/${props.match.params.id}`).then(res => {
            console.log(res)
            setName(res.data.name);
            setLocation(res.data.location);
            setReview(res.data.review);
            setDifficulty(res.data.difficulty);
            setImage(res.data.imageUrl);
        })
    }, [])




    const addPost = () => {
        console.log('dashPost', {name, location, review, difficulty, imageUrl})
        axios.post('/api/trails', {name, location, review, difficulty, imageUrl});
        alert('Trail Added!')
        props.history.push('/')
    }


    const editPost = () => {
        console.log('edit', props.match.params.id, {name, location, review, difficulty, imageUrl})
        axios.put(`/api/trails/${props.match.params.id}`,{name, location, review, difficulty, imageUrl})
        props.history.push('/')
    }


    return(
        <div className='form'>
            {props.location.pathname === '/add'?
               ( <form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <label>Trail: </label>
                    <input onChange={e => setName(e.target.value)}/>
        
        
                    <label>Location: </label>
                    <input onChange={e => setLocation(e.target.value)}/>


                    <label>Difficulty: </label>
                    <select id='selectBox' onChange={e => setDifficulty(e.target.value)}>
                        <option defaultValue="default">Choose one</option>
                        <option value='Easy'>Easy</option>
                        <option value='Medium'>Medium</option>
                        <option value='Hard'>Hard</option>
                    </select>
            
                    <label>Image: </label>
                    <input onChange={e => setImage(e.target.value)}/>


                    <label>Review: </label>
                    <textarea onChange={e => setReview(e.target.value)}/>
    
                    <span className='btn' onClick={addPost}>Add</span>
                    <Link to='/'>
                    	<span className='btn'>Cancel</span>
                    </Link>
                </form>)
:
               ( <form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <label>Trail: </label>
                    <input value={name} onChange={e => setName(e.target.value)}/>
        
        
                    <label>Location: </label>
                    <input value={location} onChange={e => setLocation(e.target.value)}/>


                    <label>Difficulty: </label>
                    <select id='selectBox' value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                        <option defaultValue="default">Choose one</option>
                        <option value='Easy'>Easy</option>
                        <option value='Medium'>Medium</option>
                        <option value='Hard'>Hard</option>
                    </select>
            
                    <label>Image: </label>
                    <input value={imageUrl} onChange={e => setImage(e.target.value)}/>


                    <label>Review: </label>
                    <textarea value={review} onChange={e => setReview(e.target.value)}/>
    
                    <span className='btn' onClick={editPost}>Save</span>
                    <Link to='/'>
                    	<span className='btn'>Cancel</span>
                    </Link>
                </form>)
}   
        </div>  
    )
}

export default withRouter(Form);