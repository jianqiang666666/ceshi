import { useEffect, useRef, useState } from 'react'
import { Card, Row, Col, Checkbox, Button, Input, Space, Statistic, message, Modal } from 'antd'
import * as d3 from 'd3'
import { SearchOutlined, ClearOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons'

const KnowledgeGraph = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedNode, setSelectedNode] = useState<any>(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [selectedMajors, setSelectedMajors] = useState<string[]>(['全部'])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (!svgRef.current) return

    const width = 1200
    const height = 800

    // 清空之前的内容
    d3.select(svgRef.current).selectAll('*').remove()

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)

    // 创建缩放和平移行为
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
        setZoomLevel(event.transform.k)
      })

    svg.call(zoom as any)

    const g = svg.append('g')

    // 模拟数据
    const nodesData = [
      { id: 'center', name: '跨境电子商务', type: 'center', x: width / 2, y: height / 2, major: '跨境电子商务' },
      { id: '1', name: '知识图谱', type: 'professional', x: width / 2 + 200, y: height / 2, major: '电子商务' },
      { id: '2', name: '电子商务', type: 'professional', x: width / 2 + 150, y: height / 2 - 150, major: '电子商务' },
      { id: '3', name: '移动商务', type: 'professional', x: width / 2, y: height / 2 - 200, major: '移动商务' },
      { id: '4', name: '网络营销与直播电商', type: 'professional', x: width / 2 - 200, y: height / 2 - 100, major: '网络营销与直播电商' },
      { id: '5', name: '农村电子商务', type: 'professional', x: width / 2 - 150, y: height / 2 + 100, major: '农村电子商务' },
      { id: '6', name: '商务数据分析', type: 'other', x: width / 2 - 100, y: height / 2 + 200, major: '商务数据分析与应用' },
      { id: '7', name: '物流管理', type: 'other', x: width / 2 + 100, y: height / 2 + 150, major: '电子商务' },
      { id: '8', name: '供应链管理', type: 'other', x: width / 2 + 200, y: height / 2 + 100, major: '电子商务' },
      { id: '9', name: '市场营销', type: 'other', x: width / 2 - 200, y: height / 2, major: '网络营销与直播电商' },
      { id: '10', name: '直播营销', type: 'other', x: width / 2 - 100, y: height / 2 - 100, major: '网络营销与直播电商' },
    ]

    // 筛选节点
    let nodes = nodesData
    if (selectedMajors.length > 0 && !selectedMajors.includes('全部')) {
      nodes = nodes.filter(n => selectedMajors.includes(n.major))
    }
    if (searchText) {
      nodes = nodes.filter(n => n.name.includes(searchText))
    }

    const links = [
      { source: 'center', target: '1' },
      { source: 'center', target: '2' },
      { source: 'center', target: '3' },
      { source: 'center', target: '4' },
      { source: 'center', target: '5' },
      { source: 'center', target: '6' },
      { source: 'center', target: '7' },
      { source: 'center', target: '8' },
      { source: 'center', target: '9' },
      { source: 'center', target: '10' },
      { source: '1', target: '2' },
      { source: '2', target: '3' },
      { source: '4', target: '5' },
    ].filter(link => {
      const sourceExists = nodes.some(n => n.id === link.source)
      const targetExists = nodes.some(n => n.id === link.target)
      return sourceExists && targetExists
    })

    // 绘制连线
    const linkElements = g
      .append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', '#91d5ff')
      .attr('stroke-width', 2)
      .attr('x1', (d: any) => {
        const source = nodes.find((n) => n.id === d.source)
        return source?.x || 0
      })
      .attr('y1', (d: any) => {
        const source = nodes.find((n) => n.id === d.source)
        return source?.y || 0
      })
      .attr('x2', (d: any) => {
        const target = nodes.find((n) => n.id === d.target)
        return target?.x || 0
      })
      .attr('y2', (d: any) => {
        const target = nodes.find((n) => n.id === d.target)
        return target?.y || 0
      })

    // 绘制节点
    const nodeGroups = g
      .append('g')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('transform', (d) => `translate(${d.x},${d.y})`)
      .style('cursor', 'pointer')
      .call(
        d3.drag<SVGGElement, any>()
      .on('start', function () {
        d3.select(this).raise()
      })
          .on('drag', function (event, d) {
            d.x += event.dx
            d.y += event.dy
            d3.select(this).attr('transform', `translate(${d.x},${d.y})`)
            // 更新连线
            linkElements
              .attr('x1', (l: any) => {
                const source = nodes.find((n) => n.id === l.source)
                return source?.x || 0
              })
              .attr('y1', (l: any) => {
                const source = nodes.find((n) => n.id === l.source)
                return source?.y || 0
              })
              .attr('x2', (l: any) => {
                const target = nodes.find((n) => n.id === l.target)
                return target?.x || 0
              })
              .attr('y2', (l: any) => {
                const target = nodes.find((n) => n.id === l.target)
                return target?.y || 0
              })
          })
      )

    nodeGroups
      .append('circle')
      .attr('r', (d) => {
        if (d.type === 'center') return 40
        if (d.type === 'professional') return 25
        return 15
      })
      .attr('fill', (d) => {
        if (d.type === 'center') return '#ff4d4f'
        if (d.type === 'professional') return '#1890ff'
        return '#fa8c16'
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .on('mouseenter', function (_, d) {
        d3.select(this)
          .attr('stroke-width', 4)
          .attr('r', () => {
            if (d.type === 'center') return 45
            if (d.type === 'professional') return 30
            return 20
          })
      })
      .on('mouseleave', function (_, d) {
        d3.select(this)
          .attr('stroke-width', 2)
          .attr('r', () => {
            if (d.type === 'center') return 40
            if (d.type === 'professional') return 25
            return 15
          })
      })
      .on('click', (_, d) => {
        setSelectedNode(d)
        message.info(`点击了节点：${d.name}`)
      })

    nodeGroups
      .append('text')
      .text((d) => d.name)
      .attr('text-anchor', 'middle')
      .attr('dy', (d) => {
        if (d.type === 'center') return 60
        if (d.type === 'professional') return 40
        return 25
      })
      .attr('font-size', (d) => {
        if (d.type === 'center') return 14
        if (d.type === 'professional') return 12
        return 10
      })
      .attr('fill', '#333')
      .style('pointer-events', 'none')
  }, [selectedMajors, searchText])

  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="筛选条件" style={{ marginBottom: 16 }}>
            <Input
              placeholder="请输入节点名称"
              prefix={<SearchOutlined />}
              style={{ marginBottom: 16 }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              allowClear
            />
            <div style={{ marginBottom: 16 }}>
              <Checkbox
                checked={selectedMajors.includes('全部')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedMajors(['全部'])
                  } else {
                    setSelectedMajors([])
                  }
                }}
              >
                全选
              </Checkbox>
              <br />
              {['电子商务', '跨境电子商务', '移动商务', '网络营销与直播电商', '农村电子商务', '商务数据分析与应用'].map((major) => (
                <div key={major}>
                  <Checkbox
                    checked={selectedMajors.includes(major)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedMajors([...selectedMajors.filter(m => m !== '全部'), major])
                      } else {
                        setSelectedMajors(selectedMajors.filter(m => m !== major))
                      }
                    }}
                    style={{ marginLeft: 20 }}
                  >
                    {major}
                  </Checkbox>
                </div>
              ))}
            </div>
            <Space>
              <Button
                icon={<ClearOutlined />}
                onClick={() => {
                  setSelectedMajors(['全部'])
                  setSearchText('')
                }}
              >
                清空全部
              </Button>
              <Button type="primary" onClick={() => message.success('图谱已更新')}>
                图谱展示
              </Button>
            </Space>
          </Card>
          <Card title="中心节点">
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: '#ff4d4f',
                    marginRight: 8,
                  }}
                />
                <span>中心节点</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: '#1890ff',
                    marginRight: 8,
                  }}
                />
                <span>专业</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: '#fa8c16',
                    marginRight: 8,
                  }}
                />
                <span>其他</span>
              </div>
            </div>
            <Statistic title="实体数量" value={3} />
            <Statistic title="节点数量" value={84} style={{ marginTop: 16 }} />
            <Statistic title="关系类型" value={2} style={{ marginTop: 16 }} />
            <Statistic title="关系数量" value={149} style={{ marginTop: 16 }} />
          </Card>
        </Col>
        <Col span={18}>
          <Card
            title="知识图谱"
            extra={
              <Space>
                <Button
                  onClick={() => message.success('图谱已保存')}
                >
                  保存图谱
                </Button>
                <Button
                  onClick={() => message.success('数据下载中...')}
                >
                  下载数据
                </Button>
                <Button
                  icon={<ZoomInOutlined />}
                  onClick={() => {
                    if (svgRef.current) {
                      const zoom = d3.zoom<SVGSVGElement, unknown>()
                      d3.select(svgRef.current).transition().call(zoom.scaleBy as any, 1.2)
                    }
                  }}
                >
                  放大
                </Button>
                <Button
                  icon={<ZoomOutOutlined />}
                  onClick={() => {
                    if (svgRef.current) {
                      const zoom = d3.zoom<SVGSVGElement, unknown>()
                      d3.select(svgRef.current).transition().call(zoom.scaleBy as any, 0.8)
                    }
                  }}
                >
                  缩小
                </Button>
                <Button
                  onClick={() => {
                    if (svgRef.current) {
                      d3.select(svgRef.current).transition().call(
                        d3.zoom<SVGSVGElement, unknown>().transform as any,
                        d3.zoomIdentity
                      )
                      setZoomLevel(1)
                    }
                  }}
                >
                  重置视图
                </Button>
              </Space>
            }
          >
            <div style={{ border: '1px solid #d9d9d9', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 10, background: 'rgba(255,255,255,0.9)', padding: '8px', borderRadius: 4 }}>
                缩放级别: {(zoomLevel * 100).toFixed(0)}%
              </div>
              <svg ref={svgRef} style={{ width: '100%', height: '800px', cursor: 'move' }} />
            </div>
            {selectedNode && (
              <Modal
                title="节点详情"
                open={!!selectedNode}
                onCancel={() => setSelectedNode(null)}
                footer={null}
              >
                <p><strong>节点名称：</strong>{selectedNode.name}</p>
                <p><strong>节点类型：</strong>{selectedNode.type === 'center' ? '中心节点' : selectedNode.type === 'professional' ? '专业' : '其他'}</p>
                <p><strong>所属专业：</strong>{selectedNode.major}</p>
              </Modal>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default KnowledgeGraph

