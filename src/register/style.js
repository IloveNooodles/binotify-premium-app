import { Form } from 'semantic-ui-react'
import styled from 'styled-components'

export const GreenButton = styled('button')`
    background-color: #1ed760;
    color: #fff;
    border-radius: 2rem;
    border: none;

    &:hover {
        background-color: #0ab346;
        transition: all 0.2s linear;
    }
`

export const LoginButton = styled(GreenButton)`
    margin-top: 60px;
    width: 100%;
    padding: 15px 0;
    font-size: 14px;
    font-weight: 300;

`

export const RegisterButton = styled(GreenButton)`
    margin-top: 35px;
    width: 100%;
    padding: 15px 0;
    font-size: 14px;
    font-weight: 300;
`

export const RegisterForm = styled(Form)`
    height: 715px;
    width: 450px;
    background-color: var(--clr-background-base);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: none;
    box-shadow: 0 0 40px var(--clr-background-base);
    padding: 50px 35px;
`

export const RegisterInput = styled('input')`
    display: block;
    height: 50px;
    width: 100%;
    margin-top: 25px;
    color: var(--clr-text-black);
    font-size: 14px;
    font-weight: 300;
    padding: 10px;
    padding-left: 25px;
    font-family: CircularStd;
    border: none;
    border-radius: var(--radius-lg);
`
