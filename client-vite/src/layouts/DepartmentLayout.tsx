import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

// const items1: MenuProps['items'] = [
//   'Schedule',
//   'Lecture',
//   'Staff',
//   'Lecture Theatre',
//   'Account',
// ].map((key) => ({
//   key,
//   label: `${key}`,
// }));
const items1: MenuProps['items'] = [
  {
    key: 'schedule',
    label: 'Schedule',
    icon: <LaptopOutlined />,
  },
  {
    key: 'lecturer',
    label: 'Lecturer',
    icon: <NotificationOutlined />,
    children: [
      {
        key: 'lecturerlist',
        label: 'Lecturer List',
      },
      {
        key: 'lecturercreate',
        label: 'Create Lecturer',
      },
    ],
  },
  {
    key: 'staff',
    label: 'Staff for lecturer theatre',
    icon: <LaptopOutlined />,
  },
  {
    key: 'theatre',
    label: 'Lecturer Theatre',
    icon: <LaptopOutlined />,
  },
];

const items2: MenuProps['items'] = [
  {
    subnav: 'Create',
    icon: UserOutlined,
  },
  {
    subnav: 'Edit',
    icon: LaptopOutlined,
  },
  {
    subnav: 'Delete',
    icon: LaptopOutlined,
  },
].map((a, index) => {
  return {
    key: `${index}`,
    icon: React.createElement(a.icon),
    label: `${a.subnav}`,
  };
});

const DepartmentLayout: React.FC = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onclickMenu: MenuProps['onClick'] = (e) => {
    navigate(e.keyPath[0]);
  };
  return (
    <Layout>
      <Header
      //   style={{ display: 'flex', alignItems: 'center' }}
      >
        <div className='demo-logo' />
        <Menu
          onClick={onclickMenu}
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          items={items1}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          {/* <Sider
            style={{ background: colorBgContainer }}
            width={200}
          >
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider> */}
          {/* <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content> */}
          <Outlet />
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default DepartmentLayout;
