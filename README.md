# 资产管理系统

## 项目概述

这是一个基于Vue 3 + Element Plus的资产管理系统，主要功能包括：

- 首页：显示运营数据、预警消息、出租公示情况
- 资产基本信息：管理资产的基本信息
- 资产租赁情况：管理资产的租赁信息
- 资产地图：在地图上显示资产位置

## 数据同步机制

系统实现了页面间的数据同步，确保所有页面显示的资产信息保持一致：

### 1. 数据流向

```
地图组件 (AssetMap.vue) ←→ 其他页面
    ↓
  数据源
```

### 2. 同步方式

- **全局事件机制**：使用浏览器的CustomEvent实现页面间通信
- **实时更新**：当任一页面修改资产信息时，其他页面自动同步更新

### 3. 事件类型

#### 地图组件发出的事件：
- `assetDataUpdated`：资产数据更新后通知其他页面

#### 其他页面发出的事件：
- `assetDataUpdateRequest`：请求地图组件更新资产数据
  - `type: 'addAssetBasicInfo'`：添加新资产
  - `type: 'updateAssetBasicInfo'`：更新资产信息
  - `type: 'deleteAssetBasicInfo'`：删除资产

### 4. 数据同步流程

1. 用户在任一页面修改资产信息
2. 页面发送更新请求事件
3. 地图组件接收请求并更新数据
4. 地图组件发送数据更新事件
5. 其他页面接收事件并同步更新显示

## 技术栈

- **前端框架**：Vue 3 (Composition API)
- **UI组件库**：Element Plus
- **地图服务**：高德地图 API
- **构建工具**：Vite
- **包管理**：npm

## 项目结构

```
src/
├── components/          # 组件目录
│   └── asset/         # 资产相关组件
│       ├── AssetBasicInfoDialog.vue    # 资产基本信息弹窗
│       └── AssetRentalInfoDialog.vue   # 资产租赁信息弹窗
├── views/              # 页面目录
│   ├── Home.vue                    # 首页
│   ├── AssetBasicInfo.vue          # 资产基本信息
│   ├── AssetRentalInfo.vue         # 资产租赁情况
│   └── AssetMap.vue                # 资产地图
├── router/             # 路由配置
│   └── index.js
├── stores/             # 状态管理
│   └── counter.js
└── App.vue             # 根组件
```

## 主要功能

### 1. 首页 (Home.vue)
- 运营数据展示（资产总数、总价值、出租数、年收入）
- 预警消息列表
- 出租公示情况

### 2. 资产基本信息 (AssetBasicInfo.vue)
- 资产列表展示
- 新增/编辑/删除资产
- 搜索和筛选功能
- 与地图组件数据同步

### 3. 资产租赁情况 (AssetRentalInfo.vue)
- 租赁信息列表
- 新增/编辑/删除租赁记录
- 自动计算年租金
- 与地图组件数据同步

### 4. 资产地图 (AssetMap.vue)
- 高德地图集成
- 资产位置标记
- 资产信息弹窗
- 坐标定位功能
- 数据源管理

## 安装和运行

### 环境要求
- Node.js 16+
- npm 8+

### 安装依赖
```bash
npm install
```

### 运行开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

## 配置说明

### 高德地图API
在 `src/views/AssetMap.vue` 中配置您的高德地图API密钥：

```javascript
const AMap = await AMapLoader.load({
  key: 'YOUR_AMAP_API_KEY', // 替换为您的API密钥
  version: '2.0',
  plugins: ['AMap.Geolocation', 'AMap.Scale', 'AMap.ToolBar'],
})
```

## 数据同步示例

### 添加新资产
```javascript
// 在资产基本信息页面
const handleAddSuccess = (assetData) => {
  window.dispatchEvent(new CustomEvent('assetDataUpdateRequest', {
    detail: {
      type: 'addAssetBasicInfo',
      data: assetData
    }
  }))
}
```

### 监听数据更新
```javascript
// 在其他页面
onMounted(() => {
  window.addEventListener('assetDataUpdated', handleAssetDataUpdate)
})

const handleAssetDataUpdate = (event) => {
  const { data } = event.detail
  // 更新页面数据
  updatePageData(data)
}
```

## 注意事项

1. 确保所有页面在组件卸载时移除事件监听器
2. 地图组件的坐标数据需要准确配置
3. 资产ID在整个系统中必须唯一
4. 建议在生产环境中使用更可靠的状态管理方案（如Pinia）

## 更新日志

- 2024-12-15：实现页面间数据同步机制
- 2024-12-15：集成高德地图API
- 2024-12-15：完成基础CRUD功能
- 2024-12-15：创建响应式布局设计
