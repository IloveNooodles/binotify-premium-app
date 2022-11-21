import React from "react";
import { connect } from "react-redux";

import { RegisterButton, LoginButton, RegisterForm, RegisterInput } from "./style";
import { BlurredBackgroundImage } from "../common/components/components";
// import { login } from './action'


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
        window.location.href = "/register";
    }

    onClickLogin = () => {
        window.location.href = "/";
    }

    render() {
        return (
            <div>
                <BlurredBackgroundImage src="/images/background.jpg"/>
                <RegisterForm>
                    <h3 style={({
                        'fontSize': '32px',
                        'fontWeight': '500',
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
                    <div>
                        <LoginButton type="button" onClick={this.onClickRegister}>Register</LoginButton>
                    </div>
                    <div>
                        <RegisterButton type="button" onClick={this.onClickLogin}>Already have an account?</RegisterButton>
                    </div>
                </RegisterForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        // login: state.login
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        // loginFunction: (data) => dispatch(login(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)