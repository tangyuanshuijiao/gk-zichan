<template>
  <div class="asset-rental-info">
    <el-card class="page-header">
      <h2>资产租赁情况</h2>
      <p>管理所有资产的租赁信息，包括承租户、租金、合同期限等详细信息</p>
    </el-card>

    <!-- 搜索栏 -->
    <el-card class="search-card">
      <el-form :inline="true" :model="searchForm" class="search-form">
        <el-form-item label="承租户">
          <el-input v-model="searchForm.tenant" placeholder="请输入承租户" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 租赁列表 -->
    <el-card class="table-card">
      <div class="table-header">
        <h3>租赁信息列表</h3>
        <el-button type="primary" @click="handleAdd">
          <el-icon><Plus /></el-icon>
          新增租赁
        </el-button>
      </div>
      
      <el-table :data="filteredTableData" style="width: 100%" stripe>
        <el-table-column prop="tenant" label="承租户" min-width="120" />
        <el-table-column prop="rent" label="租金" min-width="100">
          <template #default="scope">
            ¥{{ scope.row.rent }}
          </template>
        </el-table-column>
        <el-table-column prop="contractPeriod" label="合同期限" min-width="150">
          <template #default="scope">
            {{ scope.row.contractPeriod }}
          </template>
        </el-table-column>
        <el-table-column prop="rentEndDate" label="收租截止期限" min-width="120" />
        <el-table-column prop="annualRent" label="年租金" min-width="100">
          <template #default="scope">
            ¥{{ scope.row.annualRent }}
          </template>
        </el-table-column>
        <el-table-column prop="phoneNumber" label="联系电话" min-width="120" />
        <el-table-column label="操作" width="150" fixed="right">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 新增/编辑对话框 -->
    <AssetRentalInfoDialog
      v-model:visible="dialogVisible"
      :is-edit="isEdit"
      :data="currentData"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import AssetRentalInfoDialog from '@/components/asset/AssetRentalInfoDialog.vue'

// 对话框相关
const dialogVisible = ref(false)
const isEdit = ref(false)
const currentData = ref({})

// 搜索表单
const searchForm = reactive({
  tenant: ''
})

// 响应式数据
const tableData = ref([
  {
    id: 1,
    assetId: 1,
    tenant: '张三',
    rent: 32000,
    contractPeriod: '2024-01-01 至 2026-12-31',
    rentEndDate: '2026-12-31',
    annualRent: 384000,
    phoneNumber: '13800138001'
  },
  {
    id: 2,
    assetId: 2,
    tenant: '李四',
    rent: 32000,
    contractPeriod: '2024-02-01 至 2027-01-31',
    rentEndDate: '2027-01-31',
    annualRent: 384000,
    phoneNumber: '13800138002'
  },
  {
    id: 3,
    assetId: 3,
    tenant: '王五',
    rent: 36000,
    contractPeriod: '2024-03-01 至 2027-02-28',
    rentEndDate: '2027-02-28',
    annualRent: 432000,
    phoneNumber: '13800138003'
  },
  {
    id: 4,
    assetId: 4,
    tenant: '赵六',
    rent: 60000,
    contractPeriod: '2024-01-15 至 2026-12-14',
    rentEndDate: '2026-12-14',
    annualRent: 720000,
    phoneNumber: '13800138004'
  },
  {
    id: 5,
    assetId: 5,
    tenant: '钱七',
    rent: 21000,
    contractPeriod: '2024-04-01 至 2027-03-31',
    rentEndDate: '2027-03-31',
    annualRent: 252000,
    phoneNumber: '13800138005'
  },
  {
    id: 6,
    assetId: 6,
    tenant: '孙八',
    rent: 60000,
    contractPeriod: '2024-05-01 至 2027-04-30',
    rentEndDate: '2027-04-30',
    annualRent: 720000,
    phoneNumber: '13800138006'
  },
  {
    id: 7,
    assetId: 7,
    tenant: '周九',
    rent: 60000,
    contractPeriod: '2024-06-01 至 2027-05-31',
    rentEndDate: '2027-05-31',
    annualRent: 720000,
    phoneNumber: '13800138007'
  },
  {
    id: 8,
    assetId: 8,
    tenant: '吴十',
    rent: 13500,
    contractPeriod: '2024-07-01 至 2027-06-30',
    rentEndDate: '2027-06-30',
    annualRent: 162000,
    phoneNumber: '13800138008'
  },
  {
    id: 9,
    assetId: 9,
    tenant: '郑十一',
    rent: 12000,
    contractPeriod: '2024-08-01 至 2027-07-31',
    rentEndDate: '2027-07-31',
    annualRent: 144000,
    phoneNumber: '13800138009'
  },
  {
    id: 10,
    assetId: 10,
    tenant: '王十二',
    rent: 55000,
    contractPeriod: '2024-09-01 至 2027-08-31',
    rentEndDate: '2027-08-31',
    annualRent: 660000,
    phoneNumber: '13800138010'
  },
  {
    id: 11,
    assetId: 11,
    tenant: '李十三',
    rent: 6500,
    contractPeriod: '2024-10-01 至 2027-09-30',
    rentEndDate: '2027-09-30',
    annualRent: 78000,
    phoneNumber: '13800138011'
  },
  {
    id: 12,
    assetId: 12,
    tenant: '张十四',
    rent: 36000,
    contractPeriod: '2024-11-01 至 2027-10-31',
    rentEndDate: '2027-10-31',
    annualRent: 432000,
    phoneNumber: '13800138012'
  }
])

// 计算属性：过滤后的表格数据
const filteredTableData = computed(() => {
  return tableData.value.filter(item => {
    const tenantMatch = !searchForm.tenant || item.tenant.includes(searchForm.tenant)
    return tenantMatch
  })
})

// 搜索
const handleSearch = () => {
  // 搜索逻辑已通过计算属性实现
}

// 重置搜索
const resetSearch = () => {
  searchForm.tenant = ''
}

// 新增租赁
const handleAdd = () => {
  isEdit.value = false
  currentData.value = {}
  dialogVisible.value = true
}

// 编辑租赁
const handleEdit = (row) => {
  isEdit.value = true
  currentData.value = { ...row }
  dialogVisible.value = true
}

// 删除租赁
const handleDelete = (index) => {
  ElMessageBox.confirm('确定要删除这条租赁记录吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    tableData.value.splice(index, 1)
    ElMessage.success('删除成功')
  }).catch(() => {
    // 取消删除
  })
}

// 提交表单
const handleSubmit = (formData) => {
  if (isEdit.value) {
    // 编辑模式：更新现有数据
    const index = tableData.value.findIndex(item => item.tenant === currentData.value.tenant)
    if (index !== -1) {
      tableData.value[index] = { ...formData }
    }
  } else {
    // 新增模式：添加新数据
    tableData.value.push({ ...formData })
  }
}
</script>

<style scoped>
.asset-rental-info {
  height: 100%;
  padding: 20px;
  overflow-y: auto;
}

.page-header {
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.page-header h2 {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 500;
}

.page-header p {
  margin: 0;
  opacity: 0.9;
}

.search-card {
  margin-bottom: 20px;
}

.search-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.table-card {
  margin-bottom: 20px;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.table-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
}

/* 表格样式优化 */
:deep(.el-table) {
  width: 100% !important;
}

:deep(.el-table__body-wrapper) {
  overflow-x: auto;
}

:deep(.el-table__header-wrapper) {
  overflow-x: auto;
}

:deep(.el-table .cell) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 响应式表格 */
@media (max-width: 1200px) {
  :deep(.el-table) {
    font-size: 12px;
  }
  
  :deep(.el-table .cell) {
    padding: 8px 4px;
  }
}

@media (max-width: 768px) {
  .search-form {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-form .el-form-item {
    margin-bottom: 10px;
  }
}
</style>
