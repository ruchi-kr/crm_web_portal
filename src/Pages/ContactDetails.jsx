import React, { useState } from 'react'
import { Table, Form, Input, } from 'antd';
import { Button, Col, DatePicker, Drawer, Row, Select, Space } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";
import eyeicon from '../crmimage/Eye.png'
import editicon from '../crmimage/Edit.png'
import importicon from '../crmimage/import.png';
import uploadicon from '../crmimage/upload.png';
import copypasteicon from '../crmimage/copypaste.png';
import next from '../crmimage/navigate.png';
import { Link } from 'react-router-dom';

import Header from '../Component/Header';
import SideNavbar from '../Component/SideNavbar';
import Footer from '../Component/Footer';
const { Option } = Select;

const columns = [
    {
        title: 'Id',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Category 1',
                value: 'Category 1',
            },
            {
                text: 'Category 2',
                value: 'Category 2',
            },
        ],
        filterMode: 'tree',
        filterSearch: true,
        sorter: (a, b) => a.age - b.age,
        onFilter: (value, record) => record.name.startsWith(value),
        //   width: '30%',
    },
    {
        title: 'Contact Name',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Email Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
        sorter: (a, b) => a.age - b.age,
        //   width: '40%',
    },
    {
        title: 'mobile number',
        dataIndex: 'age',
        // sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Company Name',
        dataIndex: 'age',
        // sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Created Date',
        dataIndex: 'age',
        // sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Status',
        dataIndex: 'age',
        // sorter: (a, b) => a.age - b.age,
    },
    {
        title: (
            <span className="text-capitalize textcolumntitle font16px fw-bold">
                Action
            </span>
        ),
        dataIndex: "",
        key: "x",
        fixed: "right",
        width: 100,
        render: (text, record) => (
            <a className="d-flex gap-4">

                <img src={eyeicon} alt="eye icon" />
                <img src={editicon} alt="edit icon" />
            </a>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
const ContactDetails = () => {


    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const start = () => {
    //     setLoading(true);
    //     // ajax request after empty completing
    //     setTimeout(() => {
    //         setSelectedRowKeys([]);
    //         setLoading(false);
    //     }, 1000);
    // };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    // const hasSelected = selectedRowKeys.length > 0;

    // function for drawer
    const [opencreate, setOpencreate] = useState(false);
    const [openimport, setOpenimport] = useState(false);
    const showDrawerCreateContact = () => {
        setOpencreate(true);
    };
    const showDrawerImportContact = () => {
        setOpenimport(true);
    }
    const onCloseCreateContact = () => {
        setOpencreate(false);
    };
    const onCloseImportContact = () => {
        setOpenimport(false);
    }
    return (
        <>
            <Header />
            <SideNavbar />
            <div className='content-wrapper'>
                <div className='content'>
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-9 mt-5">
                                <p className='font30px'>Contacts</p>
                            </div>
                            <div className="col-3 mt-5">
                                <button type='button' className='btn btn-outline-secondary me-2 text-capitalize' onClick={showDrawerCreateContact} >create contact</button>
                                <button type='button' className='btn btn-primary ms-2 text-capitalize' onClick={showDrawerImportContact}>import contact</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className='textgrey'>This is your database. From here you can view, organise and manage your contacts, individually or as a group.</p>
                                <hr className='bg-secondary' />
                            </div>
                        </div>
                        {/* drawer of create contact */}
                        <Drawer
                            title={<span className='text-white font16px mx-0'>Create Contact</span>}
                            width={481}

                            onClose={onCloseCreateContact}
                            open={opencreate}
                            headerStyle={{ backgroundColor: '#1890FF' }}
                            closeIcon={<CloseCircleOutlined style={{ fontSize: '20px', color: '#fff', position: 'absolute', right: '16px' }} />}
                            style={{
                                marginTop: "6vh", height: "94vh"
                            }}

                            footer={
                                <Row gutter={16} className='d-flex justify-content-between bg-light p-2'>
                                    <Col span={12} className=' '>
                                        <Button onClick={onCloseCreateContact} block>Cancel</Button>
                                    </Col>
                                    <Col span={12} className=' '>
                                        <Button span={24} onClick={onCloseCreateContact} type="primary" block>
                                            Continue
                                        </Button>
                                    </Col>
                                </Row>


                            }
                        >
                            <Form layout="vertical" >
                                <Row gutter={16}>
                                    <Col span={24}>
                                        <Form.Item name="firstname" label={<span style={{ color: '#006D75', fontWeight: 'lighter' }}>First Name</span>}

                                            rules={[
                                                { required: true, message: 'First Name is required' },
                                                {
                                                    pattern: /^[&,.\-_\w\s]{1,25}$/,
                                                    message: 'Please enter a valid First Name (up to 25 characters, only &, , ., -, _ special characters are allowed)'
                                                }
                                            ]}
                                        >
                                            <Input className="placeholderColor" placeholder="First Name" />
                                        </Form.Item>
                                    </Col>

                                </Row>
                                <Row gutter={16}>
                                    <Col span={24}>
                                        <Form.Item
                                            name="lastname"
                                            label={<span style={{ color: '#006D75', fontWeight: 'lighter' }}>Last Name</span>}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Last Name is required',
                                                },
                                                {
                                                    pattern: /^[&,.\-_\w\s]{1,25}$/,
                                                    message: 'Please enter a valid Last Name (up to 25 characters, only &, , ., -, _ special characters are allowed)'
                                                }
                                            ]}
                                        >
                                            <Input
                                                style={{
                                                    width: '100%',
                                                }}
                                                className="placeholderColor" placeholder="Last Name"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={24}>
                                        <Form.Item name="email" label={<span style={{ color: '#006D75', fontWeight: 'lighter' }}>Email Address (Username)</span>}
                                            rules={[
                                                { required: true, message: 'Email is required' },
                                                { type: 'email', message: 'Invalid email' },
                                                {
                                                    pattern: /^[&,.\-_\w\s@]{1,50}$/,
                                                    message: 'Please enter a valid email (up to 50 characters, only @, &, , ., -, _ special characters are allowed)'
                                                }
                                            ]}>
                                            <Input type="email" placeholder="name@example.com" className="placeholderColor" />
                                        </Form.Item>
                                    </Col>

                                </Row>

                                <Row gutter={16}>
                                    <Col span={24} >
                                        <Form.Item name="phone_number" label={<span style={{ color: '#006D75', fontWeight: 'lighter' }}>Phone Number</span>}
                                            rules={[
                                                { required: true, message: 'Mobile is required' },
                                                { pattern: /^[0-9]+$/, message: 'Phone Number must contain only digits' },
                                                { len: 10, message: 'Phone Number must be exactly 10 digits' },
                                            ]}

                                        >
                                            <Input maxLength={10} className="placeholderColor" placeholder="Phone Number" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={24}>
                                        <Form.Item name="name" label={<span style={{ color: '#006D75', fontWeight: 'lighter' }}>Company Name</span>}
                                            // style={{color:'#07b6af'}}
                                            rules={[
                                                { required: true, message: 'Company Name is required' },
                                                {
                                                    pattern: /^[&,.\-_\w\s]{1,50}$/,
                                                    message: 'Please enter a valid company name (up to 50 characters, only &, , ., -, _ special characters are allowed)'
                                                }
                                            ]}
                                        >
                                            <Input className="placeholderColor" placeholder="Company Name" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </Drawer>
                        {/* end of drawer of create contact */}
                        <Drawer
                            title={<span className='text-white font16px mx-0'>Import Contact</span>}
                            width={481}

                            onClose={onCloseImportContact}
                            open={openimport}
                            headerStyle={{ backgroundColor: '#1890FF' }}
                            closeIcon={<CloseCircleOutlined style={{ fontSize: '20px', color: '#fff', position: 'absolute', right: '16px' }} />}
                            style={{
                                marginTop: "6vh", height: "94vh"
                            }}

                            footer={
                                <Row gutter={16} className='d-flex justify-content-between bg-light p-2'>
                                    <Col span={12} className=' '>
                                        <Button onClick={onCloseImportContact} block>Cancel</Button>
                                    </Col>
                                    <Col span={12} className=' '>
                                        <Button span={24} onClick={onCloseImportContact} type="primary" block>
                                            Continue
                                        </Button>
                                    </Col>
                                </Row>


                            }
                        >
                            <Form layout="vertical" >
                                <Row gutter={16}>
                                    <Col span={24} className='d-flex align-items-start gap-2 justify-content-evenly'>
                                        <img src={importicon} alt="import icon" className='bgActiveLightblue p-2 rounded-1' />
                                        <div className='lh-1'>
                                            <p className='textfigmablack font14px fontweight500' >Import from another services</p>
                                            <p className='textgrey font12px text-wrap'>Import contacts automatically from tools
                                                you already use.</p>
                                        </div>
                                        <Link to='/importexisting'>
                                        <img src={next} alt="next icon" className='justify-content-end' />
                                        </Link>
                                       
                                    </Col>
                                </Row>
                                <hr />
                                <Row gutter={16} className=''>
                                    <Col span={24} className='d-flex align-items-start gap-2 justify-content-evenly'>
                                        <img src={uploadicon} alt="upload icon" className='bgActiveLightblue p-2 rounded-1' />
                                        <div className='lh-1'>
                                            <p className='textfigmablack font14px fontweight500'>Upload a file</p>
                                            <p className='textgrey font12px text-wrap'>Import contacts from a CSV or tab-delimited
                                                TXT file.</p>
                                        </div>
                                        <Link to='/uploadfile'>
                                        <img src={next} alt="next icon" />
                                        </Link>
                                        
                                    </Col>
                                </Row>
                                <hr />
                                <Row gutter={16}>
                                    <Col span={24} className='d-flex  align-items-start gap-2 justify-content-around'>
                                        <img src={copypasteicon} alt=" copy paste icon" className='bgActiveLightblue p-2 rounded-1' />
                                        <div className='lh-1'>
                                            <p className='textfigmablack font14px fontweight500'>Copy and paste</p>
                                            <p className='textgrey font12px text-wrap'>Directly paste in new contacts from a
                                                spreadsheet or similar list.</p>
                                        </div>
                                        <Link to="/copy&paste">
                                        <img src={next} alt="next icon" />
                                        </Link>
                                        
                                    </Col>
                                </Row>
                                <hr />
                            </Form>
                        </Drawer>
                        {/* drawer of import contact */}
                        {/* end of drawer of import contact */}
                        {/* table of page */}
                        <div className="row">
                            <div className="col-12 border-0 rounded-2">
                                <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={onChange}
                                    pagination={{
                                        position: 'topRight', // Set pagination position to top right
                                    }}
                                    scroll={{ x: 1000, }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactDetails