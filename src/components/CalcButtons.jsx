import { useContext } from 'react';
import { CalculatorContext } from '../context/calculator-context';

import CalcButtonSingle from './CalcButtonSingle';
import { StyledCalculatorButtons } from './styles/CalcButtons.styled';
import { BsBackspaceFill } from 'react-icons/bs';

const CalculatorButtons = () => {
    const calcCtx = useContext(CalculatorContext);

    const { handleOperation } = calcCtx;

    return (
        <StyledCalculatorButtons>
            <CalcButtonSingle
                keyValue={'%'}
                displayValue={'%'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'CE'}
                displayValue={'CE'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'C'}
                displayValue={'C'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'bspace'}
                displayValue={<BsBackspaceFill />}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'1/x'}
                displayValue={'1/x'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'x²'}
                displayValue={'x²'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'sqrt(x)'}
                displayValue={'sqrt(x)'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'/'}
                displayValue={'/'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                classes={true}
                keyValue={7}
                displayValue={7}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                classes={true}
                keyValue={8}
                displayValue={8}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                classes={true}
                keyValue={9}
                displayValue={9}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'*'}
                displayValue={'*'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                classes={true}
                keyValue={4}
                displayValue={4}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                classes={true}
                keyValue={5}
                displayValue={5}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                classes={true}
                keyValue={6}
                displayValue={6}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'-'}
                displayValue={'-'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                classes={true}
                keyValue={1}
                displayValue={1}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                classes={true}
                keyValue={2}
                displayValue={2}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                classes={true}
                keyValue={3}
                displayValue={3}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'+'}
                displayValue={'+'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'\xB1'}
                displayValue={'\xB1'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                classes={true}
                keyValue={0}
                displayValue={0}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'.'}
                displayValue={'.'}
                onClick={handleOperation}
            />
            <CalcButtonSingle
                keyValue={'='}
                displayValue={'='}
                onClick={handleOperation}
            />
        </StyledCalculatorButtons>
    );
};

export default CalculatorButtons;
