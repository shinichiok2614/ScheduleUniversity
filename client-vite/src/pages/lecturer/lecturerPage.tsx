import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/es/avatar/avatar';
import useGetListLecturer from './useGetListLecturer';
import Column from 'antd/es/table/Column';
import { Lecturer } from '../../types/lecturer/lecturer';
interface DataType {
  key: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  phone: string;
  email: string;
  dateofbirth: string;
  address: string;
  degree: string;
  acedemicRank: string;
  armyRank: string;
  profilePicture: string;
}

// const columns: ColumnsType<DataType> = [
const columns: ColumnsType<Lecturer> = [
  {
    title: 'Profile Picture',
    dataIndex: 'profilepicture',
    key: '1',
    render: () => (
      <Avatar
        shape='square'
        size={40}
        icon={<UserOutlined />}
      />
    ),
  },
  {
    title: 'First Name',
    dataIndex: 'firstname',
    key: '2',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'lastname',
    key: '3',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: '4',
    render: (text) => <a>{text}</a>,
  },
  // {
  //   title: 'Password',
  //   dataIndex: 'password',
  //   key: '5',
  //   render: (text) => <a>{text}</a>,
  // },
  // {
  //   title: 'Phone',
  //   dataIndex: 'phone',
  //   key: '6',
  //   render: (text) => <a>{text}</a>,
  // },
  // {
  //   title: 'Email',
  //   dataIndex: 'email',
  //   key: '7',
  //   render: (text) => <a>{text}</a>,
  // },
  // {
  //   title: 'Date of birth',
  //   dataIndex: 'dateofbirth',
  //   key: '8',
  //   render: (text) => <a>{text}</a>,
  // },
  // {
  //   title: 'Address',
  //   dataIndex: 'address',
  //   key: '9',
  //   render: (text) => <a>{text}</a>,
  // },
  // {
  //   title: 'Degree',
  //   dataIndex: 'degree',
  //   key: '10',
  //   render: (text) => <a>{text}</a>,
  // },
  // {
  //   title: 'Acedemic rank',
  //   dataIndex: 'acedemicRank',
  //   key: '11',
  //   render: (text) => <a>{text}</a>,
  // },
  // {
  //   title: 'Army rank',
  //   dataIndex: 'armyRank',
  //   key: '12',
  //   render: (text) => <a>{text}</a>,
  // },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        {/* <a>Invite {record.name}</a> */}
        <a>View</a>
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];


const LecturerPage: React.FC = () => {
  const [loading, list] = useGetListLecturer();
  console.log(list);
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={list}
    />
  );
};

export default LecturerPage;
