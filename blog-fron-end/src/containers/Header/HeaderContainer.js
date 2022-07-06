import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const HeaderContainer = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand to="/" as={NavLink}>BLOG</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Blogs</Nav.Link>
                        <Nav.Link href="#action2">Create Blog</Nav.Link>
                    </Nav>
                    <Nav style={{paddingRight: "300px"}}>
                        Sveiki, Dominykas Šmičius
                    </Nav>
                    <Nav>
                        <p></p>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#action2">Favorites</Nav.Link>
                        <NavDropdown title="Languages" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">LT</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">EN</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>


                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav>
                        <Nav.Link href="#action1">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderContainer;


















