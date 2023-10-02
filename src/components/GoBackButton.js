import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ImgArrow from "../img/arrow.png"

const Button = styled.button`
    opacity: ${({isVisible}) => (isVisible ? 1 : 0)};
    background-color: #000; 
    background-image: url(${ImgArrow});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 6vh;
    border: 0.2vh solid black;
    transition: opacity 0.6s ease;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 40vh;
    right: 30px; 
    cursor: pointer;

    @media screen and (max-width: 480px) {
        background-size: 3vh;
        width: 32px;
        height: 32px;
        right: 6px;
    }
`;

const GoBackButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };


    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Button isVisible={isVisible} onClick={scrollToTop}></Button>
    );
}

export default GoBackButton;
