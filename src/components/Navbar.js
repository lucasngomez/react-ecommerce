import React from 'react';
//Components
import CartWidget from './CartWidget'
// Bootstrap
import { Container, Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
// Resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../resources/logo.png';

import { Link } from 'react-router-dom'

const navBar = ({companyName}) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="none" id="back-red">
                <Container>
                    <Navbar.Brand>
                    <Link to={"/"}>
                        <img
                        src={logo}
                        width="40"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link to={"/"}><h3 className="company-name text-uppercase">{companyName}</h3></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/category/man"}>Man</Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button id="search-button" variant="lite"><FontAwesomeIcon icon={faSearch}/></Button>
                            <CartWidget></CartWidget>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )   
}

export default navBar;