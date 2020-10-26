import React, { Component } from 'react';
import './login.less';
import {Form, Input, Button, Card} from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = () => {
    // 提交表单且数据验证成功后回调事件
    const onFinish = values => {
        console.log('Success:',values);
    };
    // 提交表单且数据验证失败后回调事件
    const onFinishFailed = errorInfo = {
        console.log('Failed:',errorInfo);
    }
        return(
            <Card title="登录页面" className="login-form">
                <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember:true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                ></Form>
            </Card>
        )
};

export default Login;
