import React from "react";
import { connect } from "react-redux";

import { LoginButton, RegisterButton, LoginForm, LoginInput, LoginFailedLabel } from "./style";
import { BlurredBackgroundImage } from "../common/components/components";
import { login, loginFailure } from './action'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    onClickLogin = () => {
        if (this.state.username === "" || this.state.password === "") {
            this.props.loginFailureFunction("Please fill out all fields", 1);
            return
        }
        this.props.loginFunction({ username: this.state.username, password: this.state.password })
    }

    onClickRegister = () => {
        window.location.href = "/register";
    }

    render() {

        var res = (
            <div>
                <BlurredBackgroundImage src="/images/background.jpg"/>
                <LoginForm>
                    <h3 style={({
                        'fontSize': '32px',
                        'fontWeight': '500',
                        'lineHeight': '42px',
                        'textAlign': 'center'
                        })}>Binotify Premium</h3>
                    <div>
                        <LoginInput
                            type="text"
                            placeholder="Username"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={(e) => this.setState({ username: e.target.value })}

                        />
                    </div>
                    <div>
                        <LoginInput
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <div>
                        <LoginButton type="button" onClick={this.onClickLogin}>Log In</LoginButton>
                    </div>
                    <div>
                        <RegisterButton type="button" onClick={this.onClickRegister}>Register</RegisterButton>
                    </div>
                </LoginForm>
            </div>
        );

        if (this.props.error_code) {
            var res = (
                <div>
                    <BlurredBackgroundImage src="/images/background.jpg"/>
                    <LoginForm>
                        <h3 style={({
                            'fontSize': '32px',
                            'fontWeight': '500',
                            'lineHeight': '42px',
                            'textAlign': 'center'
                            })}>Binotify Premium</h3>
                        <div>
                            <LoginInput
                                type="text"
                                placeholder="Username"
                                id="username"
                                name="username"
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}
    
                            />
                        </div>
                        <div>
                            <LoginInput
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                        </div>
                        <LoginFailedLabel>
                            {this.props.message}
                        </LoginFailedLabel>
                        <div>
                            <LoginButton type="button" onClick={this.onClickLogin}>Log In</LoginButton>
                        </div>
                        <div>
                            <RegisterButton type="button" onClick={this.onClickRegister}>Register</RegisterButton>
                        </div>
                    </LoginForm>
                </div>
            );
        }

        return res
    }
}

const mapStateToProps = (state) => {
	return {
        error_code: state.login.error_code,
        message: state.login.message,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (data) => dispatch(login(data)),
        loginFailureFunction: (message, error_code) => dispatch(loginFailure(message, error_code))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)