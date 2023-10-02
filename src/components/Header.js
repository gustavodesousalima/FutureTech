import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.png';

const HeaderContainer = styled.header`
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh;
    width: 100%;
    height: 12vh;
    border-bottom: 2px solid #00CC66;

    @media screen and (max-width: 480px) {
        height: 8vh;
        gap: 2vh;
        padding-top: 4vh;
    }
`;

const Figure = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18vh;
    border-radius: 10%;
    `;

const Imagem = styled.img`
    max-width: 18vh;
    cursor: pointer;

    @media screen and (max-width:480px) {
        max-width: 10vh;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right: 8vh;
    gap: 4vh;

    @media screen and (max-width: 480px) {
        gap: 2vh;
    }
`;

const A = styled.a`
    color:  #00CC66;
    text-decoration: none;
    transition:  color 0,2s;

    &:hover {
    color: #66FF66;
    text-decoration: underline;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Figure>
                <A href='#'><Imagem src={Logo} alt="Logo" /></A>
            </Figure>
            <Nav>
                <A href='#'>Home</A>
                <A href='https://forbes.com.br/forbes-tech/2022/01/10-tendencias-tecnologicas-que-transformarao-o-mundo/' target='_blank'>Explorar</A>
                <A href='https://www.linkedin.com/in/gustavo-developer/' target='_blank'>Contato</A>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;