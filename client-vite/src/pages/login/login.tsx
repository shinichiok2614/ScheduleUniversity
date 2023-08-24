import React, { useState } from 'react';
import { Button, Form, Input, Radio, notification } from 'antd';
import loginAPI from '../../apis/auth/auth';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../apis';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const LoginPage: React.FC = () => {
  const navigate = useNavigate(); //navigata is hook
  const [form] = Form.useForm();
  const [formLayout] = useState<LayoutType>('horizontal');

  // const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
  //   setFormLayout(layout);
  // };

  const formItemLayout =
    formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;
  const onFinish = (values: any) => {
    loginAPI(values)
      .then((res) => {
        notification.open({
          message: 'Welcome back ' + res.username,
          type: 'success',
        });
        navigate(`${BASE_URL}/department/schedule`);//loi
      })
      .catch((err) => {
        const { message } = err.response.data;
        notification.open({
          message: message,
          type: 'error',
        });
      });
  };
  // const onRegister = () => {
  //   navigate('/register');
  // };
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      // onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 1000 }}
      // style={{ maxWidth: 'none'}}
      onFinish={onFinish}
    >
      <Form.Item
        label='Page login for:'
        name='layout'
      >
        <Radio.Group value={formLayout}>
          <Radio.Button value='horizontal'>Training Department</Radio.Button>
          {/* <Radio.Button>Lecturers</Radio.Button>
          <Radio.Button>Staff for Lecture Theatre</Radio.Button>
          <Radio.Button>Students</Radio.Button> */}
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label='Username'
        name='username'
      >
        <Input placeholder='username' />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
      >
        <Input.Password placeholder='password' />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button
          type='primary'
          htmlType='submit'
        >
          Submit
        </Button>
        {/* <Button onClick={onRegister}>Register</Button> */}
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
