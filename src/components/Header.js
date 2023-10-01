import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.png';

const HeaderContainer = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 2vh;
    width: 100%;
    height: 12vh;
    border-bottom: 2px solid green;

`;

const Figure = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    width: 10vh;
height: 10vh;
`;
const Imagem = styled.img`

max-width: 18vh;
`;

const Nav = styled.nav`

    display: flex;
    justify-content:center;
    align-items: center;
    margin-right: 8vh;
    gap: 2vh;
`;

const A = styled.a`
    color: green;
    transition:  color 0,2s;
    cursor: pointer;

    &:hover {
        color: lightgreen;
        text-decoration: underline;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Figure>
                <A href='#'><Imagem src={Logo} alt="Logo" /></A>
            </Figure>
            <Nav>
                <A>Home</A>
                <A>Quem somos</A>
                <A>Contato</A>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;