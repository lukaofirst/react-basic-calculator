import React from 'react';
import CalcButtons from './components/CalcButtons';
import Container from './components/Container';
import Header from './components/Header';
import Output from './components/Output';
import CalculatorProvider from './context/calculator-context';

function App() {
    return (
        <CalculatorProvider>
            <Container>
                <Header />
                <Output />
                <CalcButtons />
            </Container>
        </CalculatorProvider>
    );
}

export default App;
