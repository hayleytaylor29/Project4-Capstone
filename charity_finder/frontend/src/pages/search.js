import { Form, FloatingLabel, Button } from 'react-bootstrap';
import React from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = React.useState(null);
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    return(
        <>
        <h1>Search for a Charity Organization</h1>
        <FloatingLabel controlId="floatingInput" label="Name of Organization" className="mb-3">
            <Form.Control type="text" placeholder="orgname" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="State (ex: 'NY')" width="50%" className="mb-3">
            <Form.Control  type="text" placeholder="region" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Cause" className="mb-3">
            <Form.Control type="text" placeholder="cause" />
            </FloatingLabel>
        <Button variant="dark">Search</Button>
        </>
    )
}
export default Search;