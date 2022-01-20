import styled from 'styled-components';

export const StyledCalcButtonSingle = styled.div`
    width: 76px;
    height: 60px;
    margin-left: 1px;
    margin-right: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid orange;
    border-radius: 5px;
    color: #ff8000;
    transition: 0.1s ease-in;
    margin-top: 5px;

    &:hover {
        background-color: orange;
        color: white;
        border-color: white;
    }
`;
