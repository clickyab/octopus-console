import React, {Component} from 'react';
import {DatePicker, message, Table, Spin, Pagination} from 'antd';
import * as swagger from './../../swagger/index';
import {connect} from "react-redux";
import {dispatch} from "./../../services/dispatch";
import {getDemandData, userUnauthorized} from "../../redux/actions/index";
import {demandColumns} from './demandDataColumns';
import {http500Error} from "../../services/http500ErrorNotif";
import {dfc} from "../../services/dateFormatChange";
import moment from 'moment';

const {RangePicker} = DatePicker;

@connect(({userData, demandData}) => ({userData, demandData}))
export default class Demand extends Component {
    state = {
        loading: false,
        demandData: this.props.demandData.data,
        current: this.props.demandData.page || 1
    };

    onChangeRangePicker = (data, dataString) => {
        let from = dataString[0];
        let to = dataString[1];

        if (from.length === 0 || to.length === 0) return;

        this.setState({current: 1}, () => {
            this.createDemand(from, to);
        })
    };

    onChangePagination = (page) => {
        this.setState({current: page}, () => {
            this.createDemand(this.props.demandData.from, this.props.demandData.to);
        });
    };

    reqDemand = (from, to) => {
        let token = this.props.userData.token;
        let option = {
            p: this.state.current
        };
        return new Promise((resolve, reject) => {
            new swagger.RoutesApi()
                .reportDemandFromToGet(from, to, token, option, (error, body, response) => {
                    if (!response) return reject({statusCode: 500});
                    if (response.statusCode === 200) return resolve(response.body);
                    else return reject(response)
                })
        });
    };

    createDemand = async (from, to) => {
        try {
            this.setState({loading: true});

            const data = await this.reqDemand(dfc(from), dfc(to));
            data.from = from;
            data.to = to;
            data.page = this.state.current;
            dispatch(getDemandData(data));

            this.setState({demandData: this.props.demandData.data, loading: false});
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
        let rangeDefaultVal = () => {
          let from = this.props.demandData.from !== undefined ? moment(this.props.demandData.from) : null;
          let to = this.props.demandData.to !== undefined ? moment(this.props.demandData.to) : null;

          return [from, to];
        };
        return (
            <div style={{padding: 24, background: '#fff', minHeight: 500}}>
                <RangePicker style={{marginBottom: 10}} disabledDate={this.disabledStartDate} size="large"
                             onChange={this.onChangeRangePicker}
                             defaultValue={rangeDefaultVal()}/>
                <Spin spinning={this.state.loading}>
                    <Table rowKey={record => record.id} dataSource={this.state.demandData}
                           onChange={this.onChangePagination} columns={demandColumns} pagination={false}/>
                    <Pagination className="table-pagination-custom" onChange={this.onChangePagination}
                                current={this.state.current} total={this.props.demandData.count}/>
                </Spin>
            </div>
        )
    }
}