import { Card, Steps, Empty } from 'antd'
import {
  EyeOutlined,
  SettingOutlined,
  DownloadOutlined,
} from '@ant-design/icons'

const VisualMap = () => {
  const steps = [
    {
      title: '选择查看',
      icon: <EyeOutlined />,
      description: '知识/能力/产教/自定义图谱',
    },
    {
      title: '深入配置',
      icon: <SettingOutlined />,
      description: '图谱数据、样式',
    },
    {
      title: '下载',
      icon: <DownloadOutlined />,
      description: '查看、保存精美图谱',
    },
  ]

  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>可视图谱</h1>
      <Card>
        <Steps
          items={steps}
          current={0}
          style={{ marginBottom: 48 }}
        />
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <Empty
            description="请从左侧导航选择具体的图谱类型"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </div>
      </Card>
    </div>
  )
}

export default VisualMap


