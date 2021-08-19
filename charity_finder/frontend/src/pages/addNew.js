import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import axios from 'axios';


const newChar = [];

function AddNew() {
    const [state, setState] = useState(null);
    this.state = {
        orgname: '',
        author: '',
        mission: '',
        orgurl: ''
    }
    let handleChange = (event) => {
        this.setState(event.target.value)
        // newChar.push(setState)
        console.log(state)
    }
    console.log(state);

    const data = {
        orgname: this.state.orgname,
        author: this.state.author,
        mission: this.state.mission,
        orgurl: this.state.orgurl
    };
    
    console.log(newChar)
    useEffect(() => {
        // axios
        //     .post('http://localhost:4000/newcharity', data)
        //     .then(res => {
        //         this.setState({
        //             orgname: '',
        //             author: '',
        //             mission: '',
        //             orgurl: ''
        //         })
                
        //     })
        fetch("/newcharity", {
            method: "POST",
            headers: {
                'Content-type': "application/JSON"
            },
            body: JSON.stringify(newChar)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div align="center">
            <h1>Enter your new charity below:</h1>
        <Form>
        <FloatingLabel controlId="floatingInput" label="Name of Organization" onChange={this.handleChange}>
            <Form.Control type="text" placeholder="orgname" value={this.state.orgname} />
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingInput" label="Your Name" onChange={this.handleChange}>
            <Form.Control type="text" placeholder="author" value={this.state.author}/>
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingInput" label="Mission Statement" onChange={this.handleChange}>
            <Form.Control type="text" placeholder="mission" value={this.state.mission}/>
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingInput" label="Website" onChange={this.handleChange}>
            <Form.Control type="text" placeholder="orgurl" value={this.state.orgurl} />
        </FloatingLabel>
        <br />
        <Link to = {{
            pathname: '/home',
        }}>
        <Button variant="dark" type="submit">Add Charity</Button>
        </Link>
        </Form>
        </div>
        )
} 
    
    
export default AddNew;