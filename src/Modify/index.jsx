import React, { useEffect } from "react";
import { Space, Button, Input, Form, Modal } from 'antd';
const Register = (props) => {
    const [form] = Form.useForm();
    useEffect(() => {
        props.editData && form.setFieldsValue(props.editData);
    }, []);
    const onFinish = (values) => {
        let newdata = [...props.data];
        newdata.forEach(i => {
            if (i.userName === values.userName) {
                i.password = values.password;
                i.phoneNum = values.phoneNum;
            }
        })
        Modal.success({
            content: '修改成功', onOk: () => {
                props.setData(newdata);
                props.close();
            }
        });
    };
    return (<div>
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
                <Input disabled />
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
                <Input />
            </Form.Item>
            <Form.Item
                label="手机号"
                name="phoneNum"
            >
                <Input />
            </Form.Item>
            <Space style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="primary" htmlType="submit">修改</Button>
            </Space>
        </Form>
    </div>)
}
export default Register;