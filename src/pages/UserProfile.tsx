import { Card, Row, Col, Avatar, Descriptions, Tag, Button, Space, message } from 'antd'
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  TeamOutlined,
  EditOutlined,
  SafetyOutlined,
  BookOutlined,
  FileTextOutlined,
} from '@ant-design/icons'

const UserProfile = () => {
  // 模拟用户数据
  const userInfo = {
    name: '李春霞',
    avatar: '',
    email: 'lichunxia@example.com',
    phone: '138****8888',
    role: '教师',
    department: '现代商贸专业群',
    joinDate: '2023-09-01',
    courses: 12,
    students: 156,
    resources: 45,
  }

  const handleEdit = () => {
    message.info('编辑功能开发中...')
  }

  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>个人中心</h1>

      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <Avatar size={120} icon={<UserOutlined />} style={{ marginBottom: 16 }} />
              <h2>{userInfo.name}</h2>
              <Tag color="blue" style={{ fontSize: 14, padding: '4px 12px' }}>
                {userInfo.role}
              </Tag>
              <div style={{ marginTop: 16 }}>
                <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>
                  编辑资料
                </Button>
              </div>
            </div>
          </Card>

          <Card title="快速统计" style={{ marginTop: 16 }}>
            <Row gutter={16}>
              <Col span={12} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 24, fontWeight: 'bold', color: '#1890ff' }}>
                  {userInfo.courses}
                </div>
                <div style={{ color: '#666', marginTop: 4 }}>课程数</div>
              </Col>
              <Col span={12} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 24, fontWeight: 'bold', color: '#52c41a' }}>
                  {userInfo.students}
                </div>
                <div style={{ color: '#666', marginTop: 4 }}>学生数</div>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={16}>
          <Card title="基本信息">
            <Descriptions column={2} bordered>
              <Descriptions.Item label="姓名">{userInfo.name}</Descriptions.Item>
              <Descriptions.Item label="角色">{userInfo.role}</Descriptions.Item>
              <Descriptions.Item label="所属部门">{userInfo.department}</Descriptions.Item>
              <Descriptions.Item label="加入时间">{userInfo.joinDate}</Descriptions.Item>
              <Descriptions.Item label="邮箱" span={2}>
                <Space>
                  <MailOutlined />
                  {userInfo.email}
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="手机号" span={2}>
                <Space>
                  <PhoneOutlined />
                  {userInfo.phone}
                </Space>
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="我的活动" style={{ marginTop: 16 }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  hoverable
                  style={{
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#fff',
                  }}
                >
                  <BookOutlined style={{ fontSize: 32, marginBottom: 8 }} />
                  <div style={{ fontSize: 20, fontWeight: 'bold' }}>{userInfo.courses}</div>
                  <div>我的课程</div>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  style={{
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: '#fff',
                  }}
                >
                  <TeamOutlined style={{ fontSize: 32, marginBottom: 8 }} />
                  <div style={{ fontSize: 20, fontWeight: 'bold' }}>{userInfo.students}</div>
                  <div>我的学生</div>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  style={{
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: '#fff',
                  }}
                >
                  <FileTextOutlined style={{ fontSize: 32, marginBottom: 8 }} />
                  <div style={{ fontSize: 20, fontWeight: 'bold' }}>{userInfo.resources}</div>
                  <div>我的资源</div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default UserProfile


