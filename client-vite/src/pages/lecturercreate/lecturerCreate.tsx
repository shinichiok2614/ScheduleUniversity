import { InboxOutlined } from '@ant-design/icons';
import React from 'react';
import {
  Button,
  Cascader,
  CascaderProps,
  Checkbox,
  Form,
  Input,
  Select,
  Upload,
  notification,
} from 'antd';
import { registerlecturerAPI } from '../../apis/lecturer';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}
const residences: CascaderProps<DataNodeType>['options'] = [
  {
    value: 'generalParent',
    label: 'General',
    children: [
      {
        value: 'general',
        label: 'General',
      },
      {
        value: 'lieutenantGeneral',
        label: 'Lieutenant General',
      },
      {
        value: 'majorGeneral',
        label: 'Major general',
      },
      {
        value: 'brigadierGeneral',
        label: 'Brigadier general',
      },
    ],
  },
  {
    value: 'colonelParent',
    label: 'Colonel',
    children: [
      {
        value: 'colonel',
        label: '4// Colonel',
      },
      {
        value: '3',
        label: '3//',
      },
      {
        value: 'lieutenantColonel',
        label: '2// Lieutenant Colonel',
      },
      {
        value: 'major',
        label: '1// Major',
      },
    ],
  },
  {
    value: 'lieutenantParent',
    label: 'Lieutenant',
    children: [
      {
        value: 'captain',
        label: '4/ Captain',
      },
      {
        value: 'seniorLieutenant',
        label: '3/ Senior Lieutenant',
      },
      {
        value: 'lieutenant',
        label: '2/ Lieutenant',
      },
      {
        value: 'ensign',
        label: '1/ Ensign',
      },
    ],
  },
  {
    value: 'sergeantParent',
    label: 'Sergeant',
    children: [
      {
        value: 'staffSergeant',
        label: 'Staff Sergeant',
      },
      {
        value: 'sergeant',
        label: 'Sergeant',
      },
      {
        value: 'corporal',
        label: 'Corporal',
      },
      {
        value: 'firstClassPrivate',
        label: 'First class private',
      },
      {
        value: 'private',
        label: 'Private',
      },
    ],
  },
];
const LecturerCreatePage: React.FC = () => {
  const [form] = Form.useForm();
  //////code o day
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    registerlecturerAPI(values)
      .then((res) => {
        console.log(res.data.message);
        notification.open({
          message: res.data.message,
          type: 'success',
        });
      })
      .catch((err) => {
        notification.open({
          message: err.response.data.message,
          type: 'error',
        });
      });
  };

  const prefixSelector = (
    <Form.Item
      name='prefix'
      noStyle
    >
      <Select style={{ width: 70 }}>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name='username'
        label='Username'
        rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='firstName'
        label='First name'
        tooltip='What do you want others to call you?'
        rules={[
          {
            //   required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='lastName'
        label='Lastname'
        tooltip='What do you want others to call you?'
        rules={[
          {
            //   required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='phone'
        label='Phone Number'
        rules={[
          {
            //   required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item
        name='email'
        label='Email'
        rules={[
          {
            //   required: true,
            message: 'Please input your email!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='dateofbirth'
        label='Date of birth'
        rules={[
          {
            //   required: true,
            message: 'Please input your date of birth!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='address'
        label='Address'
        rules={[
          {
            //   required: true,
            message: 'Please input your address!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='degree'
        label='Degree'
        rules={[
          {
            //   required: true,
            message: 'Please input your degree!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      
      {/* loi */}
      {/* <Form.Item
        name='armyRank'
        label='Army rank'
        rules={[{ type: 'array', required: false, message: 'Please select your army rank!' }]}
      >
        <Cascader options={residences} />
      </Form.Item> */}

      <Form.Item label='Upload profile picture'>
        <Form.Item
          name='dragger'
          valuePropName='fileList'
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger
            name='files'
            action='/upload.do'
          >
            <p className='ant-upload-drag-icon'>
              <InboxOutlined />
            </p>
            <p className='ant-upload-text'>Click or drag file to this area to upload</p>
            <p className='ant-upload-hint'>Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item
        name='agreement'
        valuePropName='checked'
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href=''>agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          type='primary'
          htmlType='submit'
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LecturerCreatePage;
