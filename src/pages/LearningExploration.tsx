import { useNavigate } from 'react-router-dom'
import { Card, Row, Col, Statistic, message } from 'antd'
import {
  BookOutlined,
  AppstoreOutlined,
  CheckCircleOutlined,
  UserOutlined,
  FileSearchOutlined,
  ShoppingOutlined,
} from '@ant-design/icons'

const LearningExploration = () => {
  const navigate = useNavigate()

  const handleStatisticClick = (title: string) => {
    message.info(`查看${title}详情`)
  }

  const handleLearningProfile = () => {
    message.info('正在打开学情画像...')
    // 可以跳转到学情画像页面
  }

  const handleKnowledgeExploration = () => {
    navigate('/knowledge-graph')
    message.success('正在跳转到知识探索')
  }

  const handleCareerExploration = () => {
    navigate('/industry-panorama')
    message.success('正在跳转到职业探索')
  }
  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>学习探索</h1>

      {/* 学情分析 */}
      <Card title="学情分析" style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card
              hoverable
              onClick={() => handleStatisticClick('学习课程')}
              style={{ cursor: 'pointer' }}
            >
              <Statistic
                title="学习课程"
                value={0}
                suffix="门"
                prefix={<BookOutlined style={{ color: '#1890ff' }} />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              onClick={() => handleStatisticClick('知识模块')}
              style={{ cursor: 'pointer' }}
            >
              <Statistic
                title="知识模块"
                value={0}
                suffix="个"
                prefix={<AppstoreOutlined style={{ color: '#52c41a' }} />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              onClick={() => handleStatisticClick('知识点')}
              style={{ cursor: 'pointer' }}
            >
              <Statistic
                title="知识点"
                value={0}
                suffix="个"
                prefix={<CheckCircleOutlined style={{ color: '#fa8c16' }} />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              onClick={() => handleStatisticClick('面向岗位')}
              style={{ cursor: 'pointer' }}
            >
              <Statistic
                title="面向岗位"
                value={0}
                suffix="个"
                prefix={<UserOutlined style={{ color: '#722ed1' }} />}
              />
            </Card>
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Card
            hoverable
            onClick={handleLearningProfile}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 'bold' }}>
              学情画像 &gt;
            </div>
          </Card>
        </div>
      </Card>

      {/* 学习探索 */}
      <Card title="学习探索">
        <Row gutter={16}>
          <Col span={12}>
            <Card
              hoverable
              onClick={handleKnowledgeExploration}
              style={{
                height: 300,
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(245, 87, 108, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <FileSearchOutlined style={{ fontSize: 64, color: '#fff', marginBottom: 16 }} />
              <div style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 8 }}>
                知识探索
              </div>
              <div style={{ color: '#fff' }}>前往&gt;</div>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              onClick={handleCareerExploration}
              style={{
                height: 300,
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(79, 172, 254, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <ShoppingOutlined style={{ fontSize: 64, color: '#fff', marginBottom: 16 }} />
              <div style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 8 }}>
                职业探索
              </div>
              <div style={{ color: '#fff' }}>前往&gt;</div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default LearningExploration

