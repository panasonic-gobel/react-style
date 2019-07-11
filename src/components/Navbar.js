import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

export const Navbar1 = () => (
    <div className='container'>
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand href='/'>
                <img
                    alt=''
                    src=''
                    width='30'
                    height='30'
                    className='d-inline-block align-top'
                />
                {' betterhelp'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Link href='/about'>About</Nav.Link>
                    <Nav.Link href='/advice'>Advice</Nav.Link>
                    <Nav.Link href='/job'>Counselor Job </Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                    <Button
                        href='/login'
                        variant='outline-success'
                        className='mr-2'
                    >
                        Login
                    </Button>
                    <Button href='/register' variant='outline-success'>
                        Get Started
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)
