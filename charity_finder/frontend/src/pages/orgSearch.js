import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import OrgSearchResults from './searchResults';

function OrgSearch(props) {
    const [organ, setOrgan] = useState(null);
    const handleChange = (event) => {
        setOrgan(event.target.value)
        console.log(organ)
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // OrgSearchResults(organ)
    // }
        console.log(organ)
    return(
        <div align="center">
        <h1>Search for a Charity Organization</h1>
        <h6>Use the fields below to narrow your search:</h6>
        <br />
        <Form>
        <FloatingLabel controlId="floatingInput" label="Name of Organization" onChange={handleChange}>
            <Form.Control type="text" placeholder="orgname" />
        </FloatingLabel>
        <br />
        <Link to={{
            pathname: '/orgsearchresults',
            state: {organ}
        }}>
        <Button variant="dark" type="submit">Search</Button>
        </Link>
        </Form>
        </div>
    )
}

export default OrgSearch;