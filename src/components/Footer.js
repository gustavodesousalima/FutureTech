import React from 'react';
import styled from 'styled-components';

const Conteiner = styled.div`
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #00CC66;
    width: 100%;
    height: 25vh;
    gap: 6vh;
`;

const Figure = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vh;
    gap: 5vh;
`;

const Icon = styled.img`
    width: 7vh;
`;

const P = styled.p`
    color: #00CC66;
`;


const Footer = () => {
    return (
        <footer>
            <Conteiner>
                <Figure>
                    <Icon src="https://icon.signature.email/social/linkedin-circle-medium-0077b5-FFFFFF.png" />
                    <Icon src="https://icon.signature.email/social/google-circle-medium-e4443d-FFFFFF.png" />
                    <Icon src="https://skillicons.dev/icons?i=github" />
                </Figure>

                <P>&copy; 2023 FutureTech. Todos os direitos reservados.</P>
            </Conteiner>
        </footer>
    );
}

export default Footer;