import { useContext } from 'react';

import { CalculatorContext } from '../context/calculator-context';
import { StyledOutput } from './styles/Output.styled';

const Output = () => {
    const calcCtx = useContext(CalculatorContext);

    const { nextValue } = calcCtx;

    const divideByZero = (
        <span style={{ fontSize: '14px' }}>
            Não é possível dividir por zero
        </span>
    );

    return (
        <StyledOutput className='bg-dark'>
            <h1>{isFinite(nextValue) ? nextValue : divideByZero}</h1>
        </StyledOutput>
    );
};

export default Output;
