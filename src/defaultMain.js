import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Logo from "./static/LogoLogo.png";
import React from "react";
import {withRouter} from "react-router-dom";
import {SignUpStyles} from './Styles.js'
import {useHistory} from "react-router";

function DefaultMain() {
    const classes = SignUpStyles();
    const history = useHistory();

    const handleGoBack = () => {
        history.push("/")
    };

    return (
        <Grid style={{flexDirection: "column"}} className={classes.container}>
            <Button onClick={handleGoBack} className={classes.logInBtn} variant="contained">
                Exit
            </Button>
            <img alt={""} className={classes.mainImg} src={Logo}/>
            <Grid className={classes.noUserError}>
                You are on the Main Page
            </Grid>
        </Grid>
    )
}

export default (withRouter(DefaultMain))