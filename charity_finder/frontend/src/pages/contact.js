import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom'



function Contact() {
    const [form, setForm] = useState(null);
    const handleChange = (event) => {
        setForm(event.target.value)
    }
        console.log(form)
    return(
        <div align="center">
            <br />
            <h1>Contact us:</h1>
            <Form.Group role="form">
                <FloatingLabel controlId="floatingInput" label="Name" name="name" onChange={handleChange}>
                    <Form.Control type="text" placeholder="name" name="name"/>
                </FloatingLabel>
                <br />
                <FloatingLabel controlId="floatingInput" label="Email Address" name="email" onChange={handleChange}>
                    <Form.Control type="text" placeholder="email" name="email"/>
                </FloatingLabel>
                <br />
                <FloatingLabel controlId="floatingInput" label="Comments" name="comments" onChange={handleChange}>
                    <Form.Control type="text" placeholder="comments" name="comments"/>
                </FloatingLabel>
                <Link to={{
                    pathname: '/home',
                    state: {form}
                }}>
                <br />
                <Button variant="dark" type="submit">Submit</Button>
                </Link>
                </Form.Group>
        </div>
    )
}

export default Contact;