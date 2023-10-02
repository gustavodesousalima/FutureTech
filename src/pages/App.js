import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import styled from 'styled-components';

const TestComponent = styled.div`
    background-color: black;
`

const Home = () => {
    return (
        <TestComponent>
            <Header />
            <Main />
            <Footer />
        </TestComponent>
    );
}

export default Home;