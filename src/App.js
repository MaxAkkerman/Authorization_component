import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom'
import SignUP from "./components/SignUp/SignUp.js";
import SignIn from "./components/SignIn/SignIn.js"
import DefaultMain from "./defaultMain.js"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
        };
    }

    render() {
        return (
            <Switch>
                <Route path="/SingIn" exact component={SignIn}/>
                <Route path="/" exact component={SignUP}/>
                <Route path="/defaultMain" exact component={DefaultMain}/>
            </Switch>
        )
    }
}

export default withRouter(App);


