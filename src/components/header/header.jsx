import React from 'react';
import { Container, Logo } from './header.styles';
import logo from '../../assets/logo.png';

export default function Header() {
    
    const valuesAreVisibies = () => {console.log('ok')}

    return(
        <>
            <Container>
                <Logo src={logo} alt="logo da empresa com o nome Fliper" />
                <button onClick={valuesAreVisibies}>botão</button>
            </Container>
        </>
    );
};
