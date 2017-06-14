import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";
import {select} from "../../services/select";
import Login from "../login/index";
import {connect} from "react-redux";
import {ProtectedRoute} from "../../services/ProtectedRouteComponent";
import Sidebar from '../sidebar/index';
import Dashboard from "../dashboard/index";
import {Layout} from 'antd';


const {Content, Footer, Sider} = Layout;

@connect(({isLogin}) => ({isLogin}))
export default class ExLayout extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        isLogin: false,
        minHeight: window.innerHeight
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLogin !== this.state.isLogin) {
            this.setState({isLogin: nextProps.isLogin})
        }
    }

    componentDidMount() {
        this.setState({isLogin: this.props.isLogin});

        window.onresize = (e) => {
            this.setState({minHeight: e.target.innerHeight})
        }
    }

    render() {
        return (
            <Layout style={{minHeight: this.state.minHeight}}>
                {this.state.isLogin && <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <Sidebar mode={this.state.mode}/>
                </Sider>}
                <Layout>
                    <Content style={{margin: '0 16px'}}>
                        <Route exact path="/" render={() => (
                            select('isLogin') ? <Redirect to="/dashboard"/> : <Redirect to="/login"/>
                        )}/>

                        <Route exact path="/login" render={() => (
                            select('isLogin') ? <Redirect to="/dashboard"/> : <Login />
                        )}/>
                        <ProtectedRoute path="/dashboard" component={Dashboard}/>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Clickyab Exchange ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
