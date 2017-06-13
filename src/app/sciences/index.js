import React, { Component } from 'react';
import {Layout} from 'antd';
import Sidebar from './sidebar/index';
import Dashboard from "./dashboard/index";

const {Content, Footer, Sider } = Layout;

class App extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }

    render() {
        console.log(this.props)
        return (
            <Layout>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <Sidebar mode={this.state.mode}/>
                </Sider>
                <Layout>
                    <Content style={{ margin: '0 16px' }}>
                        <Dashboard/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Clickyab Exchange ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>

        );
    }
}

export default App;