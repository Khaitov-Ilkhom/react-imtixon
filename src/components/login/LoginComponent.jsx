import React from 'react'
import {Button, Col, Form, Input, notification, Row, Typography} from "antd";
import {Link, useNavigate} from "react-router-dom";
import axios from "../../api/axios.jsx";
import saveToLocalStorage from "../../utils/LocalStorage.jsx";

const {Title, Text} = Typography;


const Login = () => {

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (pauseOnHover) => {
        api.open({
            message: 'Successfully login',
            description:
                "You have successfully logged into your account",
            showProgress: true,
            pauseOnHover,
        });
    }

    const navigate = useNavigate()

    const onFinish = (values) => {
        const res = axios.post("users/login", values)
        res.then(respons => {
            openNotification(true)
            setTimeout(() => {
                navigate("/home")
            }, 3000)
            saveToLocalStorage("token", respons.data.token)
        }).catch(error => {
            console.log(error)
        })

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            {contextHolder}
            <div className="auth-container">
                <Form
                    name="registrationForm"
                    layout="vertical"
                    onFinish={onFinish}
                    className="auth-form"
                    onFinishFailed={onFinishFailed}
                >
                    <Row gutter={10}>
                        <Col span={24}>
                            <Title style={{textAlign: 'center'}} level={2}>Log In</Title>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your email!',
                                    },
                                ]}
                            >
                                <Input placeholder="email@domain.com"/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Password"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full my-2">
                            Submit
                        </Button>
                    </Form.Item>
                    <Text style={{textAlign: 'center'}}>Don't have an account? <Link to="/">Register</Link></Text>
                </Form>
            </div>
        </>
    )
}
export default Login
