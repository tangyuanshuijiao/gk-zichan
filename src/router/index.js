import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AssetBasicInfo from '@/views/AssetBasicInfo.vue'
import AssetRentalInfo from '@/views/AssetRentalInfo.vue'
import AssetMap from '@/views/AssetMap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: '首页' },
    },
    {
      path: '/asset-basic-info',
      name: 'assetBasicInfo',
      component: AssetBasicInfo,
      meta: { title: '资产基本信息' },
    },
    {
      path: '/asset-rental-info',
      name: 'assetRentalInfo',
      component: AssetRentalInfo,
      meta: { title: '资产租赁情况' },
    },
    {
      path: '/asset-map',
      name: 'assetMap',
      component: AssetMap,
      meta: { title: '资产地图' },
    },
  ],
})

export default router
