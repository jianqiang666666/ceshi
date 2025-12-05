import { useNavigate } from 'react-router-dom'
import { Row, Col, Card, Statistic, Tag, Empty, message } from 'antd'
import {
  AppstoreOutlined,
  ApiOutlined,
  BookOutlined,
  RocketOutlined,
  FileTextOutlined,
  FolderOutlined,
  EditOutlined,
  UserOutlined,
  BarChartOutlined,
  PieChartOutlined,
  CalendarOutlined,
} from '@ant-design/icons'
import ReactECharts from 'echarts-for-react'

const Home = () => {
  const navigate = useNavigate()
  const courseResourceData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
    xAxis: {
      type: 'category',
      data: ['电子商务', '跨境电子商务', '移动商务', '网络营销与直播电商', '农村电子商务', '商务数据分析与应用'],
      axisLabel: { rotate: 45 },
    },
    yAxis: { type: 'value' },
    series: [
      {
        data: [30, 20, 28, 28, 15, 12],
        type: 'bar',
        itemStyle: { color: '#1890ff' },
        emphasis: {
          itemStyle: { color: '#40a9ff' },
        },
      },
    ],
  }

  const teachingResourceData = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      right: 10,
    },
    series: [
      {
        name: '资源数量',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 556, name: '课程讲解' },
          { value: 402, name: '课堂互动' },
          { value: 41, name: '作业测验' },
          { value: 118, name: '拓展素材' },
        ],
      },
    ],
  }

  const quickAccessItems = [
    { title: '知识图谱', icon: <AppstoreOutlined />, color: '#1890ff', path: '/knowledge-graph' },
    { title: '能力图谱', icon: <BarChartOutlined />, color: '#722ed1', path: '/visual-map' },
    { title: '产教图谱', icon: <PieChartOutlined />, color: '#52c41a', path: '/visual-map' },
    { title: '需求岗位分析', icon: <UserOutlined />, color: '#fa8c16', path: '/industry-panorama' },
    { title: '岗位画像', icon: <UserOutlined />, color: '#13c2c2', path: '/industry-panorama' },
    { title: '核心技能监控', icon: <BarChartOutlined />, color: '#2f54eb', path: '/visual-map' },
    { title: '产业全景对接', icon: <AppstoreOutlined />, color: '#52c41a', path: '/industry-panorama' },
    { title: '产业企业分析', icon: <BarChartOutlined />, color: '#fa8c16', path: '/industry-panorama' },
    { title: '专业课程', icon: <BookOutlined />, color: '#2f54eb', path: '/professional-courses' },
    { title: '素材资源', icon: <FolderOutlined />, color: '#722ed1', path: '/professional-courses' },
  ]

  const handleQuickAccess = (path: string, title: string) => {
    navigate(path)
    message.success(`正在跳转到${title}`)
  }

  const handleStatisticClick = (title: string) => {
    message.info(`点击了${title}`)
  }

  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>首页</h1>

      {/* 图谱建设总览 */}
      <Card title="图谱建设总览" style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={6}>
            <div style={{ cursor: 'pointer' }} onClick={() => handleStatisticClick('图谱节点数量')}>
              <Statistic
                title="图谱节点数量"
                value={29469}
                prefix={<AppstoreOutlined style={{ color: '#1890ff' }} />}
              />
            </div>
          </Col>
          <Col span={6}>
            <div style={{ cursor: 'pointer' }} onClick={() => handleStatisticClick('图谱关系数量')}>
              <Statistic
                title="图谱关系数量"
                value={37267}
                prefix={<ApiOutlined style={{ color: '#722ed1' }} />}
              />
            </div>
          </Col>
          <Col span={6}>
            <div style={{ cursor: 'pointer' }} onClick={() => handleStatisticClick('知识点数量')}>
              <Statistic
                title="知识点数量"
                value={4506}
                prefix={<BookOutlined style={{ color: '#52c41a' }} />}
              />
            </div>
          </Col>
          <Col span={6}>
            <div style={{ cursor: 'pointer' }} onClick={() => handleStatisticClick('技能点数量')}>
              <Statistic
                title="技能点数量"
                value={378}
                prefix={<RocketOutlined style={{ color: '#fa8c16' }} />}
              />
            </div>
          </Col>
        </Row>
      </Card>

      {/* 我的使用 */}
      <Card title="我的使用" style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={6}>
            <Statistic
              title="累计共享课程"
              value={0}
              suffix="门"
              prefix={<FileTextOutlined style={{ color: '#1890ff' }} />}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="累计共享资源"
              value={0}
              suffix="份"
              prefix={<FolderOutlined style={{ color: '#1890ff' }} />}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="累计开发课程"
              value={0}
              suffix="门"
              prefix={<EditOutlined style={{ color: '#1890ff' }} />}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="累计开课次数"
              value={0}
              suffix="次"
              prefix={<UserOutlined style={{ color: '#1890ff' }} />}
            />
          </Col>
        </Row>
      </Card>

      {/* 快捷查看 */}
      <Card title="快捷查看" style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          {quickAccessItems.map((item, index) => (
            <Col span={6} key={index}>
              <Card
                hoverable
                onClick={() => handleQuickAccess(item.path, item.title)}
                style={{
                  textAlign: 'center',
                  border: `2px solid ${item.color}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 4px 12px ${item.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: 32, color: item.color, marginBottom: 8 }}>
                  {item.icon}
                </div>
                <div>{item.title}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      <Row gutter={16}>
        {/* 资源统计 */}
        <Col span={12}>
          <Card title="资源统计">
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: 16 }}>
                  <h3>课程资源分布</h3>
                  <ReactECharts option={courseResourceData} style={{ height: 300 }} />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <h3>教学资源分布</h3>
                  <ReactECharts option={teachingResourceData} style={{ height: 300 }} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* 我的日程 */}
        <Col span={12}>
          <Card title="我的日程" style={{ marginBottom: 16 }}>
            <CalendarOutlined style={{ fontSize: 48, color: '#1890ff', display: 'block', textAlign: 'center', marginBottom: 16 }} />
            <div style={{ textAlign: 'center' }}>
              <Tag color="blue">2025年12月</Tag>
              <Tag>第二十一周</Tag>
            </div>
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <Tag color="blue">12-05 (周五)</Tag>
            </div>
          </Card>
          <Card title="我的教学计划">
            <Empty description="暂无安排" />
            <div style={{ textAlign: 'right', marginTop: 16 }}>
              <a onClick={() => message.info('查看计划脉络功能开发中...')} style={{ cursor: 'pointer' }}>
                查看计划脉络
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home

