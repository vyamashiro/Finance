import React from 'react';
import { Container, Header, MoreOptionButton, Main, H3, Li, Value, Footer, ButtonMoreOptions } from './card.styles';
import IconMoreOptions from '../../assets/IconMoreOptions';

export default function Card() {
    return(
        <>
            <Container>
                <Header>
                    <h1>Seu resumo</h1>
                    <MoreOptionButton>
                        <IconMoreOptions />
                    </MoreOptionButton>
                </Header>
                <Main>
                    <span>Valor investido</span>
                    <H3>R$ 3.200.876,00</H3>
                    <div>
                        <Li>Rentabilidade<Value>{'2,767%'}</Value></Li>
                        <Li>CDI<Value>{'3,45%'}</Value></Li>
                        <Li>Ganho/mês<Value>{'R$ 1833,23'}</Value></Li>
                    </div>
                </Main>
                <Footer>
                    <ButtonMoreOptions>Ver mais</ButtonMoreOptions>
                </Footer>
            </Container>
        </>
    );
};
