import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { addUser } from '../redux/actions/reducerAction';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import '../style/style.scss';

const RegisterSchema = Yup.object().shape({
    fullname: Yup.string()
        .required('Fullname is Required'),
    password: Yup.string()
        .min(3, 'Please Enter less then 3 letters')
        .required('Password is Required'),
    confirmpassword: Yup.string()
        .min(3, 'Please Enter less then 3 letters')
        .required('Password is Required')
        .test('passwords-match', 'Passwords must match ya fool', function (value) {
            return this.parent.password === value;
        }),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is Required'),
});
class Register extends Component {
    reguster = async (values) => {
        try {
            const apiUrl = 'https://543dba8d-6ff9-43d6-924b-e379a738cdfe.mock.pstmn.io/register';
            const response = await axios.post(apiUrl, values);
            this.props.dispatch(addUser(values, this.props.users));

            if (this.props.message === "This email has already been registered.") {
                Swal.fire('Oops...', this.props.message, 'error')
            }
            else {
                await Swal.fire(response.data.message, 'success')
                await this.props.history.replace({ pathname: '/' });
            }

        } catch (error) {
            // console.log(error)
            alert(error.response.data);
        }
    }

    render() {
        return (
            <>
                <div className="container mt-4 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <Card className="py-0">
                                <Card.Body>
                                    <Formik
                                        initialValues={{ fullname: '', email: '', password: '', confirmpassword: '' }}
                                        validationSchema={RegisterSchema}
                                        onSubmit={(values, { setSubmitting }) => {
                                            this.reguster(values)
                                            setSubmitting(false)
                                        }}
                                    >
                                        {({ isSubmitting, touched, errors }) => (
                                            <Form noValidate>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12 text-topic">
                                                        <span style={{ fontSize: '2em', fontWeight: '500' }}>Register</span>
                                                        <div className="line-border"></div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12">
                                                        <label htmlFor="name" className="text-label">Fullname</label>
                                                        <div className="input-group input-group-sm mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><FontAwesomeIcon className="mr-1" icon={faUser} /> </span>
                                                            </div>
                                                            <Field
                                                                type="text"
                                                                name="fullname"
                                                                placeholder="Fullname"
                                                                className={
                                                                    `form-control ${touched.fullname && errors.fullname ? 'is-invalid' : ''}`
                                                                }
                                                            />
                                                            <ErrorMessage name="fullname" className="invalid-feedback" component="div" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12">
                                                        <label htmlFor="email" className="text-label">Email</label>
                                                        <div className="input-group input-group-sm mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><FontAwesomeIcon className="mr-1" icon={faEnvelope} /> </span>
                                                            </div>
                                                            <Field
                                                                type="email"
                                                                name="email"
                                                                placeholder="Email"
                                                                className={
                                                                    `form-control ${touched.email && errors.email ? 'is-invalid' : ''}`
                                                                }
                                                            />
                                                            <ErrorMessage name="email" className="invalid-feedback" component="div" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12">
                                                        <label htmlFor="password" className="text-label">Password</label>
                                                        <div className="input-group input-group-sm mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><FontAwesomeIcon className="mr-1" icon={faKey} /> </span>
                                                            </div>
                                                            <Field
                                                                type="password"
                                                                name="password"
                                                                placeholder="Password"
                                                                className={
                                                                    `form-control ${touched.password && errors.password ? 'is-invalid' : ''}`
                                                                }
                                                            />
                                                            <ErrorMessage name="password" className="invalid-feedback" component="div" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12">
                                                        <label htmlFor="confirmpassword" className="text-label">Confirm Password</label>
                                                        <div className="input-group input-group-sm mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><FontAwesomeIcon className="mr-1" icon={faKey} /> </span>
                                                            </div>
                                                            <Field
                                                                type="password"
                                                                name="confirmpassword"
                                                                placeholder="Password"
                                                                className={
                                                                    `form-control ${touched.confirmpassword && errors.confirmpassword ? 'is-invalid' : ''}`
                                                                }
                                                            />
                                                            <ErrorMessage name="confirmpassword" className="invalid-feedback" component="div" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center mt-1">
                                                    <div className="col-md-12">
                                                        <button type="submit" disabled={isSubmitting} className="btn bg-btn-primary w-100">
                                                            Register
                                                </button>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div style={{ marginTop: '5rem' }}></div>
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.registerReducer.users,
        message: state.registerReducer.message
    }
}

export default connect(mapStateToProps)(Register);