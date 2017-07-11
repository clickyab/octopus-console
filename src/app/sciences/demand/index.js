import React, {Component} from 'react';
import {DatePicker, message, Table, Spin} from 'antd';
import * as swagger from './../../swagger/index';
import {connect} from "react-redux";
import {dispatch} from "./../../services/dispatch";
import {getDemandData, userUnauthorized} from "../../redux/actions/index";
import {demandColumns} from './demandDataColumns';

const {RangePicker} = DatePicker;

@connect(({userData, demandData}) => ({userData, demandData}))
export default class Demand extends Component {
    state = {
        loading: false,
        demandData: null
    };

    onChange = (data, dataString) => {
        let from = dataString[0].replace(/-/g, "");
        let to = dataString[1].replace(/-/g, "");

        this.createDemand(from, to);
    };

    reqDemand = (from, to) => {
        let token = this.props.userData.token;
        return new Promise((resolve, reject) => {
            new swagger.RoutesApi()
                .reportDemandFromToGet(from, to, token, {}, (error, body, response) => {
                    if (response.statusCode === 200) return resolve(response.body)
                    else return reject(response)

                })
        });
    };

    createDemand = async (from, to) => {
        try {
            this.setState({loading: true});

            const data = await this.reqDemand(from, to);
            dispatch(getDemandData(data));

            this.setState({demandData: this.props.demandData.data, loading: false});
        } catch (error) {
            if (error.statusCode === 401) {
                message.error('Your session is expired, Please login again');
                dispatch(userUnauthorized());
            } else {
                message.error(error.body.error.text);
            }
            this.setState({loading: false});
        }
    };


    disabledStartDate = (current) => {
        return current && current.valueOf() > Date.now()
    };

    render() {
        return (
            <div style={{padding: 24, background: '#fff', minHeight: 500}}>
                <RangePicker style={{marginBottom: 10}} disabledDate={this.disabledStartDate} size="large"
                             onChange={this.onChange}/>
                <Spin spinning={this.state.loading}>
                    <Table rowKey={record => record.id} dataSource={this.state.demandData} columns={demandColumns}/>
                </Spin>
            </div>
        )
    }
}