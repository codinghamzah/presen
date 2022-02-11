import React, { useState } from "react";
import {  Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";

const Navbarnew = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light"  expand="md" light>
      <Container>
        
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
          <NavbarBrand href="/">Website</NavbarBrand>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="www.google.com">
                
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Admin
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><NavLink href="/data">Data</NavLink></DropdownItem>
                <DropdownItem>menu 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Log out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Admin</NavbarText>
        </Collapse>
        </Container>
      </Navbar>
      </div>
  );
};

export default Navbarnew;
