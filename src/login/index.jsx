import React from "react";
import { Form, Input } from "semantic-ui-react";

import { LoginButton } from "./style";


class Login extends React.Component {
    render() {
        return (
            <Form>
                <h3>Binotify</h3>
                <Form.Field>
                    <Input
                        type="text"
                        placeholder="Username"
                        id="username"
                        name="username"
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                    />
                </Form.Field>
                <Form.Field>
                    <LoginButton type="submit">Log In</LoginButton>
                </Form.Field>
                <Form.Field>
                    <LoginButton type="button">Register</LoginButton>
                </Form.Field>
            </Form>
        );
    }
}

export default Login