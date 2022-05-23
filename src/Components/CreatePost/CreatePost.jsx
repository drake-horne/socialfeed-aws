import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import "./CreatePost.css"

const CreatePost = (props) => {

    const [postName, setPostName] = useState('');
    const [postBody, setPostBody] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        let myPost = {
            postName,
            postBody
        }
        props.createPost(myPost)
    }

    return (
        <div className='form-box'>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Name</Form.Label>
            <Form.Control name="postName" onChange={(e) => setPostName(e.target.value)} value={postName}></Form.Control>
            <Form.Label for="postBody">Post</Form.Label>
            <Form.Control as="textarea" rows={2} name="postBody" onChange={(e) => setPostBody(e.target.value)} value={postBody}></Form.Control>
            <Button type="submit">Post!</Button>
        </Form>            
        </div>

    )
}


export default CreatePost