<template>
  <div class="app-container">
    <el-container class="main-container">
      <!-- 侧边栏 -->
      <el-aside width="250px" class="sidebar">
        <div class="logo">
          <h2>资产管理系统</h2>
        </div>
        <el-menu
          :default-active="$route.path"
          class="sidebar-menu"
          router
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
        >
          <el-menu-item index="/">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>

          <el-sub-menu index="asset">
            <template #title>
              <el-icon><OfficeBuilding /></el-icon>
              <span>资产情况</span>
              </template>
            <el-menu-item index="/asset-basic-info">
              <el-icon><Document /></el-icon>
              <span>资产基本信息</span>
            </el-menu-item>
            <el-menu-item index="/asset-rental-info">
              <el-icon><Money /></el-icon>
              <span>资产租赁情况</span>
            </el-menu-item>
            <el-menu-item index="/asset-map">
              <el-icon><Location /></el-icon>
              <span>资产地图</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <!-- 主内容区 -->
      <el-container class="content-container">
        <el-header class="header">
          <div class="header-left">
            <h3>{{ currentPageTitle }}</h3>
          </div>
          <div class="header-right">
            <el-dropdown>
              <span class="user-info">
                <el-avatar
                  size="small"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <span>管理员</span>
                <el-icon><ArrowDown /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>

        <el-main class="main-content">
          <router-view />
      </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  House,
  OfficeBuilding,
  Document,
  Money,
  ArrowDown,
  Location,
} from '@element-plus/icons-vue'

const route = useRoute()

// 计算当前页面标题
const currentPageTitle = computed(() => {
  return route.meta.title || '资产管理系统'
})
</script>

<style scoped>
.app-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.main-container {
  height: 100%;
}

.sidebar {
  background-color: #304156;
  color: #bfcbd9;
  height: 100vh;
  overflow-y: auto;
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2b2f3a;
  color: white;
}

.logo h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
}

.sidebar-menu {
  border-right: none;
  height: calc(100vh - 60px);
}

.content-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  flex-shrink: 0;
}

.header-left h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #303133;
}

.header-right {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.user-info:hover {
  background-color: #f5f7fa;
}

.main-content {
  background-color: #f0f2f5;
  padding: 0;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

/* 全局样式重置 */
:deep(*) {
  box-sizing: border-box;
}

:deep(html, body) {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

:deep(#app) {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* 表格容器样式优化 */
:deep(.el-card__body) {
  padding: 20px;
}

:deep(.el-table) {
  width: 100% !important;
}

:deep(.el-table__body-wrapper) {
  overflow-x: auto;
}

:deep(.el-table__header-wrapper) {
  overflow-x: auto;
}
</style>
