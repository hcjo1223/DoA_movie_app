import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'
import Nav from 'react-bootstrap/Nav'

function Navigation(){
    return (
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    );
}

export default Navigation;