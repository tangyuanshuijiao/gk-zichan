<template>
  <el-dialog 
    :model-value="visible" 
    @update:model-value="$emit('update:visible', $event)"
    :title="isEdit ? '编辑租赁信息' : '新增租赁信息'" 
    width="60%"
    :before-close="handleClose"
  >
    <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="承租户" prop="tenant">
            <el-input v-model="form.tenant" placeholder="请输入承租户名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="租金" prop="rent">
            <el-input-number v-model="form.rent" :min="0" :precision="2" style="width: 100%" />
            <span class="unit">元/月</span>
          </el-form-item>
        </el-col>
      </el-row>
      
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="合同开始日期" prop="contractStartDate">
            <el-date-picker 
              v-model="form.contractStartDate" 
              type="date" 
              placeholder="选择合同开始日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="合同结束日期" prop="contractEndDate">
            <el-date-picker 
              v-model="form.contractEndDate" 
              type="date" 
              placeholder="选择合同结束日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
      </el-row>
      
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="收租截止期限" prop="rentEndDate">
            <el-date-picker 
              v-model="form.rentEndDate" 
              type="date" 
              placeholder="选择收租截止日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年租金" prop="annualRent">
            <el-input-number v-model="form.annualRent" :min="0" :precision="2" style="width: 100%" />
            <span class="unit">元/年</span>
          </el-form-item>
        </el-col>
      </el-row>
      
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入联系电话" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleSubmit" :loading="loading">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, watch, computed } from 'vue'
import { ElMessage } from 'element-plus'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  isEdit: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:visible', 'submit'])

const formRef = ref()
const loading = ref(false)

// 表单数据
const form = reactive({
  tenant: '',
  rent: 0,
  contractStartDate: '',
  contractEndDate: '',
  rentEndDate: '',
  annualRent: 0,
  phone: ''
})

// 表单验证规则
const rules = {
  tenant: [
    { required: true, message: '请输入承租户名称', trigger: 'blur' }
  ],
  rent: [
    { required: true, message: '请输入租金', trigger: 'blur' }
  ],
  contractStartDate: [
    { required: true, message: '请选择合同开始日期', trigger: 'change' }
  ],
  contractEndDate: [
    { required: true, message: '请选择合同结束日期', trigger: 'change' }
  ],
  rentEndDate: [
    { required: true, message: '请选择收租截止日期', trigger: 'change' }
  ],
  annualRent: [
    { required: true, message: '请输入年租金', trigger: 'blur' }
  ],
  phone: [
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
  ]
}

// 监听数据变化，用于编辑模式
watch(() => props.data, (newData) => {
  if (newData && Object.keys(newData).length > 0) {
    Object.assign(form, newData)
  }
}, { immediate: true })

// 监听对话框显示状态
watch(() => props.visible, (visible) => {
  if (!visible) {
    resetForm()
  }
})

// 监听租金变化，自动计算年租金
watch(() => form.rent, (newRent) => {
  if (newRent > 0) {
    form.annualRent = newRent * 12
  }
})

// 重置表单
const resetForm = () => {
  Object.assign(form, {
    tenant: '',
    rent: 0,
    contractStartDate: '',
    contractEndDate: '',
    rentEndDate: '',
    annualRent: 0,
    phone: ''
  })
  formRef.value?.resetFields()
}

// 关闭对话框
const handleClose = () => {
  emit('update:visible', false)
}

// 提交表单
const handleSubmit = async () => {
  try {
    await formRef.value.validate()
    loading.value = true
    
    // 模拟提交延迟
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    emit('submit', { ...form })
    ElMessage.success(props.isEdit ? '编辑成功' : '新增成功')
    handleClose()
  } catch (error) {
    ElMessage.error('请检查表单填写是否正确')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.unit {
  margin-left: 8px;
  color: #666;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

:deep(.el-form-item__content) {
  display: flex;
  align-items: center;
}

:deep(.el-input-number) {
  width: 100%;
}

:deep(.el-date-picker) {
  width: 100%;
}
</style>
