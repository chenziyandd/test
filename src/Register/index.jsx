import React from "react";
import { Space, Button, Input, Form, Modal } from 'antd';
import './index.css';
const Register = (props) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        if (props.data.some(i => i.userName === values.userName)) {
            Modal.error({ content: '已存在相同的用户名' })
        } else {
            Modal.success({
                content: '注册成功', onOk: () => {
                    props.setData([...props.data, { ...values, key: values.userName }]);
                    form.resetFields();
                }
            });
        }
    };
    return (<div className="Register">
        <p className="title">注册页</p>
        <Form
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            form={form}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="用户名"
                name="userName"
                rules={[
                    {
                        required: true,
                        message: '用户名不能为空',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '密码不能为空',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="手机号"
                name="phoneNum"
            >
                <Input />
            </Form.Item>
            <Space>
                <Button type="primary" htmlType="submit">注册</Button>
                <Button onClick={() => { form.resetFields(); }}>重置</Button>
            </Space>
        </Form>
    </div>)
}
export default Register;