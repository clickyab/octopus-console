import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {dispatch} from '../../services/dispatch';
import './style.css';
import {failedLogin} from "../../redux/actions/index";
import { withRouter } from 'react-router-dom'

const {SubMenu} = Menu;

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.key === 'logout') {
            this.logOut()
        }
    }

    logOut() {
        dispatch(failedLogin());
        this.props.history.push('/login');
    }
    render() {
        return (
            <div>
                <div className="logo" />
                <Menu theme="dark" mode={this.props.mode} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
                onClick={this.handleClick}>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span className="nav-text">Dashboard</span></span>}
                    >
                        <Menu.Item key="1">profile</Menu.Item>
                        <Menu.Item key="2">demand</Menu.Item>
                        <Menu.Item key="3">supplier</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="logout">
                            <span>
                                <Icon type="file" />
                                <span className="nav-text">LogOut</span>
                            </span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(Sidebar);