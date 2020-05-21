import React from 'react';
import { Link } from 'react-router-dom'
import './Trails.scss';

const Trails = (props) => {
const { imageUrl, name, location, difficulty, review, _id } = props.trail;
    return(
        <div className='trails'>
         
                <div>
                    <img src={imageUrl}/>
                    <div className='trail-innerContainer'>
                        <div className='trail-subheading'>
                            <h2><span>Trail:</span> {name}</h2>
                            <p><span>Location:</span> {location}</p>
                        </div>
                        <div className='trail-info'>
                            <p><span>Difficulty:</span> {difficulty}</p>
                            <p><span>Review:</span> {review}</p>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <span className='btn' onClick={() => props.deletePost(_id)}>Remove</span>
                        <span className='btn'><Link to={`/edit/${_id}`}>Edit</Link></span>
                    </div>
                </div>
        </div>
    )
}

export default Trails;