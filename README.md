# 产教对接能力图谱系统

这是一个基于 React + TypeScript + Vite 构建的产教对接能力图谱系统，用于展示和管理产业教育对接相关的知识图谱、课程、资源等信息。

## 功能特性

- 🏠 **首页** - 展示图谱建设总览、使用统计、快捷入口、资源统计和日程安排
- 📊 **可视图谱** - 知识图谱可视化展示，支持交互式探索
- 📚 **专业课程** - 课程列表展示，支持按专业筛选和搜索
- 🔍 **学习探索** - 学情分析和学习探索功能
- 🏭 **产业全景对接** - 展示产业链、产业领域、岗位对接和专业关系
- 👨‍🏫 **教学空间** - 教学课堂、教学计划等功能
- 📈 **专业知识概览** - 专业群构成、数据概览、课程建设情况等

## 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **构建工具**: Vite
- **UI组件库**: Ant Design
- **图表库**: ECharts
- **可视化**: D3.js
- **路由**: React Router

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

项目将在 `http://localhost:3000` 启动

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产构建

```bash
npm run preview
```

## 项目结构

```
├── src/
│   ├── components/        # 公共组件
│   │   └── Layout.tsx    # 主布局组件
│   ├── pages/            # 页面组件
│   │   ├── Home.tsx      # 首页
│   │   ├── VisualMap.tsx # 可视图谱
│   │   ├── KnowledgeGraph.tsx # 知识图谱
│   │   ├── ProfessionalCourses.tsx # 专业课程
│   │   ├── LearningExploration.tsx # 学习探索
│   │   ├── IndustryPanorama.tsx # 产业全景对接
│   │   ├── TeachingClassroom.tsx # 教学课堂
│   │   └── ProfessionalOverview.tsx # 专业知识概览
│   ├── App.tsx           # 主应用组件
│   ├── main.tsx          # 入口文件
│   └── index.css         # 全局样式
├── index.html            # HTML模板
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript配置
└── vite.config.ts       # Vite配置
```

## 主要页面说明

### 首页
- 图谱建设总览：显示节点数量、关系数量、知识点和技能点统计
- 我的使用：显示共享课程、资源、开发课程和开课次数
- 快捷查看：提供快速访问各种图谱和分析功能的入口
- 资源统计：展示课程资源分布和教学资源分布的图表
- 我的日程：显示日历和教学计划

### 知识图谱
- 交互式知识图谱可视化
- 支持节点筛选和样式配置
- 显示实体、节点、关系等统计信息

### 专业课程
- 课程列表展示
- 按专业筛选
- 搜索功能
- 分页显示

### 产业全景对接
- 展示产业链结构
- 产业领域划分
- 岗位对接信息
- 群内专业列表

## 开发说明

本项目使用 Vite 作为构建工具，支持热模块替换（HMR），开发体验良好。

所有页面组件都使用 Ant Design 组件库，保持统一的UI风格。

图表使用 ECharts 进行数据可视化，知识图谱使用 D3.js 进行交互式可视化。

## 许可证

刘某


