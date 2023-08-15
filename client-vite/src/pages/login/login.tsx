// const Login: React.FC = () => {
//   return (
//     <>
//       <div>Login Page</div>
//     </>
//   );
// };
// export default Login;


import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 1000 }}
    >
      <Form.Item
        label='Form Layout'
        name='layout'
      >
        <Radio.Group value={formLayout}>
          <Radio.Button value='horizontal'>Training Department</Radio.Button>
          <Radio.Button value='inline'>Lecturers</Radio.Button>
          <Radio.Button value='vertical'>Staff for Lecture Theatre</Radio.Button>
          <Radio.Button value='inline'>Students</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label='Username'>
        <Input placeholder='username' />
      </Form.Item>
      <Form.Item label='Password'>
        <Input placeholder='password' />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type='primary'>Submit</Button>
        <Button>Register</Button>
      </Form.Item>
    </Form>
  );
};

export default Login;