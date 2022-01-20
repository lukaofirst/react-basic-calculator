import CalcButtonSingle from './CalcButtonSingle';
import { StyledCalculatorButtons } from './styles/CalcButtons.styled';
import BackspaceIcon from '@mui/icons-material/Backspace';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Times from '@mui/icons-material/Clear';

const CalcListButtons = [
    '%',
    'CE',
    'C',
    <BackspaceIcon fontSize='small' />,
    '1/x',
    'x²',
    'sqrt(x)',
    '/',
    7,
    8,
    9,
    <Times fontSize='small' />,
    4,
    5,
    6,
    <RemoveIcon fontSize='small' />,
    1,
    2,
    3,
    <AddIcon fontSize='small' />,
    '+/-',
    0,
    ',',
    '=',
];

const CalculatorButtons = () => {
    return (
        <StyledCalculatorButtons>
            {CalcListButtons.map((item, index) => (
                <CalcButtonSingle key={index}>{item}</CalcButtonSingle>
            ))}
        </StyledCalculatorButtons>
    );
};

export default CalculatorButtons;
