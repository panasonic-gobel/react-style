import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div``

export const Register = () => (
    <Styles>
        <div className='container'>
            <div className='d-flex justify-content-center h-100'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Register</h3>
                        <Form>
                            <Form.Group controlId='formBasicEmail'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                />
                            </Form.Group>
                            <Form.Group controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Password'
                                />
                            </Form.Group>
                            <Button href='' variant='outline-success'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </Styles>
)
