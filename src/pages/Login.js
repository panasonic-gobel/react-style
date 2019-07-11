<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
// import {withRouter} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";

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
`;

const Login = (props) => (
  <Styles>
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div align='center'className="card-header">
            <h3>Sign In</h3>
            <br/>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }, history) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  props.history.push('/');
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form
                  action="https://formspree.io/email@domain.tld"
                  method="POST"
                >
                  <Field type="email" name="email" placeholder='email@email.com'/>
                  <br/>
                  <ErrorMessage name="email" component="div" />
                  <br/>
                  <Field type="password" name="password" placeholder='password' />
                  <br/>
                  <ErrorMessage name="password" component="div" />
                  <br/>
                  <div>
                    <button type="submit" disabled={isSubmitting}>
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </Styles>
);

export default Login
=======
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
>>>>>>> e2f2c96f59a3f9f69238474bc35c28a2928bdcc4
