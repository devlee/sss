<template>
  <section class="p2">
    <el-row :gutter="16">
      <el-col :span="24">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>变量设置</span>
              <el-button type="primary" class="btn-set" @click="handleClick">应用设置</el-button>
            </div>
          </template>
          <el-form size="small" :model="state" label-position="right" label-width="200px" inline>
            <el-form-item label="4小时利率">
              <el-input v-model="state.rate_per_4_hours" placeholder="Please input">
                <template #append>USDT</template>
              </el-input>
            </el-form-item>
            <el-form-item label="初始数量">
              <el-input v-model="state.begin_count" placeholder="Please input">
                <template #append>个</template>
              </el-input>
            </el-form-item>
            <el-form-item label="极限复投策略天数">
              <el-input v-model="state.day_length" placeholder="Please input">
                <template #append>天</template>
              </el-input>
            </el-form-item>
            <el-form-item label="开始日期">
              <el-date-picker v-model="state.begin_date" type="date" placeholder="Pick a day"></el-date-picker>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>收益详解</span>
            </div>
          </template>
          <el-table :data="state2.list" stripe :max-height="800">
            <el-table-column type="index" width="50" />
            <el-table-column property="date" label="Date" width="100" />
            <el-table-column property="current" label="当前数量" width="120" />
            <el-table-column property="income_per_4_hours_1" label="00:00" width="100" />
            <el-table-column property="income_per_4_hours_2" label="04:00" width="100" />
            <el-table-column property="income_per_4_hours_3" label="08:00" width="100" />
            <el-table-column property="income_per_4_hours_4" label="12:00" width="100" />
            <el-table-column property="income_per_4_hours_5" label="16:00" width="100" />
            <el-table-column property="income_per_4_hours_6" label="20:00" width="100" />

            <el-table-column property="income_per_day" label="每日收入" width="120" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import moment from 'moment'

import { useStorage } from '@vueuse/core'
import { reactive } from 'vue';


const state = useStorage('xx-state', {
  rate_per_4_hours: 0.003,
  begin_count: 1670000,
  day_length: 365,
  begin_date: new Date()
})

const state2 = reactive({
  list: [] as any[]
})

const handleClick = () => {
  try {
    const rate = 1 + state.value.rate_per_4_hours;
    const rate1 = rate ** 1 - 1;
    const rate2 = rate ** 2 - 1;
    const rate3 = rate ** 3 - 1;
    const rate4 = rate ** 4 - 1;
    const rate5 = rate ** 5 - 1;
    const rate6 = rate ** 6 - 1;
    state2.list = Array.from({ length: state.value.day_length }).map((item, idx) => {
      const current = state.value.begin_count * (rate ** (idx * 6));
      const income_per_4_hours_1 = current * rate1;
      const income_per_4_hours_2 = current * rate2 - income_per_4_hours_1;
      const income_per_4_hours_3 = current * rate3 - income_per_4_hours_1 - income_per_4_hours_2;
      const income_per_4_hours_4 = current * rate4 - income_per_4_hours_1 - income_per_4_hours_2 - income_per_4_hours_3;
      const income_per_4_hours_5 = current * rate5 - income_per_4_hours_1 - income_per_4_hours_2 - income_per_4_hours_3 - income_per_4_hours_4;
      const income_per_4_hours_6 = current * rate6 - income_per_4_hours_1 - income_per_4_hours_2 - income_per_4_hours_3 - income_per_4_hours_4 - income_per_4_hours_5;
      const income_per_day = income_per_4_hours_1 + income_per_4_hours_2 + income_per_4_hours_3 + income_per_4_hours_4 + income_per_4_hours_5 + income_per_4_hours_6
      return {
        date: moment(state.value.begin_date).add(idx, 'days').format('L'),
        current: Math.floor(current),
        income_per_4_hours_1: Math.floor(income_per_4_hours_1),
        income_per_4_hours_2: Math.floor(income_per_4_hours_2),
        income_per_4_hours_3: Math.floor(income_per_4_hours_3),
        income_per_4_hours_4: Math.floor(income_per_4_hours_4),
        income_per_4_hours_5: Math.floor(income_per_4_hours_5),
        income_per_4_hours_6: Math.floor(income_per_4_hours_6),
        income_per_day: Math.floor(income_per_day)
      }
    })
  } catch (e) {
    console.error(e)
  }
}

handleClick()


</script>
<style lang="less" scoped>
.p2 {
  padding: 20px;
  .el-row {
    margin-bottom: 16px;
  }
  .el-card {
    border: 0;
  }
  :deep(.el-card__header) {
    border: 0;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  :deep(.el-input) {
    width: 200px;
  }
  .box-card {
    height: 100%;
  }
  .btn-set {
    float: right;
    margin-top: -6px;
  }
}
</style>
