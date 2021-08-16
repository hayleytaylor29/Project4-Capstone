import { Navbar, Nav, Container } from 'react-bootstrap'

function Navigation() {
    return(
<Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/home">Charity Finder</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/orgsearch">Search</Nav.Link>
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