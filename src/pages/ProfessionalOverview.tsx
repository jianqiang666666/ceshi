import { Card, Row, Col, Statistic, Progress } from 'antd'
import ReactECharts from 'echarts-for-react'
import {
  AppstoreOutlined,
  BookOutlined,
  FileTextOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'

const ProfessionalOverview = () => {
  const courseDistributionData = {
    xAxis: {
      type: 'category',
      data: ['专业基础课', '专业核心课', '专业拓展课'],
    },
    yAxis: { type: 'value', max: 100 },
    series: [
      {
        data: [45, 45, 85],
        type: 'bar',
        itemStyle: { color: '#1890ff' },
      },
    ],
  }

  const resourceDistributionData = {
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

  const sharingData = {
    xAxis: {
      type: 'category',
      data: ['共享', '开课', '学习'],
    },
    yAxis: { type: 'value', max: 10 },
    series: [
      {
        data: [0, 2, 8.5],
        type: 'bar',
        itemStyle: { color: '#52c41a' },
      },
    ],
  }

  const specialties = [
    { name: '电子商务', mapCourses: 31, resources: 757 },
    { name: '跨境电子商务', mapCourses: 20, resources: 199 },
    { name: '移动商务', mapCourses: 29, resources: 218 },
    { name: '网络营销与直播电商', mapCourses: 28, resources: 202 },
    { name: '农村电子商务', mapCourses: 16, resources: 496 },
    { name: '商务数据分析与应用', mapCourses: 19, resources: 0 },
  ]

  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>专业知识概览</h1>

      {/* 专业群构成情况 */}
      <Card title="专业群构成情况" style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          {specialties.map((spec) => (
            <Col span={4} key={spec.name}>
              <Card
                style={{
                  textAlign: 'center',
                  border: '2px solid #1890ff',
                  marginBottom: 16,
                }}
              >
                <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{spec.name}</div>
                <div style={{ color: '#666', fontSize: 12 }}>
                  <div>图谱课程: {spec.mapCourses}</div>
                  <div>课程资源: {spec.resources}</div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* 数据概览 */}
      <Card title="数据概览" style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={4}>
            <Statistic
              title="专业数量"
              value={6}
              suffix="个"
              prefix={<AppstoreOutlined style={{ color: '#1890ff' }} />}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="规划课程"
              value={175}
              suffix="门"
              prefix={<BookOutlined style={{ color: '#52c41a' }} />}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="图谱课程"
              value={77}
              suffix="门"
              prefix={<FileTextOutlined style={{ color: '#fa8c16' }} />}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="教学资源"
              value={1117}
              suffix="份"
              prefix={<BookOutlined style={{ color: '#722ed1' }} />}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="教师团队"
              value={3}
              suffix="人"
              prefix={<TeamOutlined style={{ color: '#13c2c2' }} />}
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="学生数量"
              value={34}
              suffix="人"
              prefix={<UserOutlined style={{ color: '#eb2f96' }} />}
            />
          </Col>
        </Row>
      </Card>

      <Row gutter={16} style={{ marginBottom: 24 }}>
        {/* 规划课程分布 */}
        <Col span={12}>
          <Card title="规划课程分布">
            <ReactECharts option={courseDistributionData} style={{ height: 300 }} />
          </Card>
        </Col>

        {/* 教学资源分布 */}
        <Col span={12}>
          <Card title="教学资源分布">
            <ReactECharts option={resourceDistributionData} style={{ height: 300 }} />
          </Card>
        </Col>
      </Row>

      {/* 知识分享情况 */}
      <Card title="知识分享情况" style={{ marginBottom: 24 }}>
        <ReactECharts option={sharingData} style={{ height: 300 }} />
      </Card>

      {/* 各专业规划课程建设情况 */}
      <Card title="各专业规划课程建设情况">
        {specialties.slice(0, 3).map((spec) => (
          <Card
            key={spec.name}
            title={spec.name}
            extra={<a>查看课程详情</a>}
            style={{ marginBottom: 16 }}
          >
            <div style={{ marginBottom: 16 }}>
              <div style={{ marginBottom: 8 }}>专业基础课</div>
              <div style={{ marginBottom: 8 }}>
                <span style={{ marginRight: 16 }}>图谱课程: </span>
                <Progress percent={100} size="small" style={{ display: 'inline-block', width: 200 }} />
                <span style={{ marginLeft: 8 }}>8/8</span>
              </div>
              <div>
                <span style={{ marginRight: 16 }}>规划课程: </span>
                <Progress percent={100} size="small" style={{ display: 'inline-block', width: 200 }} />
                <span style={{ marginLeft: 8 }}>8/8</span>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ marginBottom: 8 }}>专业核心课</div>
              <div style={{ marginBottom: 8 }}>
                <span style={{ marginRight: 16 }}>图谱课程: </span>
                <Progress percent={75} size="small" style={{ display: 'inline-block', width: 200 }} />
                <span style={{ marginLeft: 8 }}>6/8</span>
              </div>
              <div>
                <span style={{ marginRight: 16 }}>规划课程: </span>
                <Progress percent={87.5} size="small" style={{ display: 'inline-block', width: 200 }} />
                <span style={{ marginLeft: 8 }}>7/8</span>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 8 }}>专业拓展课</div>
              <div style={{ marginBottom: 8 }}>
                <span style={{ marginRight: 16 }}>图谱课程: </span>
                <Progress percent={70} size="small" style={{ display: 'inline-block', width: 200 }} />
                <span style={{ marginLeft: 8 }}>7/10</span>
              </div>
              <div>
                <span style={{ marginRight: 16 }}>规划课程: </span>
                <Progress percent={70} size="small" style={{ display: 'inline-block', width: 200 }} />
                <span style={{ marginLeft: 8 }}>7/10</span>
              </div>
            </div>
          </Card>
        ))}
      </Card>
    </div>
  )
}

export default ProfessionalOverview

