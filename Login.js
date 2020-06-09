import React, { Component } from 'react'
import './Login.css'

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        }
    }

    handleLoginFormSubmit = (event) => {       
        this.setState({
            emailError: '',
            passwordError: ''
        })
        if (this.loginFormValidation()) {
            alert(JSON.stringify(this.state))
        }
        event.preventDefault();
    }

    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginFormValidation() {
        if (!this.state.email.includes("@") && this.state.password.length < 5) {
            this.setState({
                emailError: 'Invalid email',
                passwordError: 'Invalid Password'
            })
        }
        else if (!this.state.email.includes("@")) {
            this.setState({
                emailError: 'Invalid email',
            })
        }
        else if (this.state.password.length < 5) {
            this.setState({
                passwordError: 'Password should not less than 5 caracter'
            })
        }
        else {
            return true;
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-form-wrapper">
                    <div class="login-pic" data-tilt="">
                        <img src="https://clipground.com/images/user-login-icon-png-2.png" alt="IMG" />
                    </div>
                    <form className="login-form" onSubmit={this.handleLoginFormSubmit}>
                        <h1>Member Login</h1>
                        <div className="error">
                            <p>{this.state.emailError}</p>
                            <p>{this.state.passwordError} </p>
                        </div>
                        <div class="wrap-input">
                            <input class="input-field" type="text" name="email" placeholder="Email" name="email" value={this.state.name} onChange={this.handleForm} />
                        </div>
                        <div class="wrap-input">
                            <input class="input-field" type="password" name="pass" placeholder="Password" name="password" value={this.state.password} onChange={this.handleForm} />
                            
                        </div>
                        <div class="container-login-form-btn">
                            <button class="login-form-btn">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login
