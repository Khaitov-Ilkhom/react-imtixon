import {useState} from 'react'
import {useFetch} from "../../hooks/useFetch.jsx";
import Container from "../container/Container.jsx";
import {MdDelete, MdEdit} from "react-icons/md";
import axios from "../../api/axios.jsx";
import {Button, Col, Form, Input, InputNumber, Modal, Row, Typography} from "antd";

const {Title, Text} = Typography;

const Products = () => {
    const [open, setOpen] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [data, loading] = useFetch("products")
    const [stock, setStock] = useState(10)
    const [editProducts, setEditProduct] = useState(null)
    const deleteProduct = async (product) => {
        const respons = await axios.delete(`products/${product.id}`)
    }

    const editProduct = async (values) => {
        const value = {...values, isFeatured: true}
        setOpen(true)
        const response = await axios.put(`products/${editProducts}`, value)
    }
    const createNewProduct = async (values) => {
        const value = {...values, isFeatured: true}
        setModal2Open(true)
        const response = await axios.post("products", value)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <div className="w-full text-sky-400 text-xl font-medium text-center my-5 ">
                <button className="" onClick={createNewProduct}>Create new product</button>
            </div>
            <table className="w-full border border-collapse mt-[40px]">
                <tbody className="w-full">
                <tr className='w-full bg-gray-400'>
                    <th className='border w-[50px] py-2'>No</th>
                    <th className='border w-[150px]'>Name</th>
                    <th className='border w-[100px]'>Brand</th>
                    <th className='border w-[100px]'>Price</th>
                    <th className='border w-[100px]'>Image</th>
                    <th className='border w-[100px]'>Rating</th>
                    <th className='border w-[100px]'>Stock</th>
                    <th className='border w-[100px]'>Reviews</th>
                    <th className='border w-[100px]'>Manage</th>
                </tr>
                {
                    data.slice(0, stock).map((product, index) =>
                        <tr key={product.id} className='w-full text-center min-h-[80px] py-3'>
                            <td className="border py-2 bg-gray-400">{index + 1}</td>
                            <td className="border">{product.name}</td>
                            <td className="border">{product.brand}</td>
                            <td className="border">${product.price}</td>
                            <td className="border flex justify-center items-center"><img
                                className="max-w-[100px] max-h-[40px]" src={product.image} alt={product.name}/></td>
                            <td className="border">{product.rating}</td>
                            <td className="border">{product.countInStock}</td>
                            <td className="border">{product.numReviews}</td>
                            <td className="border">
                                <button onClick={() => deleteProduct(product)}
                                        className="mr-6 text-white bg-red-600 p-2 rounded-md"><MdDelete/></button>
                                <button onClick={() => editProduct(setEditProduct(product.id))}
                                        className="text-white bg-amber-300 p-2 rounded-md"><MdEdit/></button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <div className="w-full text-sky-400 text-xl font-medium text-center my-5 ">
                <button className="border-b-2 border-sky-400" onClick={() => setStock(stock + 10)}>More Products
                </button>
            </div>

            <div>
                <Modal
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    footer={null}
                >
                    <Form
                        name="EditForm"
                        layout="vertical"
                        onFinish={editProduct}
                        className="auth-form"
                        onFinishFailed={onFinishFailed}
                    >
                        <Row gutter={10}>
                            <Col span={24}>
                                <Title style={{textAlign: 'center'}} level={2}>Edit Product</Title>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter product name!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Product Name"/>
                                </Form.Item>

                                <Form.Item
                                    label="Descriptin"
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter description!',
                                        },
                                    ]}
                                >
                                    <Input.TextArea placeholder="Description"/>
                                </Form.Item>

                                <Form.Item
                                    label="Full description"
                                    name="richDescription"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter full description!',
                                        },
                                    ]}
                                >
                                    <Input.TextArea placeholder="Description"/>
                                </Form.Item>

                                <Form.Item
                                    label="Image"
                                    name="image"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter product image!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="//https/url"/>
                                </Form.Item>

                                <Form.Item
                                    label="Brand/Category"
                                    name="brand"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter product brand!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Brand"/>
                                </Form.Item>

                                <Row gutter={1}>
                                    <Col span={6}>
                                        <Form.Item
                                            label="Price"
                                            name="price"
                                            rules={[
                                                {
                                                    type: "number",
                                                    min: 0,
                                                    max: 100000,
                                                    required: true,
                                                    message: 'Please enter product price!',
                                                },
                                            ]}

                                        >
                                            <InputNumber placeholder="Price"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            label="Amount"
                                            name="countInStock"
                                            rules={[
                                                {
                                                    type: "number",
                                                    min: 0,
                                                    max: 100000,
                                                    required: true,
                                                    message: 'Please enter product amount!',
                                                },
                                            ]}
                                        >
                                            <InputNumber placeholder="Amount"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            label="Rating"
                                            name="rating"
                                            rules={[
                                                {
                                                    type: "number",
                                                    min: 0,
                                                    max: 100000,
                                                    required: true,
                                                    message: 'Please enter product rating!',
                                                },
                                            ]}
                                        >
                                            <InputNumber placeholder="Rating"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            label="Review"
                                            name="numReviews"
                                            rules={[
                                                {
                                                    type: "number",
                                                    min: 0,
                                                    max: 100000,
                                                    required: true,
                                                    message: 'Please enter product review!',
                                                },
                                            ]}
                                        >
                                            <InputNumber placeholder="Review"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full my-2">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            <div>
                <Modal
                    centered
                    open={modal2Open}
                    onOk={() => setModal2Open(false)}
                    onCancel={() => setModal2Open(false)}
                    footer={null}
                >
                    <Form
                        name="CreateForm"
                        layout="vertical"
                        onFinish={createNewProduct}
                        className="auth-form"
                        onFinishFailed={onFinishFailed}
                    >
                        <Row gutter={10}>
                            <Col span={24}>
                                <Title style={{textAlign: 'center'}} level={2}>Create New Product</Title>
                                <Form.Item
                                    label="Product Name"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter product name!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Product Name"/>
                                </Form.Item>

                                <Form.Item
                                    label="Descriptin"
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter description!',
                                        },
                                    ]}
                                >
                                    <Input.TextArea placeholder="Description"/>
                                </Form.Item>

                                <Form.Item
                                    label="Full description"
                                    name="richDescription"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter full description!',
                                        },
                                    ]}
                                >
                                    <Input.TextArea placeholder="Description"/>
                                </Form.Item>

                                <Form.Item
                                    label="Image"
                                    name="image"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter product image!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="//https/url"/>
                                </Form.Item>

                                <Form.Item
                                    label="Brand/Category"
                                    name="brand"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter product brand!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Brand"/>
                                </Form.Item>

                                <Row gutter={1}>
                                    <Col span={6}>
                                        <Form.Item
                                            label="Price"
                                            name="price"
                                            rules={[
                                                {
                                                    type: "number",
                                                    min: 0,
                                                    max: 100000,
                                                    required: true,
                                                    message: 'Please enter product price!',
                                                },
                                            ]}

                                        >
                                            <InputNumber placeholder="Price"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            label="Amount"
                                            name="countInStock"
                                            rules={[
                                                {
                                                    type: "number",
                                                    min: 0,
                                                    max: 100000,
                                                    required: true,
                                                    message: 'Please enter product amount!',
                                                },
                                            ]}
                                        >
                                            <InputNumber placeholder="Amount"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            label="Rating"
                                            name="rating"
                                            rules={[
                                                {
                                                    type: "number",
                                                    min: 0,
                                                    max: 100000,
                                                    required: true,
                                                    message: 'Please enter product rating!',
                                                },
                                            ]}
                                        >
                                            <InputNumber placeholder="Rating"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            label="Review"
                                            name="numReviews"
                                            rules={[
                                                {
                                                    type: "number",
                                                    min: 0,
                                                    max: 100000,
                                                    required: true,
                                                    message: 'Please enter product review!',
                                                },
                                            ]}
                                        >
                                            <InputNumber placeholder="Review"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full my-2">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </Container>
    )
}
export default Products
