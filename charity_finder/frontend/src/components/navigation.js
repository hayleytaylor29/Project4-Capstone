import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

function Navigation(props) {
    return(
<Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/home">Charity Finder</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <NavDropdown title="Search" id="basic-nav-dropdown" >
          <NavDropdown.Item href="/orgsearch">By Organization Name</NavDropdown.Item>
          <NavDropdown.Item href="/regionsearch">By Region</NavDropdown.Item>
          <NavDropdown.Item href="/causesearch">By Cause</NavDropdown.Item>
        </NavDropdown>
        <Container>
        <Nav.Link href="/newcharity">Add a New Charity</Nav.Link>
        </Container>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;