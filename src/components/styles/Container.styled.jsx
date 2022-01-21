import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 5px;
    border: 1px solid #ff8000;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%); /* for IE 9 */
    -webkit-transform: translate(-50%, -50%); /* for Safari */
`;
