import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

function Header() {
  return (
    <>
        <Navbar className="bg-primary">
            <Container>
            <Navbar.Brand className='fs-2 text-white'>Quotes</Navbar.Brand>
            </Container>
        </Navbar>
    </>
  )
}

export default Header