import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const appHeader = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Note Taker</a>
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
