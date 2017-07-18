import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const appHeader = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Note Taker</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullRight>
          <LinkContainer to="/create">
            <Button bsStyle="primary">Create Note</Button>
          </LinkContainer>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default appHeader;
