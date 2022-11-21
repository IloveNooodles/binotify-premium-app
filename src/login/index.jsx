import React from "react";
import { connect } from "react-redux";

import { LoginButton, RegisterButton, LoginForm, LoginInput } from "./style";
import { BlurredBackgroundImage } from "../common/components/components";
import { login } from './action'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    onClickLogin = () => {
        console.log({ username: this.state.username, password: this.state.password });
        this.props.loginFunction({ username: this.state.username, password: this.state.password })
    }

    onClickRegister = () => {
        window.location.href = "/register";
    }

    render() {
        return (
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
    }
}

const mapStateToProps = (state) => {
	return {
        login: state.login
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (data) => dispatch(login(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)