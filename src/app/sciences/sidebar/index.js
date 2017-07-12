import React, {Component} from 'react';
import {Menu, Icon, message} from 'antd';
import {dispatch} from '../../services/dispatch';
import {failedLogin, getSidebarState, successfulLogout, userUnauthorized} from "../../redux/actions/index";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import * as swagger from './../../swagger/index';
import './style/index.less';
import {http500Error} from "../../services/http500ErrorNotif";

@connect(({sidebarState, userData}) => ({sidebarState, userData}))
class Sidebar extends Component {
    handleClick = e => {
        switch (e.key) {
            case 'dashboard':
                this.props.history.push('/dashboard');
                dispatch(getSidebarState('dashboard'));
                break;
            case 'supplier':
                this.props.history.push('/supplier');
                dispatch(getSidebarState('supplier'));
                break;
            case 'demand':
                this.props.history.push('/demand');
                dispatch(getSidebarState('demand'));
                break;
            case 'exchange':
                this.props.history.push('/exchange');
                dispatch(getSidebarState('exchange'));
                break;
            case 'logout':
                this.logOut();
                break;
            default:
                return;
        }
    };

    reqLogout = () => {
        let token = this.props.userData.token;

        return new Promise((resolve, reject) => {
            new swagger.RoutesApi()
                .userLogoutGet(token, (error, body, response) => {
                    if (!response) return reject({statusCode: 500});
                    if (response.statusCode === 200) return resolve(response.body);
                    else return reject(response)
                })
        });
    };

    logOut = async () => {
        try {
            dispatch(failedLogin());
            let data = await this.reqLogout();
            dispatch(successfulLogout(data));

            message.success('You are successfully logout.');
            this.props.history.push('/login');
        } catch (error) {
            if (error.statusCode === 401) {
                message.error('Your session is expired, Please login again');
                dispatch(userUnauthorized());
            }
            if (error.statusCode === 500) {
                http500Error();
            } else {
                message.error(error.body.error.text);
            }
        }

    };

    render() {
        return (
            <div>
                <div className="logo"/>
                <Menu theme="dark" mode={this.props.mode} defaultSelectedKeys={[this.props.sidebarState]}
                      onClick={this.handleClick}>
                    <Menu.Item key="dashboard">
                        <span>
                            <Icon type="home"/>
                            <span className="nav-text">Dashboard</span>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="supplier">
                        <span>
                            <Icon type="man"/>
                            <span className="nav-text">Supplier</span>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="demand">
                        <span>
                            <Icon type="woman"/>
                            <span className="nav-text">Demand</span>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="exchange">
                        <span>
                            <Icon type="sync"/>
                            <span className="nav-text">Exchange</span>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="logout">
                            <span>
                                <Icon type="logout"/>
                                <span className="nav-text">LogOut</span>
                            </span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(Sidebar);