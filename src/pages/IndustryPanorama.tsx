import { Card, Row, Col, Tag, message, Modal } from 'antd'

const IndustryPanorama = () => {
  const handleItemClick = (type: string, name: string) => {
    message.info(`点击了${type}：${name}`)
  }

  const handleJobClick = (job: typeof jobPositions[0]) => {
    Modal.info({
      title: `岗位详情 - ${job.name}`,
      width: 600,
      content: (
        <div>
          <p><strong>岗位名称：</strong>{job.name}</p>
          <p><strong>岗位类别：</strong>{job.category}</p>
          <p><strong>所需技能：</strong></p>
          <div>
            {job.skills.map((skill) => (
              <Tag key={skill} color="blue" style={{ marginBottom: 4 }}>
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      ),
    })
  }
  const industryChain = ['电商产业链']
  const industryDomains = [
    '技术研发与数字化',
    '商品运营与供应链管理',
    '市场营销与用户增长',
    '金融与支付服务',
    '物流与履约',
    '合规支持',
    '客户服务与体验',
    '新兴领域融合',
  ]

  const jobPositions = [
    {
      name: '文案策划',
      skills: ['数据分析', '数据处理', '数据分析工具'],
      category: '内容类',
    },
    {
      name: '视觉设计',
      skills: ['手绘', '设计图文', '制作视频'],
      category: '内容类',
    },
    {
      name: '短视频编导',
      skills: ['拍摄短视频', '制作短视频', '策划短视频'],
      category: '内容类',
    },
    {
      name: '主播',
      skills: ['个人特色呈现', '个人形象管理', '提炼产品卖点'],
      category: '销售类',
    },
    {
      name: '助播',
      skills: ['了解直播', '控场', '调动氛围'],
      category: '销售类',
    },
    {
      name: '直播运营',
      skills: ['优化直播效果', '调试直播设备', '熟悉直播软件'],
      category: '运营类',
    },
  ]

  const majors = [
    '电子商务',
    '跨境电子商务',
    '移动商务',
    '网络营销与直播电商',
    '农村电子商务',
    '商务数据分析与应用',
  ]

  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>产业全景对接</h1>

      <Row gutter={16}>
        {/* 面向产业链 */}
        <Col span={6}>
          <Card
            title={
              <div style={{ background: '#1890ff', color: '#fff', padding: '8px 16px', borderRadius: 4 }}>
                面向产业链
              </div>
            }
          >
            {industryChain.map((item) => (
              <Card
                key={item}
                hoverable
                onClick={() => handleItemClick('产业链', item)}
                style={{
                  marginBottom: 16,
                  background: '#e6f7ff',
                  border: '1px solid #91d5ff',
                  cursor: 'pointer',
                }}
              >
                {item}
              </Card>
            ))}
          </Card>
        </Col>

        {/* 产业领域划分 */}
        <Col span={6}>
          <Card
            title={
              <div style={{ background: '#52c41a', color: '#fff', padding: '8px 16px', borderRadius: 4 }}>
                产业领域划分
              </div>
            }
          >
            {industryDomains.map((domain) => (
              <Card
                key={domain}
                hoverable
                onClick={() => handleItemClick('产业领域', domain)}
                style={{
                  marginBottom: 16,
                  background: '#f6ffed',
                  border: '1px solid #b7eb8f',
                  cursor: 'pointer',
                }}
              >
                {domain}
              </Card>
            ))}
          </Card>
        </Col>

        {/* 岗位对接 */}
        <Col span={6}>
          <Card
            title={
              <div style={{ background: '#13c2c2', color: '#fff', padding: '8px 16px', borderRadius: 4 }}>
                岗位对接
              </div>
            }
            style={{ maxHeight: 800, overflowY: 'auto' }}
          >
            {jobPositions.map((job) => (
              <Card
                key={job.name}
                hoverable
                onClick={() => handleJobClick(job)}
                style={{
                  marginBottom: 16,
                  background: '#e6fffb',
                  border: '1px solid #87e8de',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(19, 194, 194, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{job.name}</div>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ color: '#666' }}>包含技能点:</span>
                  <div style={{ marginTop: 4 }}>
                    {job.skills.map((skill) => (
                      <Tag key={skill} color="blue" style={{ marginBottom: 4 }}>
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <Tag color="green">{job.category}</Tag>
                </div>
              </Card>
            ))}
          </Card>
        </Col>

        {/* 群内专业 */}
        <Col span={6}>
          <Card
            title={
              <div style={{ background: '#fa8c16', color: '#fff', padding: '8px 16px', borderRadius: 4 }}>
                群内专业
              </div>
            }
          >
            {majors.map((major) => (
              <Card
                key={major}
                hoverable
                onClick={() => handleItemClick('专业', major)}
                style={{
                  marginBottom: 16,
                  background: '#fff7e6',
                  border: '1px solid #ffd591',
                  cursor: 'pointer',
                }}
              >
                {major}
              </Card>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default IndustryPanorama

