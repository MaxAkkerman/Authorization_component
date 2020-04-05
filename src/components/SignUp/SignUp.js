import React, {useEffect, useState} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import {useHistory} from "react-router";
import {validate, toJson, DataOnChangeCounter, errorCounter} from "../../helpers/helpers.js";
import {SignUpStyles} from "../..//Styles.js";
import Logo from "../../static/LogoLogo.png"
import {SignUpSettings, dataForLocalStorage, dataNeededToValidate} from "./SignUpSettings.js";

function SignUp() {
    const history = useHistory();
    const classes = SignUpStyles();

    const [settings, setSettings] = useState(SignUpSettings);
    const [permiss, setPermiss] = useState(false);
    const [onInputTouched, setInputTouched] = useState(false);
    const [wasValidated, setWasValidated] = useState(false);

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
        return true
    };

    useEffect(() => {
        if (onInputTouched && wasValidated) {
            if (errorCounter(settings)) {
                setPermiss(true)
            }
        }
        if (permiss) {
            handleSubmitActions();
        }
    }, [onInputTouched, settings, permiss]);

    const handleSubmitActions = () => {
        settings.forEach((item) =>
            dataForLocalStorage.indexOf(item.id) !== -1 ? localStorage.setItem(`${item.id}`, toJson.S(item.value)) : ""
        );
        history.push("/defaultMain");
        setInputTouched(false);
        setPermiss(false);
        setWasValidated(false);
    };
    const handleSignIn = () => {
        history.push("/SingIn")
    };

    return (
        <Grid className={classes.container}>
            <Button onClick={handleSignIn} className={classes.logInBtn} variant="contained">
                Sign In
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
            </Grid>
        </Grid>
    )
}

export default (withRouter(SignUp))