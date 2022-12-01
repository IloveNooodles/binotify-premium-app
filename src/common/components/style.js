import styled from 'styled-components';

export const MenuBar = styled('div')`
    padding: 1rem 1rem;
    margin: 0 auto;
    height: 100%;
    width: 200px;
    background-color: var(--clr-background-base);
    position: fixed;
    top: 0;
    z-index: 1;
    overflow: auto;
`

export const MenuBarHeader = styled('h3')`
    margin: 0 auto !important;
    padding: 1rem 1rem;
    padding-bottom: 1.5rem;
    float: left;
    border: none;
    display: block;
    width: 100%;
    text-align: left;
    white-space: normal;
    float: none;
    color: var(--clr-text-primary);
    font-size: 1.5rem !important;
`

export const MenuBarLinks = styled('a')`
    padding:0.6rem 1rem;
    float: left;
    border: none;
    display: block;
    width: 100%;
    text-align: left;
    white-space: normal;
    vertical-align:middle;
    overflow:hidden;
    text-decoration:none;
    color: var(--clr-text-secondary);
    cursor:pointer;

    &:hover {
        color: var(--clr-text-primary);
        transition: var(--transition);
    }
    &.active {
        color: var(--clr-text-primary);
    }
`

export const UserButton = styled('button')`
    background-color: var(--clr-background-highlight-one);
    margin-left: 16px;
    margin-right: 16px;
    cursor: pointer;
    border-radius: var(--radius-lg);
    border: none;
    color: var(--clr-text-secondary);
    font-family: CircularStd;
    align-items: center;
    display: inline-flex;
    font-size: var(--fs-heading);
    transition: var(--transition);
    position: fixed;
    bottom: 2rem;
    left: 1rem;

    &:hover {
        background-color: var(--clr-background-highlight-two);
        color: var(--clr-text-primary);
    }
    & p {
        padding-right: 10px;
        margin: 0;
    }
    & i {
        margin-right: 10px;
        margin-top: 6px;
    }
    & img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
        display: inline-block;      
    }
`

export const UserMenu = styled('div')`
    display: none;
    background-color: var(--clr-background-highlight-one);
    min-width: 160px;
    z-index: 3;

    &.show {
        display: inherit;
        position: absolute;
        bottom: 4.5rem;
    }
`

export const UserMenuItem = styled('button')`
    color: var(--clr-text-secondary);
    padding: 12px 16px;
    display: block;
    background: none;
    outline: none;
    border: none;
    width: 100%;
    font-size: var(--fs-heading);
    text-align: left;
    font-family: var(--ff-main);

    &:hover {
        background-color: var(--clr-background-highlight-two);
        color: var(--clr-text-primary);
`

export const DeleteConfirmationModal = styled('div')`
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);

    &.show {
        display: block;
    }
    & .confirmation-box {
        z-index: 2;
        height: 10rem;
        width: 30rem;
        background-color: var(--clr-background-highlight-one);
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        backdrop-filter: blur(10px);
        border: none;
        box-shadow: 0 0 20px var(--clr-background-highlight-one);
        padding: 20px 20px;
        visibility: visible;
        transform: translate;
        color: var(--clr-text-primary);
        border-radius: 15px;
        top: -50%;
        transition: all .5s ease-in-out;
        &.show {
            visibility: visible;
            opacity: 1;
            top: 10%;
        }
    }
    & .confirmation-text {
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        text-align: center;
        margin-top: 1rem;
    }
    & .footer {
        display: flex;
        justify-content: flex-end;
        margin-top: 2rem;
    }
    & .footer button {
        background-color: var(--clr-background-highlight-two);
        color: var(--clr-text-primary);
        border: none;
        border-radius: var(--radius-lg);
        padding: 0.5rem 1rem;
        font-size: var(--fs-body);
        font-family: CircularStd;
        cursor: pointer;
        transition: var(--transition);
        margin: 0 0.5rem;
    }
    & .btn-danger:hover {
        background-color: var(--clr-text-danger);
        color: var(--clr-text-black);
    }
    & .btn-cancel:hover {
        background-color: var(--clr-text-info);
        color: var(--clr-text-black);
    }
`

export const InsertSongForm = styled('form')`
    height: 450px;
    width: 400px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 50px 35px;
    display: none;
    background-color: var(--clr-background-highlight-one);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: none;
    box-shadow: 0 0 20px var(--clr-background-highlight-one);
    z-index: 2;

    &.show {
        display: block;
    }
    & * {
        color: var(--clr-text-primary);
        outline: none;
        border: none;      
    }
    & h3 {
        font-size: 32px;
        line-height: 42px;
        text-align: center;
        margin-bottom: 3rem;
    }
    & input[type="text"] {
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
    }
    & select {
        display: block;
        height: 50px;
        width: 100%;
        margin-top: 25px;
        color: var(--clr-text-black);
        font-size: 14px;
        font-weight: 300;
        padding: 10px;
        padding-left: 25px;
        padding-right: 25px;
        font-family: CircularStd;
        border: none;
        border-radius: var(--radius-lg);
        align-items: center;      
    }
    & input[type="file"] {
        margin-top: 5px;
    }
    & input[type="file"]::file-selector-button {
        border: none;
        background-color: var(--clr-background-highlight-two);
        padding: 7px 20px;
        border-radius: var(--radius-lg);
        color: var(--clr-text-primary);
        font-family: CircularStd;
        cursor: pointer;
        &:hover {
            background-color: var(--clr-background-highlight-three);
            transition: var(--transition);
        }
    }
    & .submit-btn {
        margin-top: 5rem;
        width: 100%;
        padding: 15px 0;
        font-size: 14px;
        font-weight: 300;      
    }
    & .sumbit-failure {
        font-size: 14px;
        font-weight: 300;
        margin-top: 15px;
        padding: 0 10px;
        color: var(--clr-text-danger);
        z-index: 1;
        display: block;
        position: absolute;
    }
    & .sumbit-success {
        font-size: 14px;
        font-weight: 300;
        margin-top: 15px;
        padding: 0 10px;
        color: var(--clr-text-info);
        z-index: 1;
        display: block;
        position: absolute;
    }
`

export const DarkBackground = styled('div')`
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);

    &.show {
        display: block;
    }
`