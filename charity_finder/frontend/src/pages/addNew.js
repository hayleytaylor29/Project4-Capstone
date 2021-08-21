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
     
    const [validForm, setValidForm] = useState(false)

    useEffect(() => {
        formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
    }, [state])

    const formElement = useRef()
    console.log(formElement)
  
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        return fetch('/newcharity', {
            method: "POST",
            headers: {
                'Content-type': "application/JSON"
            },
            body: JSON.stringify(state)
        })
        .then(res => res.json())
        // props.handleAddNew(state)
    }

//     function create(state) {
//          return fetch('http://localhost:4000/newcharity', {
//             method: "POST",
//             headers: {
//                 'Content-type': "application/JSON"
//             },
//             body: JSON.stringify(state)
//         })
//         .then(res => res.json())
// }
    return (
        <div align="center">
            <h1>Enter your new charity below:</h1>
        <Form ref={formElement} onSubmit={handleSubmit} autoComplete="off">
        <FloatingLabel controlId="floatingInput" label="Name of Organization" value={state.orgname} name="name" onChange={handleChange}>
            <Form.Control type="text" placeholder="orgname" />
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingInput" label="Your Name" value={state.author} name="author" onChange={handleChange}>
            <Form.Control type="text" placeholder="author" />
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingInput" label="Mission Statement" value={state.mission} name="mission" onChange={handleChange}>
            <Form.Control type="text" placeholder="mission" />
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingInput" label="Website" value={state.orgurl} name="orgurl" onChange={handleChange}>
            <Form.Control type="text" placeholder="orgurl" />
        </FloatingLabel>
        <br />
        <Link to = {{
            pathname: '/viewcharities',
        }}>
        <Button variant="dark" type="submit" disabled={!validForm}>Add Charity</Button>
        </Link>
        </Form>
        </div>
        )
} 

export default AddNew;