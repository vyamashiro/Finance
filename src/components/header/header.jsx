import React from 'react';
import { Container, Logo } from './header.styles';
import logo from './logo.png';

export default function Header() {
    return(
        <>
            <Container>
                <Logo src={logo} alt="logo da empresa com o nome Fliper" />
            </Container>
        </>
    );
};
