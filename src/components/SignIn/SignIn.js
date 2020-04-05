import React, {useEffect, useState} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import {useHistory} from "react-router";
import {validate, DataOnChangeCounter, errorCounter} from "../../helpers/helpers.js";
import {SignUpStyles} from "../../Styles.js";
import Logo from "../../static/LogoLogo.png"
import {SignInSettings, dataNeededToValidate} from "./SignInSettings.js";

function SignIn() {
    const history = useHistory();
    const classes = SignUpStyles();

    const [settings, setSettings] = useState(SignInSettings);
    const [onInputTouched, setInputTouched] = useState(false);
    const [wasValidated, setWasValidated] = useState(false);
    const [noUserError, setNoUserError] = useState(false);

    const handleChange = (e, id) => {
        const x = settings.map(item =>
            item.id === id ? {...item, value: e.target.value} : item);
        setSettings(x);
        setInputTouched(DataOnChangeCounter(x))
    };

    const handleValidation = () => {
        let passValue = settings.filter(item =>
            item.id === "password"
        );
        let y = settings.map((item) =>
            dataNeededToValidate.indexOf(item.id) !== -1 ? {
                ...item,
                error: validate(item.value, item.id, passValue[0].value)
            } : item
        );
        setSettings(y);
        setWasValidated(true);
    };

    const onLocalStorageCheck = () => {
       let passValue = settings.filter(item =>
            item.id === "password");
       let passData = JSON.parse(localStorage.getItem("password"));
       let error = passData === passValue[0].value;
       !error ? setNoUserError(true) : setNoUserError(false);
       return error
    };

    useEffect(() => {
        if (onInputTouched && wasValidated && onLocalStorageCheck() && errorCounter(settings)) {
            handleSubmitActions();
    }
    }, [onInputTouched, wasValidated, settings]);

    const handleSubmitActions = () => {
        history.push("/defaultMain");
        setInputTouched(false);
        setWasValidated(false);
        setNoUserError(false)
    };
    const handleSignIn = () => {
        history.push("/");
    };

    return (
        <Grid className={classes.container}>
            <Button onClick={handleSignIn} className={classes.logInBtn} variant="contained">
                Sign Up
            </Button>
            <Grid className={classes.wrapper}>
                <Grid className={classes.imgWrapper}>
                    <img alt={""} className={classes.img} src={Logo}/>
                </Grid>

                {settings.map(item =>
                    <TextField
                        key={item.id}
                        className={classes.signUpInput}
                        size={item.size}
                        id={item.id}
                        label={item.label}
                        placeholder={item.placeholder}
                        required={item.required}
                        error={item.error}
                        value={item.value}
                        helperText={item.error ? item.helperText : ""}
                        variant="filled"
                        onChange={(e) => handleChange(e, item.id)}
                    />
                )
                }
                <Button onClick={handleValidation}
                        className={classes.submit}
                        variant="contained"
                >
                    Submit
                </Button>
                {noUserError && <Grid className={classes.noUserError}>
                    No such user in database<br/>
                    Please sign Up
                </Grid>}
            </Grid>
        </Grid>
    )
}

export default (withRouter(SignIn))