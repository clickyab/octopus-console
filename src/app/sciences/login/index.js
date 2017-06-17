import React, {Component} from 'react';
import {Button, Form, Input, Icon, Row, Col, Checkbox, message, Spin} from 'antd';
import {dispatch} from '../../services/dispatch';
import {successfulLogin} from "../../redux/actions/index";
import {withRouter} from 'react-router-dom';
import './styles/index.less';

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    login = () => {
        setTimeout(() => {
            dispatch(successfulLogin());
            this.props.history.push('/dashboard')
        },3000)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                this.setState({loading: true});
                message.success('You are successfully logged in.');
                this.login();
                console.log(values);
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Row type="flex" align={'center'}  justify={'center'} className={'form-layout'}>
                <Col xl={6} sm={12} xs={20} className={'login-form'}>
                    <h3 className={'text-center'}>Exchange login account</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your username!'}]
                            })(
                                <Input prefix={<Icon type="user"/>} placeholder="Username"/>
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