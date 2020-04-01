import React , {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";



class CustomNavbar extends Component{

    handleLogout = () => {
        console.log(this.props)
        localStorage.setItem('isAuth',false)
        this.props.history.push('/login')
        console.log(localStorage)

    }
   
    render(){
        return(
            <>
                
                <Navbar className="navbar"  expand="lg" bg="white">
                    <Navbar.Brand href="#home" style={{paddingRight:20 }} >KOTOVA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav className="navLinks"><Link to="/" style={{margin:10}}>Home</Link></Nav>
                    <Nav className="navLinks"><Link to="/ContactUs" style={{margin:10}}>Contact Us</Link></Nav>
                    <Nav className="navLinks"><Link to="/AboutUs" style={{margin:10}}>About Us</Link></Nav>
                    <Nav className="navLinks"><Link to="/Products" style={{margin:10}}>Products</Link></Nav>
                    
                    
                </Nav>
                <Form inline>
                <Link to="/login"><Button variant="outline-danger" onClick={this.handleLogout} style={{margin:10,borderRadius:20}} >Log Out</Button></Link>
                </Form>
                </Navbar.Collapse>
                </Navbar>
                
            
            </>
        );
    }
}
export default CustomNavbar;