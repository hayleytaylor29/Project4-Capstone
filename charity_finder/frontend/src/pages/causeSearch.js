import { Form, FloatingLabel, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function CauseSearch(props) {
    const [searchTerm, setSearchTerm] = React.useState(null);
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.charitySearch(searchTerm)
    }
    return(
        <div align="center" max-width="50%">
        <h1>Search for a Charity Organization</h1>
        <h6>Use the fields below to narrow your search:</h6>
        <br />
        <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="Cause" className="cause" onChange={handleChange}>
            <Form.Control type="text" placeholder="cause" />
            </FloatingLabel>
            <br />
        <Button variant="dark" type="submit">Search</Button>
        </Form>
        </div>
    )
}

export default CauseSearch;