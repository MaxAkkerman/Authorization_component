import {makeStyles} from "@material-ui/core/styles";

export const SignUpStyles = makeStyles(({
    container:{
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    wrapper:{
        display: "flex",
        flexDirection:"column",
        margin:"auto",
        flex:"0.3",
        marginTop: "50px",
    },
    signUpInput:{
        marginBottom: "5px",
        height: "70px",
    },
    submit:{
        marginBottom: "5px",
        backgroundColor: "#af7031",

    },
    imgWrapper: {
        width:"200px",
        height:"200px",
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '50px',
    },
    img:{
        width:"100%",
        height:"100%",
    },
    logInBtn:{
        backgroundColor: "#af7031",
        top: '5px',
        left: '5px',
        position: 'absolute',

    },
    checkbox:{
        display:"flex",
        flexDirection:"row",
        marginBottom: '5px',
        alignItems: 'center',
        color: "rgba(0, 0, 0, 0.54)",

},
    noUserError:{
        extAlign: "center",
        color: '#af7031',
        margin: '10px',
        alignSelf: 'center',
        fontSize: '0.875rem',
        minWidth: '64px',
        boxSizing: 'border-box',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        lineHeight: 1.75,
        borderRadius: '4px',
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
    },
    mainWrapper:{
        textAlign: "center",
        margin:"auto",
        width:"500px",
        display: 'flex',
        flexDirection: 'column',

    },
    mainImg:{
        width:"auto",
    }
}));
