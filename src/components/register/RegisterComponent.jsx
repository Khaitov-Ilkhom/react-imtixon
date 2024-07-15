import "./AuthForm.css";
import {Button, Col, Form, Input, InputNumber, notification, Row} from 'antd';
import {Typography} from "antd";
import {Link, useNavigate} from "react-router-dom";
import axios from "../../api/axios.jsx";

const {Title, Text} = Typography;

const Register = () => {

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (pauseOnHover) => {
        api.open({
            message: 'Successfully create account',
            description:
                "You have successfully registered",
            showProgress: true,
            pauseOnHover,
        });
    }
    const navigate = useNavigate()
    const onFinish = async (values) => {
        const value = {
            ...values,
            isAdmin: true
        }
        const res = axios.post("users/register", value)
        res.then(respons => {
            openNotification(true)
            setTimeout(() => {
                navigate("/login")
            }, 3000)
            console.log(respons)
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
                            <Title style={{textAlign: 'center'}} level={2}>Register</Title>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your username!',
                                    },
                                ]}
                            >
                                <Input placeholder="Name"/>
                            </Form.Item>

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
                                <Input placeholder="email@gmail.com"/>
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

                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your phone number!',
                                    },
                                ]}
                            >
                                <Input placeholder="+998 ** *** ** **"/>
                            </Form.Item>

                            <Form.Item
                                label="Street"
                                name="street"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your street!',
                                    },
                                ]}
                            >
                                <Input placeholder="Street"/>
                            </Form.Item>

                            <Row gutter={1}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Apartment"
                                        name="apartment"
                                        rules={[
                                            {
                                                type: "number",
                                                min: 0,
                                                max: 100000,
                                                required: true,
                                                message: 'Please enter your apartment!',
                                            },
                                        ]}

                                    >
                                        <InputNumber placeholder="Apartment"/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Zip"
                                        name="zip"
                                        rules={[
                                            {
                                                type: "number",
                                                min: 0,
                                                max: 100000,
                                                required: true,
                                                message: 'Please enter your zip!',
                                            },
                                        ]}
                                    >
                                        <InputNumber placeholder="Zip"/>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                label="City"
                                name="city"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your city!',
                                    },
                                ]}
                            >
                                <Input placeholder="City"/>
                            </Form.Item>

                            <Form.Item
                                label="Country"
                                name="country"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your country!',
                                    },
                                ]}
                            >
                                <Input placeholder="Country"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full my-2">
                            Submit
                        </Button>
                    </Form.Item>
                    <Text style={{textAlign: 'center'}}>Don't have an account? <Link to="/login">Log In</Link></Text>
                </Form>
            </div>
        </>
    )
}
export default Register
