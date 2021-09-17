import styled from 'styled-components';

export const Container = styled.section`
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 2px 2px 1px 0 rgb(26 57 144 / 25%);
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    margin: 20px auto;
    width: 300px;
    padding: 20px;
`;

export const Header = styled.header`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 25px;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 10px;
`;

export const MoreOptionButton = styled.button`
    background-color: inherit;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    height: 2.2rem;
    width: 2.25rem;

    :hover {
        background-color: #E8EBF6;
        transition-duration: 400ms;
    }
`;

export const Main = styled.main`
    text-align: center;
`;

export const H3 = styled.h3`
    margin-top: 5px;
`;

export const Ol = styled.ol`
    padding-inline-start: 0px;
`;

export const Li = styled.li`
    justify-content: space-between;
    display: flex;
`;

export const Value = styled.span`
    color: #3B5CB8;
    font-weight: 900;
`;

export const Footer = styled.footer`
    border-top: 0.5px solid #9AA3BC;
    display: flex;
    margin-top: 10px;
    justify-content: flex-end;
`;

export const ButtonMoreOptions = styled.button`
    background: transparent;
    border: 1px solid #3B5CB8;
    border-radius: 20px;
    color: #3B5CB8;
    cursor: pointer;
    font-weight: 900;
    margin-top: 20px;
    padding: 7px 13px 7px 13px;
    text-transform: uppercase;

    :hover {
        color: #FFFFFF;
        background-color:#3B5CB8;
        transition-duration: 400ms;
    }
`;
