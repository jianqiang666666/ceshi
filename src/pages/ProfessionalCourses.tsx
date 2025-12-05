import { useState, useMemo } from 'react'
import { Card, Row, Col, Tag, Input, Select, Pagination, Space, message } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const ProfessionalCourses = () => {
  const [selectedMajor, setSelectedMajor] = useState('全部')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(18)
  const [searchText, setSearchText] = useState('')

  const majors = ['全部', '电子商务', '跨境电子商务', '移动商务', '网络营销与直播电商', '农村电子商务', '商务数据分析与应用']

  const allCourses = [
    { id: 1, name: '自媒体营销与策划', teacher: '演示教师', major: '网络营销与直播电商' },
    { id: 2, name: '网店运营推广', teacher: '演示教师', major: '电子商务' },
    { id: 3, name: '网店运营', teacher: '演示课程', major: '电子商务' },
    { id: 4, name: '跨境电商运营', teacher: '演示课程', major: '跨境电子商务' },
    { id: 5, name: '新媒体营销', teacher: '演示课程', major: '网络营销与直播电商' },
    { id: 6, name: '直播运营', teacher: '演示课程', major: '网络营销与直播电商' },
    { id: 7, name: '网络营销', teacher: '演示课程', major: '网络营销与直播电商' },
    { id: 8, name: '商务数据分析', teacher: '演示课程', major: '商务数据分析与应用' },
    { id: 9, name: '直播销售', teacher: '奥派股份', major: '网络营销与直播电商' },
    { id: 10, name: '营销渠道运维', teacher: '奥派股份', major: '移动商务' },
    { id: 11, name: '新商业文化', teacher: '奥派股份', major: '电子商务' },
    { id: 12, name: '零售门店O2O运营', teacher: '奥派股份', major: '移动商务' },
    { id: 13, name: '办公软件高级应用', teacher: '奥派股份', major: '商务数据分析与应用' },
    { id: 14, name: '项目管理', teacher: '奥派股份', major: '电子商务' },
    { id: 15, name: '财税基础', teacher: '奥派股份', major: '电子商务' },
    { id: 16, name: '零售基础', teacher: '奥派股份', major: '农村电子商务' },
    { id: 17, name: '人工智能与智慧商业', teacher: '奥派股份', major: '商务数据分析与应用' },
    { id: 18, name: '市场调研与分析', teacher: '奥派股份', major: '网络营销与直播电商' },
  ]

  // 筛选和搜索课程
  const filteredCourses = useMemo(() => {
    let filtered = allCourses

    // 按专业筛选
    if (selectedMajor !== '全部') {
      filtered = filtered.filter(course => course.major === selectedMajor)
    }

    // 按搜索文本筛选
    if (searchText) {
      filtered = filtered.filter(course =>
        course.name.toLowerCase().includes(searchText.toLowerCase()) ||
        course.teacher.toLowerCase().includes(searchText.toLowerCase())
      )
    }

    return filtered
  }, [selectedMajor, searchText])

  // 分页
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    return filteredCourses.slice(start, end)
  }, [filteredCourses, currentPage, pageSize])

  const handleCourseClick = (course: typeof allCourses[0]) => {
    message.success(`点击了课程：${course.name}`)
    // 这里可以跳转到课程详情页
  }

  const handleSearch = (value: string) => {
    setSearchText(value)
    setCurrentPage(1) // 搜索时重置到第一页
  }

  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>专业课程</h1>

      <Card>
        <Space style={{ marginBottom: 24, width: '100%', justifyContent: 'space-between' }}>
          <Space>
            <span>适用专业:</span>
            {majors.map((major) => (
              <Tag
                key={major}
                color={selectedMajor === major ? 'blue' : 'default'}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedMajor(major)}
              >
                {major}
              </Tag>
            ))}
          </Space>
          <Space>
            <span>时间</span>
            <span>热度</span>
            <Input
              placeholder="请输入课程名称"
              prefix={<SearchOutlined />}
              style={{ width: 200 }}
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              allowClear
            />
          </Space>
        </Space>

        <Row gutter={[16, 16]}>
          {paginatedCourses.length > 0 ? (
            paginatedCourses.map((course) => (
              <Col span={6} key={course.id}>
                <Card
                  hoverable
                  onClick={() => handleCourseClick(course)}
                  style={{
                    height: 180,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  cover={
                    <div
                      style={{
                        height: 100,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: 32,
                      }}
                    >
                      📚
                    </div>
                  }
                >
                  <Card.Meta
                    title={course.name}
                    description={
                      <div style={{ marginTop: 8 }}>
                        <span style={{ color: '#999' }}>{course.teacher}</span>
                        <br />
                        <Tag color="blue" style={{ marginTop: 4 }}>{course.major}</Tag>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))
          ) : (
            <Col span={24}>
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <p>没有找到相关课程</p>
              </div>
            </Col>
          )}
        </Row>

        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>总{filteredCourses.length}条,共{Math.ceil(filteredCourses.length / pageSize)}页</span>
          <Space>
            <Select
              value={pageSize}
              onChange={(value) => {
                setPageSize(value)
                setCurrentPage(1)
              }}
              style={{ width: 100 }}
            >
              <Select.Option value={12}>12条/页</Select.Option>
              <Select.Option value={18}>18条/页</Select.Option>
              <Select.Option value={24}>24条/页</Select.Option>
            </Select>
            <Pagination
              current={currentPage}
              total={filteredCourses.length}
              pageSize={pageSize}
              showSizeChanger={false}
              onChange={setCurrentPage}
            />
            <Input
              style={{ width: 100 }}
              placeholder="前往"
              suffix="页"
              onPressEnter={(e) => {
                const page = parseInt((e.target as HTMLInputElement).value)
                const maxPage = Math.ceil(filteredCourses.length / pageSize)
                if (page >= 1 && page <= maxPage) {
                  setCurrentPage(page)
                } else {
                  message.warning(`请输入1-${maxPage}之间的页码`)
                }
              }}
            />
          </Space>
        </div>
      </Card>
    </div>
  )
}

export default ProfessionalCourses

