import React, {useState} from 'react';

const Form = (props) => {
    const [name, setName] = useState(''),
        [location, setLocation] = useState(''),
        [review, setReview] = useState(''),
        [difficulty, setDifficulty] = useState(''),
        [imageUrl, setImage] = useState('');

    const addTrail = () => {  
        console.log('Hit! formAdd')
        console.log('addTrail', name, location, review, difficulty, imageUrl)
        props.addPost({name, location, review, difficulty, imageUrl});
        setName('');
        setLocation('');
        setReview('');
        setDifficulty('');
        setImage('');
    }    

    return(
        <div className='form'>
                <label>Trail: </label>
                <input onChange={e => setName(e.target.value)}/>
                <label>Location: </label>
                <input onChange={e => setLocation(e.target.value)}/>
                <label>Difficulty: </label>
                    <select onChange={e => setDifficulty(e.target.value)}>
                        <option defaultValue="default">Choose one</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                <label>Image: </label>
                <input onChange={e => setImage(e.target.value)}/>
                <label>Review: </label>
                <textarea onChange={e => setReview(e.target.value)}/>
                <button onClick={() => addTrail()}>Add</button>
        </div>  
    )
}

export default Form;