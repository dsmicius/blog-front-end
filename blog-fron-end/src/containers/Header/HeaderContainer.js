import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';


const HeaderContainer = () => {

    const authUser = useSelector(state => state.user)
    const blogItems = useSelector(state => state.favorite.items);

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
                        <Nav.Link to="/blogs" as={NavLink}>Blogs</Nav.Link>
                        <Nav.Link to="/blogs/create" as={NavLink}>Create Blog</Nav.Link>
                    </Nav>
                    {authUser.username
                        ? <Nav style={{paddingRight: "10px"}}>
                            Sveiki, {authUser.fullname}
                        </Nav>
                        : ""
                    }
                    <Nav>
                        <p></p>
                    </Nav>
                    <Nav>
                        <Nav.Link to="/favorites" as={NavLink}>
                            <Button type="button" className="btn btn-secondary position-relative">
                                <FontAwesomeIcon className='position-relative' icon={solid('heart')}/>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {blogItems.length}
                                </span>
                            </Button>
                        </Nav.Link>
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
                        {!authUser.username
                            ? <Nav.Link to="/login" as={NavLink}>
                                Login
                            </Nav.Link>
                            : <Nav.Link href="/login">
                                Logout
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderContainer;


















