import { Card, Input, Pagination, Select, Space, Empty } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const TeachingClassroom = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>教学课堂</h1>
      <Card>
        <div style={{ marginBottom: 24 }}>
          <Input
            placeholder="请输入课程名称"
            prefix={<SearchOutlined />}
            style={{ width: 300 }}
          />
        </div>
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <Empty description="暂无数据" />
        </div>
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>总0条,共0页</span>
          <Space>
            <Select defaultValue={12} style={{ width: 100 }}>
              <Select.Option value={12}>12条/页</Select.Option>
            </Select>
            <Pagination
              current={1}
              total={0}
              pageSize={12}
              disabled
            />
            <Input
              style={{ width: 100 }}
              placeholder="前往"
              suffix="页"
              disabled
            />
          </Space>
        </div>
      </Card>
    </div>
  )
}

export default TeachingClassroom


