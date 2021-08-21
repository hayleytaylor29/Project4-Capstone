import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function OrgSearch(props) {
    const [organ, setOrgan] = useState(null);
    const handleChange = (event) => {
        setOrgan(event.target.value)
        console.log(organ)
    }
        console.log(organ)
    return(
        <div align="center">
            <br></br>
            <h1>Search for a Charity or Organization</h1>
            <br />
            <Form>
            <FloatingLabel controlId="floatingInput" label="Enter Keyword" onChange={handleChange}>
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