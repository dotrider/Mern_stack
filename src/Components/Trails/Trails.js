import React from 'react';

const Trails = (props) => {
const { imageUrl, name, location, difficulty, review, _id } = props.trail;
    return(
        <div className='trails'>
            <div>
                <img src={imageUrl}/>
                <h2>{name}</h2>
                <p>{location}</p>
                <p>{difficulty}</p>
                <p>{review}</p>
                <button onClick={() => props.deletePost(_id)}>Delete</button>
            </div>
        </div>
    )
}

export default Trails;