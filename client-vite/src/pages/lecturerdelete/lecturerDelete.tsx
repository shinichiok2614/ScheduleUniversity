import { InboxOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Form, notification } from 'antd';
import { useParams } from 'react-router-dom';
import { LecturersSelector } from '../../_redux/features/lecturer';
import { deletelecturerAPI, editlecturerAPI } from '../../apis/lecturer';
import './index.css';

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

const LecturerDeletePage: React.FC = () => {
  const { id } = useParams();
  console.log('id', id);
  const [form] = Form.useForm();
  //////code o day

  // function useGetLecturer(): [Lecturer] {
  //   useEffect(() => {
  //     try {
  //       getlecturer(id).then((res) => {
  //         return [res];
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);
  //   return [list];
  // }
  // const [list] = useGetLecturer();
  // console.log(list);

  const lecturerSelector = LecturersSelector();
  const { list } = lecturerSelector;
  console.log(list);
  const lecturer = list.filter((item) => item.id.toString() === id);
  console.log('lecturer', lecturer);
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    values.id = id;
    deletelecturerAPI(values)
      .then((res) => {
        // console.log(res.data.message);
        // notification.open({
        //   message: res,
        //   type: 'success',
        // });
        console.log(res);
        notification.open({
          type: 'success',
          message: 'Lecturer deleted',
        });
      })
      .catch((err) => {
        notification.open({
          message: err.response.data.message,
          type: 'error',
        });
      });
  };

  return (
    <div>
      <h1>Confirm delete</h1>
      <h2>Are you sure you want to delete this lecturer?</h2>
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
          // rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
        >
          <span>{lecturer[0].username}</span>
        </Form.Item>

        <Form.Item
          name='firstName'
          label='First name'
          // tooltip='What do you want others to call you?'
          rules={[
            {
              //   required: true,
              message: 'Please input your firstname!',
              whitespace: true,
            },
          ]}
        >
          <span>{lecturer[0].firstName}</span>
        </Form.Item>

        <Form.Item
          name='lastName'
          label='Lastname'
          // tooltip='What do you want others to call you?'
          rules={[
            {
              //   required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <span>{lecturer[0].lastName}</span>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type='primary'
            htmlType='submit'
          >
            Delete
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LecturerDeletePage;
