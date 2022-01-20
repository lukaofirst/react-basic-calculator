import React from 'react';
import CalcButtons from './components/CalcButtons';
import Container from './components/Container';
import Header from './components/Header';
import Output from './components/Output';

function App() {
    return (
        <Container>
            <Header />
            <Output />
            <CalcButtons />
        </Container>
    );
}

export default App;
