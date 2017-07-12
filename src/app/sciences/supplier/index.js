import React, {Component} from 'react';
import {DatePicker, message, Table, Spin} from 'antd';
import * as swagger from './../../swagger/index';
import {connect} from "react-redux";
import {dispatch} from "./../../services/dispatch";
import {getSupplierData, userUnauthorized} from "../../redux/actions/index";
import {supplierColumns} from './supplierDataColumns';
import {http500Error} from "../../services/http500ErrorNotif";

const {RangePicker} = DatePicker;

@connect(({userData, supplierData}) => ({userData, supplierData}))
export default class Supplier extends Component {
    state = {
        loading: false,
        supplierData: null
    };

    onChange = (data, dataString) => {
        let from = dataString[0].replace(/-/g, "");
        let to = dataString[1].replace(/-/g, "");

        this.createSupplier(from, to);
    };

    reqSupplier = (from, to) => {
        let token = this.props.userData.token;
        return new Promise((resolve, reject) => {
            new swagger.RoutesApi()
                .reportSupplierFromToGet(from, to, token, {}, (error, body, response) => {
                    if (!response) return reject({statusCode: 500});
                    if (response.statusCode === 200) return resolve(response.body)
                    else return reject(response)

                })
        });
    };

    createSupplier = async (from, to) => {
        try {
            this.setState({loading: true});

            const data = await this.reqSupplier(from, to);
            dispatch(getSupplierData(data));

            this.setState({supplierData: this.props.supplierData.data, loading: false});
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
                    <Table rowKey={record => record.id} dataSource={this.state.supplierData} columns={supplierColumns}/>
                </Spin>
            </div>
        )
    }
}