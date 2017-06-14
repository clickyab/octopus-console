import React, {Component} from 'react';
import {Button} from 'antd';
import {dispatch} from '../../services/dispatch';
import {successfulLogin} from "../../redux/actions/index";
import {withRouter} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    login() {
        dispatch(successfulLogin());
        this.props.history.push('/dashboard')
    }

    render() {
        return(
            <div>
                <Button type="primary" onClick={this.login}>Login</Button>
            </div>
        )
    }
}

export default withRouter(Login);