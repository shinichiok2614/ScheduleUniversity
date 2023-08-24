import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {  UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/es/avatar/avatar';
import useGetListLecturer from './useGetListLecturer';
import { Lecturer } from '../../types/lecturer/lecturer';

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
    dataIndex: 'firstName',
    key: '2',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: '3',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: '4',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        {/* <a>Invite {record.name}</a> */}
        {/* <a>View</a> */}
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
