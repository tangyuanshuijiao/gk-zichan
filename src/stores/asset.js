import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAssetStore = defineStore('asset', () => {
  // 资产基本信息数据
  const assetBasicInfoList = ref([
    {
      id: 1,
      assetName: '林荫东路南侧C栋9号',
      address: '江西省鹰潭市月湖区林荫东路南侧C栋9号',
      buildingArea: 120,
      landArea: 80,
      propertyNumber: '鹰房权证字第001号',
      isTransferred: true,
      usage: '出租',
      rentalMethod: '整租',
      rent: 32000,
      value: 120,
      transferIssues: '无',
      allocationFile: '已上传',
      lng: 157.069202,
      lat: 128.260189,
    },
    {
      id: 2,
      assetName: '林荫东路南侧C栋8号',
      address: '江西省鹰潭市月湖区林荫东路南侧C栋8号',
      buildingArea: 120,
      landArea: 80,
      propertyNumber: '鹰房权证字第002号',
      isTransferred: true,
      usage: '出租',
      rentalMethod: '整租',
      rent: 32000,
      value: 120,
      transferIssues: '无',
      allocationFile: '已上传',
      lng: 137.069202,
      lat: 28.260189,
    },
    {
      id: 3,
      assetName: '民昇佳苑21号楼-02＃、01022#、01023#店面',
      address: '江西省鹰潭市月湖区民昇佳苑21号楼',
      buildingArea: 150,
      landArea: 100,
      propertyNumber: '鹰房权证字第003号',
      isTransferred: false,
      usage: '出租',
      rentalMethod: '分租',
      rent: 36000,
      value: 150,
      transferIssues: '产权证办理中',
      allocationFile: '已上传',
      lng: 117.071202,
      lat: 28.262189,
    },
    {
      id: 4,
      assetName: '环城西路6号-2#店面',
      address: '江西省鹰潭市月湖区环城西路6号',
      buildingArea: 200,
      landArea: 120,
      propertyNumber: '鹰房权证字第004号',
      isTransferred: true,
      usage: '出租',
      rentalMethod: '整租',
      rent: 60000,
      value: 200,
      transferIssues: '无',
      allocationFile: '已上传',
      lng: 117.067202,
      lat: 28.258189,
    },
    {
      id: 5,
      assetName: '民昇佳苑22号楼-01＃店面',
      address: '江西省鹰潭市月湖区民昇佳苑22号楼',
      buildingArea: 100,
      landArea: 70,
      propertyNumber: '鹰房权证字第005号',
      isTransferred: false,
      usage: '出租',
      rentalMethod: '整租',
      rent: 21000,
      value: 100,
      transferIssues: '等待产权证',
      allocationFile: '已上传',
      lng: 117.071202,
      lat: 28.262189,
    },
    {
      id: 6,
      assetName: '岱宝山路9号（1-4层）',
      address: '江西省鹰潭市月湖区岱宝山路9号',
      buildingArea: 400,
      landArea: 200,
      propertyNumber: '鹰房权证字第006号',
      isTransferred: true,
      usage: '出租',
      rentalMethod: '整租',
      rent: 60000,
      value: 400,
      transferIssues: '无',
      allocationFile: '已上传',
      lng: 117.073202,
      lat: 28.264189,
    },
    {
      id: 7,
      assetName: '环城西路6号-1#店面',
      address: '江西省鹰潭市月湖区环城西路6号',
      buildingArea: 200,
      landArea: 120,
      propertyNumber: '鹰房权证字第007号',
      isTransferred: true,
      usage: '出租',
      rentalMethod: '整租',
      rent: 60000,
      value: 200,
      transferIssues: '无',
      allocationFile: '已上传',
      lng: 117.067202,
      lat: 28.258189,
    },
    {
      id: 8,
      assetName: '民昇佳苑22号楼-02＃店面',
      address: '江西省鹰潭市月湖区民昇佳苑22号楼',
      buildingArea: 80,
      landArea: 60,
      propertyNumber: '鹰房权证字第008号',
      isTransferred: false,
      usage: '出租',
      rentalMethod: '整租',
      rent: 13500,
      value: 80,
      transferIssues: '产权证办理中',
      allocationFile: '已上传',
      lng: 117.071202,
      lat: 28.262189,
    },
    {
      id: 9,
      assetName: '民昇佳苑22号楼-06#店面',
      address: '江西省鹰潭市月湖区民昇佳苑22号楼',
      buildingArea: 70,
      landArea: 50,
      propertyNumber: '鹰房权证字第009号',
      isTransferred: false,
      usage: '出租',
      rentalMethod: '整租',
      rent: 12000,
      value: 70,
      transferIssues: '等待产权证',
      allocationFile: '已上传',
      lng: 117.071202,
      lat: 28.262189,
    },
    {
      id: 10,
      assetName: '莲花路菜场南侧',
      address: '江西省鹰潭市月湖区莲花路菜场南侧',
      buildingArea: 180,
      landArea: 120,
      propertyNumber: '鹰房权证字第010号',
      isTransferred: true,
      usage: '出租',
      rentalMethod: '整租',
      rent: 55000,
      value: 180,
      transferIssues: '无',
      allocationFile: '已上传',
      lng: 117.075202,
      lat: 28.266189,
    },
    {
      id: 11,
      assetName: '莲花南路十区17-18号一至三楼商业房',
      address: '江西省鹰潭市月湖区莲花南路十区17-18号',
      buildingArea: 300,
      landArea: 200,
      propertyNumber: '鹰房权证字第011号',
      isTransferred: true,
      usage: '出租',
      rentalMethod: '整租',
      rent: 6500,
      value: 300,
      transferIssues: '无',
      allocationFile: '已上传',
      lng: 117.075202,
      lat: 28.266189,
    },
    {
      id: 12,
      assetName: '民欣佳园24号楼-02#店面',
      address: '江西省鹰潭市月湖区民欣佳园24号楼',
      buildingArea: 150,
      landArea: 100,
      propertyNumber: '鹰房权证字第012号',
      isTransferred: false,
      usage: '出租',
      rentalMethod: '整租',
      rent: 36000,
      value: 150,
      transferIssues: '产权证办理中',
      allocationFile: '已上传',
      lng: 117.069202,
      lat: 28.260189,
    },
  ])

  // 资产租赁信息数据
  const assetRentalInfoList = ref([
    {
      id: 1,
      assetId: 1,
      tenant: '张三',
      rent: 32000,
      contractPeriod: '2024-01-01 至 2026-12-31',
      rentEndDate: '2026-12-31',
      annualRent: 384000,
      phoneNumber: '13800138001',
    },
    {
      id: 2,
      assetId: 2,
      tenant: '李四',
      rent: 32000,
      contractPeriod: '2024-02-01 至 2027-01-31',
      rentEndDate: '2027-01-31',
      annualRent: 384000,
      phoneNumber: '13800138002',
    },
    {
      id: 3,
      assetId: 3,
      tenant: '王五',
      rent: 36000,
      contractPeriod: '2024-03-01 至 2027-02-28',
      rentEndDate: '2027-02-28',
      annualRent: 432000,
      phoneNumber: '13800138003',
    },
    {
      id: 4,
      assetId: 4,
      tenant: '赵六',
      rent: 60000,
      contractPeriod: '2024-01-15 至 2026-12-14',
      rentEndDate: '2026-12-14',
      annualRent: 720000,
      phoneNumber: '13800138004',
    },
    {
      id: 5,
      assetId: 5,
      tenant: '钱七',
      rent: 21000,
      contractPeriod: '2024-04-01 至 2027-03-31',
      rentEndDate: '2027-03-31',
      annualRent: 252000,
      phoneNumber: '13800138005',
    },
    {
      id: 6,
      assetId: 6,
      tenant: '孙八',
      rent: 60000,
      contractPeriod: '2024-05-01 至 2027-04-30',
      rentEndDate: '2027-04-30',
      annualRent: 720000,
      phoneNumber: '13800138006',
    },
    {
      id: 7,
      assetId: 7,
      tenant: '周九',
      rent: 60000,
      contractPeriod: '2024-06-01 至 2027-05-31',
      rentEndDate: '2027-05-31',
      annualRent: 720000,
      phoneNumber: '13800138007',
    },
    {
      id: 8,
      assetId: 8,
      tenant: '吴十',
      rent: 13500,
      contractPeriod: '2024-07-01 至 2027-06-30',
      rentEndDate: '2027-06-30',
      annualRent: 162000,
      phoneNumber: '13800138008',
    },
    {
      id: 9,
      assetId: 9,
      tenant: '郑十一',
      rent: 12000,
      contractPeriod: '2024-08-01 至 2027-07-31',
      rentEndDate: '2027-07-31',
      annualRent: 144000,
      phoneNumber: '13800138009',
    },
    {
      id: 10,
      assetId: 10,
      tenant: '王十二',
      rent: 55000,
      contractPeriod: '2024-09-01 至 2027-08-31',
      rentEndDate: '2027-08-31',
      annualRent: 660000,
      phoneNumber: '13800138010',
    },
    {
      id: 11,
      assetId: 11,
      tenant: '李十三',
      rent: 6500,
      contractPeriod: '2024-10-01 至 2027-09-30',
      rentEndDate: '2027-09-30',
      annualRent: 78000,
      phoneNumber: '13800138011',
    },
    {
      id: 12,
      assetId: 12,
      tenant: '张十四',
      rent: 36000,
      contractPeriod: '2024-11-01 至 2027-10-31',
      rentEndDate: '2027-10-31',
      annualRent: 432000,
      phoneNumber: '13800138012',
    },
  ])

  // 计算属性
  const totalAssets = computed(() => assetBasicInfoList.value.length)
  const totalValue = computed(() =>
    assetBasicInfoList.value.reduce((sum, asset) => sum + asset.value, 0),
  )
  const rentedAssets = computed(
    () => assetBasicInfoList.value.filter((asset) => asset.usage === '出租').length,
  )
  const totalAnnualRent = computed(() =>
    assetRentalInfoList.value.reduce((sum, rental) => sum + rental.annualRent, 0),
  )

  // 方法
  const addAssetBasicInfo = (asset) => {
    const newId = Math.max(...assetBasicInfoList.value.map((a) => a.id)) + 1
    asset.id = newId
    assetBasicInfoList.value.push(asset)
  }

  const updateAssetBasicInfo = (id, asset) => {
    const index = assetBasicInfoList.value.findIndex((a) => a.id === id)
    if (index !== -1) {
      assetBasicInfoList.value[index] = { ...asset, id }
    }
  }

  const deleteAssetBasicInfo = (id) => {
    const index = assetBasicInfoList.value.findIndex((a) => a.id === id)
    if (index !== -1) {
      assetBasicInfoList.value.splice(index, 1)
    }
  }

  const addAssetRentalInfo = (rental) => {
    const newId = Math.max(...assetRentalInfoList.value.map((r) => r.id)) + 1
    rental.id = newId
    // 自动计算年租金
    rental.annualRent = rental.rent * 12
    assetRentalInfoList.value.push(rental)
  }

  const updateAssetRentalInfo = (id, rental) => {
    const index = assetRentalInfoList.value.findIndex((r) => r.id === id)
    if (index !== -1) {
      // 自动计算年租金
      rental.annualRent = rental.rent * 12
      assetRentalInfoList.value[index] = { ...rental, id }
    }
  }

  const deleteAssetRentalInfo = (id) => {
    const index = assetRentalInfoList.value.findIndex((r) => r.id === id)
    if (index !== -1) {
      assetRentalInfoList.value.splice(index, 1)
    }
  }

  const getAssetById = (id) => {
    return assetBasicInfoList.value.find((asset) => asset.id === id)
  }

  const getRentalByAssetId = (assetId) => {
    return assetRentalInfoList.value.find((rental) => rental.assetId === assetId)
  }

  return {
    // 数据
    assetBasicInfoList,
    assetRentalInfoList,

    // 计算属性
    totalAssets,
    totalValue,
    rentedAssets,
    totalAnnualRent,

    // 方法
    addAssetBasicInfo,
    updateAssetBasicInfo,
    deleteAssetBasicInfo,
    addAssetRentalInfo,
    updateAssetRentalInfo,
    deleteAssetRentalInfo,
    getAssetById,
    getRentalByAssetId,
  }
})
