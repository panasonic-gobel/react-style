import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .container {
        height: 100%;
        align-content: center;
    }
    .card {
        height: 370px;
        margin-top: auto;
        margin-bottom: auto;
        width: 400px;
        background-color: rgba(0, 0, 0, 0.5) !important;
    }
    .card-header h3 {
        color: white;
    }
`

export const Login = () => (
    <Styles>
        <div className='container'>
            <div className='d-flex justify-content-center h-100'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Sign In</h3>
                        <Form>
                            <Form.Group controlId='formBasicEmail'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                />
                                <Form.Text className='text-muted'>
                                    We'll never share your email with anyone
                                    else.
                                </Form.Text>
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
