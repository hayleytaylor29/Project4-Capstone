import { Form, FloatingLabel, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import OrgSearchResults from './searchResults';

function RegionSearch(props) {
    const [searchTerm, setSearchTerm] = useState(null);
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        OrgSearchResults(searchTerm)
    }
    return(
        <div align="center" max-width="50%">
        <h1>Search for a Charity Organization</h1>
        <h6>Use the fields below to narrow your search:</h6>
        <br />
        <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="State (ex: 'NY')" width="50%" className="region" onChange={handleChange}>
            <Form.Control  type="text" placeholder="region" />
        </FloatingLabel>
        <br />
        <h6>OR</h6>
        <FloatingLabel controlId="floatingInput" label="City" width="50%" className="zip" onChange={handleChange}>
            <Form.Control  type="text" placeholder="city" />
        </FloatingLabel>
        <br />
        <h6>OR</h6>
        <FloatingLabel controlId="floatingInput" label="Zip Code" width="50%" className="zip" onChange={handleChange}>
            <Form.Control  type="text" placeholder="zip" />
        </FloatingLabel>
        <br />
        <Button variant="dark" type="submit">Search</Button>
        </Form>
        </div>
    )
}

export default RegionSearch;