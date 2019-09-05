import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Formik, Form, Field } from "formik";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import '../style/style.scss';

library.add(fab, fas);


class Login extends Component {
    state = {
        profile: {},
        isLogin: false,
        res: {},
    }

    login = async (values) => {
        try {
            if (values.email.length > 0 && values.password.length > 0) {
                if (this.props.users.length > 0) {
                    for (const u of this.props.users) {
                        if (u.email === values.email && u.password === values.password) {
                            this.setState({
                                res: {
                                    access_token: 'this is access token',
                                    "exp": 1568129819000,
                                    "token_type": "Bearer"
                                },
                                profile: {
                                    name: u.fullname,
                                    email: u.email
                                }
                            })
                            localStorage.setItem('token', JSON.stringify(this.state.res))

                            localStorage.setItem('profile', JSON.stringify(this.state.profile))
                            this.setState({
                                isLogin: true
                            })
                        }
                        else {
                            Swal.fire('Oops...', 'Invalid Email or Password', 'error')
                        }
                    }
                }
            }
        } catch (error) {
            Swal.fire('Oops...', 'Login Fail', 'error')
            this.setState({
                isLogin: false
            })
        }
    }

    logout = () => {
        localStorage.removeItem('token'); localStorage.removeItem('profile');
        this.setState({
            isLogin: false
        })
    }

    componentDidMount() {
        const profile = JSON.parse(localStorage.getItem('profile'));
        if (profile) {
            this.setState({
                profile: profile,
                isLogin: true
            })
        }
    }

    render() {
        return (
            <>
                {
                    this.state.isLogin ? (
                        <span className="navbar-text text-welcome">
                            ยินดีต้อนรับ คุณ {this.state.profile.name}
                            <a href="/" onClick={this.logout}><FontAwesomeIcon icon={['fas', 'sign-out-alt']}  className="ml-2 text-logout" /></a>
                        </span>
                    ) : (
                            <Formik
                                onSubmit={(values, { setSubmitting }) => {
                                    this.login(values)
                                    setSubmitting(false);
                                }}
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                            >
                                {

                                    ({
                                        handleSubmit,
                                        handleChange,
                                        isSubmitting
                                    }) => (
                                            <Form className="form-inline">
                                                <div className="form-group">
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        autoComplete="username"
                                                        className="form-control form-control-sm mr-sm-2"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Field
                                                        type="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        autoComplete="new-password"
                                                        className="form-control form-control-sm mr-sm-2"
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="btn btn-booking btn-sm my-2 my-sm-0"
                                                    disabled={isSubmitting}
                                                >
                                                    Log In
                                                </button>
                                            </Form>
                                        )
                                }
                            </Formik>
                        )
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.registerReducer.users,
    }
}

export default connect(mapStateToProps)(Login);