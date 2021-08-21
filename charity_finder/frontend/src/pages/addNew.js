import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
// import axios from 'axios';




function AddNew(props) {
    const [state, setState] = useState({
        orgname: '',
        author: '',
        mission: '',
        orgurl: ''
    });
     
    // const [validForm, setValidForm] = useState(false)

    // useEffect(() => {
    //     formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
    // }, [state])

    // const formElement = useRef()
    // console.log(formElement)
  
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(state)
        return fetch('http://localhost:4000/newcharity', {
            method: "POST",
            headers: {
                'Content-type': "application/JSON"
            },
            body: JSON.stringify(state)
        })
        .then(res => res.json())
    }

    return (
        <div align="center">
            <br></br>
            <h1>Enter a new charity or organization:</h1>
            <form onSubmit={handleSubmit} >
                <Form.Group role="form">
            <FloatingLabel controlId="floatingInput" label="Name of Organization" value={state.orgname} name="orgname" onChange={handleChange}>
                <Form.Control type="text" placeholder="orgname" name="orgname"/>
            </FloatingLabel>
            <br />
            <FloatingLabel controlId="floatingInput" label="Your Name" value={state.author} name="author" onChange={handleChange}>
                <Form.Control type="text" placeholder="author" name="author"/>
            </FloatingLabel>
            <br />
            <FloatingLabel controlId="floatingInput" label="Mission Statement" value={state.mission} name="mission" onChange={handleChange}>
                <Form.Control type="text" placeholder="mission" name="mission"/>
            </FloatingLabel>
            <br />
            <FloatingLabel controlId="floatingInput" label="Website" value={state.orgurl} name="orgurl" onChange={handleChange}>
                <Form.Control type="text" placeholder="orgurl" name="orgurl"/>
            </FloatingLabel>
            <br />
            <Link to = {{
                pathname: '/home',
                state: {state}
            }}>
            <Button variant="dark" type="submit" onClick={handleSubmit}>Add Charity</Button>
            </Link>
            </Form.Group>
            </form>
        </div>
        )
} 

export default AddNew;

//need the onClick on the button to submit the data to the database, but
//it will not redirect back to where the Link tag is telling it to go. Works
//without the handleSubmit, but then it won't be added to DB.