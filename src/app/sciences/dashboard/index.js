import React, {Component} from 'react';
import {Breadcrumb} from 'antd';

export default class Dashboard extends Component {
    render() {
        return(
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>profile</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 500}}>
                    Welcome to Exchange
                </div>
            </div>
        )
    }
}