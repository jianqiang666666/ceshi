import { useState } from 'react'
import {
  Card,
  Form,
  Input,
  Button,
  Switch,
  Select,
  Radio,
  message,
  Divider,
  Space,
  Alert,
} from 'antd'
import {
  BellOutlined,
  SafetyOutlined,
  GlobalOutlined,
  SkinOutlined,
  SaveOutlined,
} from '@ant-design/icons'

const UserSettings = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleSave = async (values: any) => {
    setLoading(true)
    // 模拟保存
    setTimeout(() => {
      setLoading(false)
      message.success('设置已保存')
      console.log('保存的设置:', values)
    }, 1000)
  }

  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>系统设置</h1>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSave}
        initialValues={{
          notifications: {
            email: true,
            sms: false,
            system: true,
          },
          theme: 'light',
          language: 'zh-CN',
          autoSave: true,
        }}
      >
        {/* 通知设置 */}
        <Card
          title={
            <Space>
              <BellOutlined />
              通知设置
            </Space>
          }
          style={{ marginBottom: 16 }}
        >
          <Form.Item label="邮件通知" name={['notifications', 'email']} valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="短信通知" name={['notifications', 'sms']} valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="系统通知" name={['notifications', 'system']} valuePropName="checked">
            <Switch />
          </Form.Item>
        </Card>

        {/* 外观设置 */}
        <Card
          title={
            <Space>
              <SkinOutlined />
              外观设置
            </Space>
          }
          style={{ marginBottom: 16 }}
        >
          <Form.Item label="主题模式" name="theme">
            <Radio.Group>
              <Radio value="light">浅色</Radio>
              <Radio value="dark">深色</Radio>
              <Radio value="auto">跟随系统</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="语言设置" name="language">
            <Select style={{ width: 200 }}>
              <Select.Option value="zh-CN">简体中文</Select.Option>
              <Select.Option value="zh-TW">繁体中文</Select.Option>
              <Select.Option value="en-US">English</Select.Option>
            </Select>
          </Form.Item>
        </Card>

        {/* 安全设置 */}
        <Card
          title={
            <Space>
              <SafetyOutlined />
              安全设置
            </Space>
          }
          style={{ marginBottom: 16 }}
        >
          <Form.Item label="修改密码">
            <Space>
              <Input.Password placeholder="请输入新密码" style={{ width: 200 }} />
              <Button>修改</Button>
            </Space>
          </Form.Item>
          <Form.Item label="自动保存" name="autoSave" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Alert
            message="安全提示"
            description="建议定期修改密码，使用强密码保护账户安全"
            type="info"
            showIcon
            style={{ marginTop: 16 }}
          />
        </Card>

        {/* 其他设置 */}
        <Card
          title={
            <Space>
              <GlobalOutlined />
              其他设置
            </Space>
          }
          style={{ marginBottom: 16 }}
        >
          <Form.Item label="每页显示数量">
            <Select defaultValue={18} style={{ width: 200 }}>
              <Select.Option value={12}>12条</Select.Option>
              <Select.Option value={18}>18条</Select.Option>
              <Select.Option value={24}>24条</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="数据导出格式">
            <Radio.Group defaultValue="excel">
              <Radio value="excel">Excel</Radio>
              <Radio value="pdf">PDF</Radio>
              <Radio value="csv">CSV</Radio>
            </Radio.Group>
          </Form.Item>
        </Card>

        <Divider />

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />} loading={loading}>
              保存设置
            </Button>
            <Button onClick={() => form.resetFields()}>重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UserSettings


