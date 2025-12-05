import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout as AntLayout, Menu, Dropdown, Input, Avatar, Space, message, Modal } from 'antd'
import {
  HomeOutlined,
  EyeOutlined,
  ShoppingOutlined,
  FolderOutlined,
  UserOutlined,
  BuildOutlined,
  BookOutlined,
  ReadOutlined,
  SearchOutlined,
  DownOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  BarChartOutlined,
  GlobalOutlined,
  TeamOutlined,
  BankOutlined,
  LaptopOutlined,
  CalendarOutlined,
  LineChartOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'

const { Header, Sider, Content } = AntLayout

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems: MenuProps['items'] = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: 'visual-map',
      icon: <EyeOutlined />,
      label: '可视图谱',
      children: [
        {
          key: '/knowledge-graph',
          icon: <AppstoreOutlined />,
          label: '知识图谱',
        },
        {
          key: '/visual-map',
          icon: <BarChartOutlined />,
          label: '可视图谱',
        },
        {
          key: '/industry-panorama',
          icon: <GlobalOutlined />,
          label: '产业全景对接',
        },
      ],
    },
    {
      key: '/professional-courses',
      icon: <FileTextOutlined />,
      label: '专业课程',
    },
    {
      key: '/professional-overview',
      icon: <BankOutlined />,
      label: '专业知识概览',
    },
    {
      key: 'job-matching',
      icon: <ShoppingOutlined />,
      label: '岗位对接',
    },
    {
      key: 'resource-center',
      icon: <FolderOutlined />,
      label: '资源中心',
    },
    {
      key: 'my',
      icon: <UserOutlined />,
      label: '我的',
    },
    {
      key: 'professional-construction',
      icon: <BuildOutlined />,
      label: '专业建设',
    },
    {
      key: 'teaching-space',
      icon: <BookOutlined />,
      label: '教学空间',
      children: [
        {
          key: '/teaching-classroom',
          icon: <LaptopOutlined />,
          label: '教学课堂',
        },
        {
          key: 'teaching-plan',
          icon: <CalendarOutlined />,
          label: '教学计划',
        },
        {
          key: 'class-management',
          icon: <TeamOutlined />,
          label: '班级管理',
        },
        {
          key: 'learning-analysis',
          icon: <LineChartOutlined />,
          label: '学情分析',
        },
      ],
    },
    {
      key: '/learning-exploration',
      icon: <ReadOutlined />,
      label: '学习探索',
    },
  ]

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      label: '个人中心',
    },
    {
      key: 'settings',
      label: '设置',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: '退出登录',
    },
  ]

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key.startsWith('/')) {
      navigate(key)
    } else {
      // 对于没有路由的菜单项，显示提示信息或跳转到相关页面
      const routeMap: Record<string, string> = {
        'job-matching': '/industry-panorama',
        'resource-center': '/professional-courses',
        'my': '/',
        'professional-construction': '/professional-overview',
        'teaching-plan': '/teaching-classroom',
        'class-management': '/teaching-classroom',
        'learning-analysis': '/learning-exploration',
      }
      
      if (routeMap[key]) {
        navigate(routeMap[key])
      } else {
        message.info('该功能正在开发中...')
      }
    }
  }

  const selectedKeys = [location.pathname]
  const openKeys = location.pathname.includes('/teaching') ? ['teaching-space'] : 
                   location.pathname.includes('/knowledge') || location.pathname.includes('/visual-map') || location.pathname.includes('/industry') ? ['visual-map'] : []

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          background: '#fff',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <Space>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1890ff' }}>
            <AppstoreOutlined style={{ marginRight: 8 }} />
            产教对接能力图谱系统
          </div>
          <Dropdown
            menu={{
              items: [
                { key: '1', label: '现代商贸专业群' },
                { key: '2', label: '其他专业群' },
              ],
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              现代商贸专业群 <DownOutlined />
            </a>
          </Dropdown>
        </Space>
        <Space>
          <Input
            placeholder="请输入课程名称"
            prefix={<SearchOutlined />}
            style={{ width: 200 }}
          />
          <Dropdown
            menu={{
              items: userMenuItems,
              onClick: ({ key }) => {
                if (key === 'profile') {
                  navigate('/user/profile')
                } else if (key === 'settings') {
                  navigate('/user/settings')
                } else if (key === 'logout') {
                  Modal.confirm({
                    title: '确认退出',
                    content: '确定要退出登录吗？',
                    onOk: () => {
                      message.success('已退出登录')
                      // 这里可以添加实际的退出登录逻辑，比如清除token等
                      navigate('/')
                    },
                  })
                }
              },
            }}
          >
            <Space style={{ cursor: 'pointer' }}>
              <Avatar icon={<UserOutlined />} />
              <span>李春霞</span>
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      </Header>
      <AntLayout style={{ height: 'calc(100vh - 64px)' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={200}
          style={{
            background: '#fff',
            boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
            overflow: 'auto',
          }}
        >
          <Menu
            mode="inline"
            selectedKeys={selectedKeys}
            defaultOpenKeys={openKeys}
            items={menuItems}
            onClick={handleMenuClick}
            style={{ height: '100%', borderRight: 0 }}
          />
        </Sider>
        <Content
          style={{
            margin: '24px',
            padding: '24px',
            background: '#fff',
            borderRadius: '8px',
            overflow: 'auto',
            height: '100%',
          }}
        >
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout

