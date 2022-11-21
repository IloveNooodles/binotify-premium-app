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
    margin: 0 auto;
    padding: 1rem 1rem;
    padding-bottom: 1.5rem;
    float: left;
    border: none;
    display: block;
    width: 100%;
    text-align: left;
    white-space: normal;
    float: none;
    color: var(--clr-text-secondary);
    font-size: 1.5rem;
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
