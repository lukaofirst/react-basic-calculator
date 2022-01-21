import { useState, useEffect, createContext } from 'react';

export const CalculatorContext = createContext({
    nextValue: '0',
    handleOperation: () => {},
});

const CalculatorProvider = (props) => {
    const [prevValue, setPrevValue] = useState(null);
    const [nextValue, setNextValue] = useState('0');
    const [op, setOp] = useState(null);

    useEffect(() => {
        let timeout;

        timeout = setTimeout(() => {
            setNextValue('0');
        }, 10000);

        return () => clearTimeout(timeout);
    }, [nextValue]);

    const CalculatorOperations = {
        '/': (firstValue, nextValue) => firstValue / nextValue,
        '*': (firstValue, nextValue) => firstValue * nextValue,
        '+': (firstValue, nextValue) => firstValue + nextValue,
        '-': (firstValue, nextValue) => firstValue - nextValue,
        '=': (nextValue) => nextValue,
    };

    const performOperation = () => {
        let temp = CalculatorOperations[op](
            parseFloat(prevValue),
            parseFloat(nextValue)
        );

        setOp(null);
        setNextValue(String(temp));
        setPrevValue(null);
    };

    const handleNum = (number) => {
        setNextValue(nextValue === '0' ? String(number) : nextValue + number);
    };

    const insertDot = () => {
        if (!/\./.test(nextValue)) {
            setNextValue(nextValue + '.');
        }
    };

    const percentage = () => {
        setNextValue(parseFloat(nextValue) / 100);

        if (prevValue && nextValue === '') {
            setPrevValue(parseFloat(prevValue) / 100);
        }
    };

    const oneDivideBy = () => {
        setNextValue(1 / parseFloat(nextValue));
    };

    const powerByTwo = () => {
        setNextValue(Math.pow(parseFloat(nextValue), 2));
    };

    const squareRoot = () => {
        setNextValue(Math.sqrt(parseFloat(nextValue)));
    };

    const changeSign = () => {
        setNextValue(parseFloat(nextValue) * -1);
    };

    const clearData = () => {
        setNextValue('0');
        setPrevValue(null);
    };

    const backspaceValue = () => {
        setNextValue((prevValue) => prevValue.slice(0, -1));
    };

    const handleOperation = (value) => {
        if (Number.isInteger(value)) {
            handleNum(parseInt(value, 10));
        } else if (value in CalculatorOperations) {
            if (op === null) {
                setOp(value);
                setPrevValue(nextValue);
                setNextValue('');
            }
            if (op) {
                setOp(value);
            }
            if (prevValue && op && nextValue) {
                performOperation();
            }
        } else if (value === 'C' || value === 'CE') {
            clearData();
        } else if (value === '\xB1') {
            changeSign();
        } else if (value === '.') {
            insertDot();
        } else if (value === '%') {
            percentage();
        } else if (value === '1/x') {
            oneDivideBy();
        } else if (value === 'x²') {
            powerByTwo();
        } else if (value === 'sqrt(x)') {
            squareRoot();
        } else {
            backspaceValue();
        }
    };

    const contextValue = {
        nextValue,
        handleOperation,
    };

    return (
        <CalculatorContext.Provider value={contextValue}>
            {props.children}
        </CalculatorContext.Provider>
    );
};

export default CalculatorProvider;
