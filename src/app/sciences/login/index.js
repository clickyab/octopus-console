import React, {Component} from 'react';
import {Button, Form, Input, Icon, Row, Col, Checkbox, message, Spin} from 'antd';
import {dispatch} from '../../services/dispatch';
import {failedLogin, successfulLogin, userResponseSuccess} from "../../redux/actions/index";
import {withRouter} from 'react-router-dom';
import * as swagger from './../../swagger/index';
import './styles/index.less';
import {http500Error} from "../../services/http500ErrorNotif";

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.submitLogin(values);
            }
        })
    };

    login = (formData) => {
        return new Promise((resolve, reject) => {
            (new swagger.RoutesApi()
                    .userLoginPost({'payloadData': formData}, (error, body, response) => {
                        if (!response) return reject({statusCode: 500});
                        if (response.statusCode === 200) return resolve(response.body);
                        if (response.statusCode === 502) return reject({statusCode: 502});
                        else return reject(response.body);
                    })
            )
        })
    };

    submitLogin = async (formData) => {
        this.setState({loading: true});
        try {
            const data = await this.login(formData);
            dispatch(successfulLogin());
            dispatch(userResponseSuccess(data));

            message.success('You are successfully logged in.');
            this.props.history.push('/dashboard');
        } catch (error) {
            dispatch(failedLogin());
            if (error.statusCode === 500) {
                http500Error();
            }
            if (error.statusCode === 502) {
                message.error('Please check your network or proxy!');
            } else {
                message.error(error.error.text);
            }
            this.setState({loading: false});
        }
    };

    componentWillUnmount() {
        this.setState({loading: false})
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Row type="flex" align={'center'} justify={'center'} className={'form-layout'}>
                <Col xl={6} sm={12} xs={20} className={'login-form'}>
                    <h3 className={'text-center'}>Exchange login account</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!'
                                }, {
                                    required: true, message: 'Please input your username!'
                                }]
                            })(
                                <Input prefix={<Icon type="user"/>} placeholder="Email"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your password!'}]
                            })(
                                <Input prefix={<Icon type="lock"/>} type="Password" placeholder="Password"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Checkbox>Remember me</Checkbox>
                            <br />
                            <Spin spinning={this.state.loading} delay={500}>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Spin>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Form.create()(withRouter(Login));