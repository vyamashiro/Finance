import React, { useState } from 'react';
import { Container, Header, MoreOptionButton, Main, H3, Ol, Li, Value, Footer, ButtonMoreOptions } from './card.styles';
import IconMoreOptions from '../../assets/IconMoreOptions';
import { useQuery } from '@apollo/client';
import WEALTH_SUMMARY from '../../querys/querys';

export default function Card() {
    const [isVisible, setIsVisible] = useState(true)
    const { loading, error, data  } = useQuery(WEALTH_SUMMARY);

    if (loading) { return <p>Carregando...</p>;}
    if (error) { return <p>Ocorreu um erro, tente novamente mais tarde.</p>;}

    const handleVisibility = (e) => { 
        e.preventDefault();
        setIsVisible(!isVisible)
    }

    return(
        <>
            {data.wealthSummary.map((info, index) => (
                <Container key={index}>
                    <Header>
                        <h1>Investimento {info.id}</h1>
                        <MoreOptionButton onClick={handleVisibility}>
                            <IconMoreOptions />
                        </MoreOptionButton>
                    </Header>
                    <Main>
                        <span>Valor investido</span>
                        <H3>{isVisible ? info.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) : '---'}</H3>
                        <Ol>
                            <Li>Rentabilidade<Value>{isVisible ? info.profitability.toFixed(2) + '%' : '---'}</Value></Li>
                            <Li>CDI<Value>{isVisible ? info.cdi.toFixed(2) + '%' : '---'}</Value></Li>
                            <Li>Ganho/mês<Value>{isVisible ? info.gain.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) : '---'}</Value></Li>
                        </Ol>
                    </Main>
                    <Footer>
                        <ButtonMoreOptions>Ver mais</ButtonMoreOptions>
                    </Footer>
                </Container>
            ))};
        </>
    );
};
