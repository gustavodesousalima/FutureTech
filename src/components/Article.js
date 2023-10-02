import React from "react";
import styled from "styled-components";
import Tech from '../img/tech.jfif';
import Evolucaotech from '../img/evolucaotech.jfif';
import Img5g from '../img/img5g.jfif';
import Imginfluencia from '../img/influencia.jfif';
import Inteligenciaartificial from '../img/inteligenciaartificial.jfif';
import Computacaoquantica from '../img/computacaoquantica.jfif';
import realidadeaumentada from '../img/realidadeaumentada.jfif';
import GoBackButton from './GoBackButton';

const Conteiner = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 15vh;
`;

const ContainerPrimaryFigure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4vh;
    gap: 8vh;

    @media screen and (max-width: 480px) {
        flex-direction: column;

        > img:last-child, 
        > img:nth-last-child(2){
            display:none;
        }
    }
    `;

const Figure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4vh;
    gap: 8vh;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
    `;

const Imagem = styled.img`
    width: 50vh;
    height: 65vh;
    border-radius: 2vh;
    box-shadow: 0px 0px 24px 2px rgba(0,240,72,0.62);

    &:hover{
    box-shadow: 0px 0px 27px 7px rgba(0,240,72,0.82);
    }

    @media screen and (max-width: 480px) {
     width: 20vh;
     height: 30vh;
    }
`;

const ConteinerText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 1vh;
    margin: 10vh;
    width: 90%;
    gap: 2vh;

    @media screen and (max-width: 480px){
        margin: 4vh;
        gap: 1vh;
    }
    `;

const ConteinerConteudo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid #00CC66;
    border-radius: 1vh;
    margin: 2vh;
    width: 80%;
    gap: 2vh;

    &:last-child{
        border: none;
    }

    @media screen and (max-width: 480px) {
        &:last-child{
            height: 40vh;
            gap: 0vh;
        }
    }
    `;

const TitlePrimary = styled.h1`
    background-color: #333;
    border: 2px solid green;
    border-radius: 1vh;
    padding: 2vh;
    color: #00CC66;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

const TitleSecondary = styled.h2`
    color: #00CC66;
    text-decoration: underline;
    text-align: center;

    @media screen and (max-width: 480px) {
        margin-top: 2vh;
        font-size: 1.3rem;
    }
`;

const Text = styled.p`
    color: #FFFFFF;
    padding: 1vh;
    font-size: 1.2rem;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`;

const TextSecondary = styled.p`
    color: #fff;
    display: flex;
    justify-content: space-between;
    column-count: 2;
    column-width: 50%;
    column-gap: 4vh;
    font-size: 1.2rem;
    text-align: justify;
    padding: 1vh;

    @media screen and (max-width: 480px) {
        text-align: center;
        flex-direction: column;
        font-size: 0.9rem;
    }

`;

const FigureCaption = styled.figcaption`
`;

const LineDivider = styled.div`
  background-color: green;
  width: 2vh;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Article = () => {
    return (
        <Conteiner>
            <ConteinerConteudo>
                <TitlePrimary>Future Tech: As tendências tecnológicas</TitlePrimary>
                <ContainerPrimaryFigure>
                    <Imagem src={Inteligenciaartificial} alt="Imagem setup PC" />
                    <Imagem src={Tech} alt="Imagem tecnologia" />
                    <Imagem src={Imginfluencia} alt="Imagem computação" />
                </ContainerPrimaryFigure>
            </ConteinerConteudo>
            <GoBackButton/>
            <ConteinerConteudo>
                <Figure>
                    <Imagem src={Evolucaotech} alt="Influencia tecnologica" />
                    <FigureCaption>
                        <TitleSecondary>Influência</TitleSecondary>
                        <Text>
                            A tecnologia tem uma influência cada vez maior em nossas vidas, moldando a maneira como vivemos, trabalhamos e nos comunicamos. À medida que avançamos no século 21, várias tendências tecnológicas estão se destacando e prometem revolucionar ainda mais o nosso mundo. Neste artigo, exploraremos algumas dessas tendências em alta na tecnologia que estão moldando nosso futuro.
                        </Text>
                    </FigureCaption>
                </Figure>
            </ConteinerConteudo>

            <ConteinerConteudo>
                <Figure>
                    <FigureCaption>
                        <TitleSecondary>Inteligência Artificial (IA)</TitleSecondary>
                        <Text>
                            A Inteligência Artificial é uma das tendências mais empolgantes e transformadoras na tecnologia atual. Com avanços contínuos em aprendizado de máquina e processamento de linguagem natural, a IA está sendo aplicada em uma variedade de setores, desde assistentes pessoais virtuais até carros autônomos. A IA também está desempenhando um papel fundamental na automação de tarefas repetitivas e na análise de dados em larga escala.
                        </Text>
                    </FigureCaption>
                    <Imagem src={Inteligenciaartificial} alt="Inteligencia artificial usando mão para agarrar homem correndo" />
                </Figure>
            </ConteinerConteudo>

            <ConteinerConteudo>
                <Figure>
                    <Imagem src={Img5g} alt="Planeta terra" />
                    <FigureCaption>
                        <TitleSecondary>5G e Conectividade Ultra-rápida</TitleSecondary>
                        <Text>
                            A implantação da tecnologia 5G está criando uma revolução na conectividade. Essa nova geração de redes móveis oferece velocidades de internet significativamente mais rápidas e uma menor latência. Isso não só aprimora a experiência do usuário em dispositivos móveis, mas também abre portas para a Internet das Coisas (IoT), cidades inteligentes e cirurgias remotas.
                        </Text>
                    </FigureCaption>
                </Figure>
            </ConteinerConteudo>

            <ConteinerConteudo>
                <Figure>
                    <FigureCaption>
                        <TitleSecondary>Realidade Aumentada (RA) e Realidade Virtual (RV)</TitleSecondary>
                        <Text>
                            A RA e a RV estão mudando a forma como interagimos com o mundo digital. Os headsets de RV estão oferecendo experiências imersivas em jogos, treinamento e educação. Enquanto isso, a RA está sendo usada em aplicativos móveis para criar experiências interativas em tempo real, como o popular jogo Pokémon GO.
                        </Text>
                    </FigureCaption>
                    <Imagem src={realidadeaumentada} alt="Mulher usando oculos de realidade aumentada" />
                </Figure>
            </ConteinerConteudo>

            <ConteinerConteudo>
                <Figure>
                    <Imagem src={Computacaoquantica} alt="Computador quantico" />
                    <FigureCaption>
                        <TitleSecondary>Computação Quântica</TitleSecondary>
                        <Text>
                            A computação quântica está à beira de uma revolução. Com a capacidade de resolver problemas complexos em segundos, em comparação com os anos que levaria para os computadores tradicionais, a computação quântica tem o potencial de transformar a pesquisa científica, criptografia e muito mais.
                        </Text>
                    </FigureCaption>
                </Figure>
            </ConteinerConteudo>

            <ConteinerConteudo>
                <TitleSecondary>Conclusão</TitleSecondary>
                <ConteinerText>
                    <TextSecondary>
                        Estas são apenas algumas das tendências tecnológicas em alta que estão moldando nosso futuro. A rápida evolução da tecnologia está trazendo mudanças significativas em todos os aspectos da nossa vida, e é importante ficar atualizado com essas tendências para aproveitar ao máximo o potencial da tecnologia.

                        <LineDivider />

                        À medida que avançamos, podemos esperar mais avanços emocionantes na tecnologia, e aqueles que abraçam e se adaptam a essas mudanças estarão na vanguarda da inovação. Portanto, mantenha-se atualizado, explore novas tecnologias e continue a aprender, pois a tecnologia continua a moldar o nosso mundo de maneiras surpreendentes e empolgantes.
                    </TextSecondary>
                </ConteinerText>
            </ConteinerConteudo>
        </Conteiner>
    )
}

export default Article;