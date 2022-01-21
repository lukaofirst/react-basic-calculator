import { MDBBtn } from 'mdb-react-ui-kit';

const CalcButtonSingle = (props) => {
    const styles = {
        width: '71px',
        height: '60px',
        marginLeft: '1px',
        marginRight: '1px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: '5px',
        color: 'white',
        outline: 'none',
        margin: '3px',
        fontSize: '18px',
        fontWeight: 'bold',
        textTransform: 'lowercase',
    };

    return (
        <MDBBtn
            className={!props.classes ? 'btn btn-warning' : 'btn btn-dark'}
            style={styles}
            onClick={() => props.onClick(props.keyValue)}
        >
            {props.displayValue}
        </MDBBtn>
    );
};

export default CalcButtonSingle;
