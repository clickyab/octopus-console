import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {dispatch} from '../../services/dispatch';
import {failedLogin, getSidebarState} from "../../redux/actions/index";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import './style/index.less';

@connect(({sidebarState}) => ({sidebarState}))
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

    logOut = () => {
        dispatch(failedLogin());
        this.props.history.push('/login');
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