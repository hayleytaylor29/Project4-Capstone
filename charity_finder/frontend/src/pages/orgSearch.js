import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrgSearchResults from './searchResults';

function OrgSearch(props) {
    const [orgSearch, setOrgSearch] = useState(null);
    const handleChange = (event) => {
        setOrgSearch(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        OrgSearchResults(orgSearch)
        console.log(orgSearch)
    }
    return(
        <div align="center">
        <h1>Search for a Charity Organization</h1>
        <h6>Use the fields below to narrow your search:</h6>
        <br />
        <Form onSubmit={handleSubmit} >
        <FloatingLabel controlId="floatingInput" label="Name of Organization" onChange={handleChange}>
            <Form.Control type="text" placeholder="orgname" />
        </FloatingLabel>
        <br />
        <Link to='/orgsearchresults'>
        <Button variant="dark" type="submit" onClick={OrgSearchResults}>Search</Button>
        </Link>
        </Form>
        </div>
    )
}

export default OrgSearch;