import React from "react";
import { connect } from "react-redux";

import { RegisterButton, LoginButton, RegisterForm, RegisterInput, RegisterFailedLabel } from "./style";
import { BlurredBackgroundImage } from "../common/components/components";
import { register, registerFailure } from './action'


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            name: "",
            password: "",
            confirmPassword: "",
        }
    }

    onClickRegister = () => {
        if (this.state.password !== this.state.confirmPassword) {
            this.props.registerFailureFunction("Password and Confirm Password do not match", 1);
            return;
        }
        if (this.state.email === "" || this.state.username === "" || this.state.name === "" || this.state.password === "" || this.state.confirmPassword === "") {
            this.props.registerFailureFunction("Please fill out all fields", 1);
            return;
        }
        this.props.registerFunction({
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
    }

    onClickLogin = () => {
        window.location.href = "/login";
    }

    render() {
        var res = (
            <div>
                <BlurredBackgroundImage src="/images/background.jpg"/>
                <RegisterForm>
                    <h3 style={({
                        'fontSize': '32px',
                        'fontFamily': 'CircularStd',
                        'lineHeight': '42px',
                        'textAlign': 'center'
                        })}>Register</h3>
                    <div>
                        <RegisterInput
                            required
                            type="text"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div>
                        <RegisterInput
                            required
                            type="text"
                            placeholder="Username"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={(e) => this.setState({ username: e.target.value })}

                        />
                    </div>
                    <div>
                        <RegisterInput
                            required
                            type="text"
                            placeholder="Full Name"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}

                        />
                    </div>
                    <div>
                        <RegisterInput
                            required
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <div>
                        <RegisterInput
                            required
                            type="password"
                            placeholder="Confirm Password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                        />
                    </div>
                    <div>
                        <RegisterButton type="button" onClick={this.onClickRegister}>Register</RegisterButton>
                    </div>
                    <div>
                        <LoginButton type="button" onClick={this.onClickLogin}>Already have an account?</LoginButton>
                    </div>
                </RegisterForm>
            </div>
        )

        if (this.props.error_code) {
            res = (
            <div>
                <BlurredBackgroundImage src="/images/background.jpg"/>
                <RegisterForm>
                    <h3 style={({
                        'fontSize': '32px',
                        'fontFamily': 'CircularStd',
                        'lineHeight': '42px',
                        'textAlign': 'center'
                        })}>Register</h3>
                    <div>
                        <RegisterInput
                            type="text"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div>
                        <RegisterInput
                            type="text"
                            placeholder="Username"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={(e) => this.setState({ username: e.target.value })}

                        />
                    </div>
                    <div>
                        <RegisterInput
                            type="text"
                            placeholder="Full Name"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}

                        />
                    </div>
                    <div>
                        <RegisterInput
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <div>
                        <RegisterInput
                            type="password"
                            placeholder="Confirm Password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                        />
                    </div>
                    <RegisterFailedLabel>
                        {this.props.message}
                    </RegisterFailedLabel>
                    <div>
                        <RegisterButton type="button" onClick={this.onClickRegister}>Register</RegisterButton>
                    </div>
                    <div>
                        <LoginButton type="button" onClick={this.onClickLogin}>Already have an account?</LoginButton>
                    </div>
                </RegisterForm>
            </div>
            )
        }
        return res;
    }
}

const mapStateToProps = (state) => {
	return {
        error_code: state.register.error_code,
        message: state.register.message,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerFunction: (data) => dispatch(register(data)),
        registerFailureFunction: (message, error_code) => dispatch(registerFailure(message, error_code)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)