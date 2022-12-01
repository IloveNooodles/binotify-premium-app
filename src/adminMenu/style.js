import styled from 'styled-components';

export const SubscriptionList = styled('table')`
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    & td, th {
        border: none;
        color: var(--clr-text-secondary);
        font-weight: lighter;
        font-size: small;
        padding: 1.25rem 10px;
        padding-right: 0;
    }
    & th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        border-bottom: 1px solid var(--clr-background-highlight-three);
    }
    & tr.content {
        transition: var(--transition);
    }
    & tr.content:hover {
        background-color: var(--clr-background-highlight-two);
    }
    & .manage {
        display: flex;
        align-items: baseline;
    }
    & .manage p:hover {
        color: var(--clr-text-primary);
        cursor: pointer;
        transition: var(--transition);
    }

    & .tableTitle {
        color: var(--clr-text-primary);
        font-weight: bold;
    }
`