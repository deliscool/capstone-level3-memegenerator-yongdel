import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'

class NavBar extends
    React.Component {
        render(){
            return <div>
        <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          Yong
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
          <Nav>
            <Nav.Link href="#blog">and</Nav.Link>
            <Nav.Link href="#about-us"><Navbar.Brand>
          Del
        </Navbar.Brand></Nav.Link>
            <Nav.Link href="#contact-us">Capstone Meme Project</Nav.Link>
          </Nav>

      </Navbar>
      </div>
    }
    }
export default NavBar