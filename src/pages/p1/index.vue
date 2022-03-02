<template>
  <section class="p1">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>星鲨出租玩法极限复投策略简介</span>
            </div>
          </template>
          <p>星鲨出租玩法中，一星鲨鱼一天出租价格设置为15sea，扣除税款后可获得利润14.3625sea。</p>
          <p>本策略中都是基于上述一星鲨鱼进行的，主要策略为每日累计获取利润，每当累计利润可以购买一条新的鲨鱼时则执行购买操作。在实际操作过程中，可能存在额外投入以及利润提现情况，对此也一并计算，将相关参数设定为变量以便调整，从而找到合适自身情况的最佳策略。</p>
        </el-card>
      </el-col>
    </el-row>
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
            <el-form-item label="bnb价格">
              <el-input
                v-model="state.bnb_usdt_price"
                placeholder="Please input"
                :style="{ width: '200px' }"
              >
                <template #append>USDT</template>
              </el-input>
            </el-form-item>
            <el-form-item label="sea价格">
              <el-input v-model="state.sea_usdt_price" placeholder="Please input">
                <template #append>USDT</template>
              </el-input>
            </el-form-item>
            <el-form-item label="鲨鱼价格(bnb)">
              <el-input v-model="state.shark_bnb_price" placeholder="Please input">
                <template #append>BNB</template>
              </el-input>
              <el-input
                :model-value="state.shark_bnb_price * state.bnb_usdt_price"
                placeholder="Please input"
              >
                <template #prepend>折合</template>
                <template #append>USDT</template>
              </el-input>
            </el-form-item>
            <el-form-item label="鲨鱼价格(sea)">
              <el-input v-model="state.shark_sea_price" placeholder="Please input">
                <template #append>BNB</template>
              </el-input>
              <el-input
                :model-value="state.shark_sea_price * state.sea_usdt_price"
                placeholder="Please input"
              >
                <template #prepend>折合</template>
                <template #append>USDT</template>
              </el-input>
            </el-form-item>
            <el-form-item label="每条鲨鱼每天出租收入">
              <el-input v-model="state.sea_profit_per_shark_per_day" placeholder="Please input">
                <template #append>SEA</template>
              </el-input>
              <el-input
                :model-value="state.sea_profit_per_shark_per_day * state.sea_usdt_price"
                placeholder="Please input"
              >
                <template #prepend>折合</template>
                <template #append>USDT</template>
              </el-input>
            </el-form-item>
            <el-form-item label="初始鲨鱼条数">
              <el-input v-model="state.init_shark_count" placeholder="Please input">
                <template #append>条</template>
              </el-input>
            </el-form-item>
            <el-form-item label="初始够买鲨鱼投入">
              <el-input
                :model-value="state.init_shark_count * state.shark_bnb_price * state.bnb_usdt_price"
                placeholder="Please input"
              >
                <template #append>USDT</template>
              </el-input>
            </el-form-item>
            <el-form-item label="每周额外购买鲨鱼投入(usdt)">
              <el-input v-model="state.income_usdt_per_week" placeholder="Please input">
                <template #append>USDT</template>
              </el-input>
            </el-form-item>
            <el-form-item label="每月提现(usdt)">
              <el-input v-model="state.out_usdt_per_month" placeholder="Please input">
                <template #append>USDT</template>
              </el-input>
            </el-form-item>
            <el-form-item label="最少保留鲨鱼条数">
              <el-input v-model="state.min_shark_count" placeholder="Please input">
                <template #append>条</template>
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
          <el-table :data="detailState.list" stripe :max-height="800">
            <el-table-column type="index" width="50" />
            <el-table-column property="date" label="Date" width="100" />
            <el-table-column property="current_shark_count" label="鲨鱼条数" width="80" />
            <el-table-column property="per_day_usdt_profit" label="日租金收入" width="120" />
            <el-table-column property="current_usdt_profit" label="剩余可用" width="120" />
            <el-table-column property="shark_usdt_value" label="鲨鱼价值" width="100" />
            <el-table-column property="out_usdt_profit" label="累计提现" width="80" />
            <el-table-column property="total_income" label="总收入" width="120" />
            <el-table-column property="total_cost" label="总成本" width="100" />
            <el-table-column property="total_profit" label="总利润" width="120" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import moment from 'moment'

const state = reactive({
  bnb_usdt_price: 400,
  sea_usdt_price: 1.7,
  shark_bnb_price: 2,
  shark_sea_price: 500,
  income_usdt_per_week: 1500,
  day_per_week: 7,
  week_per_month: 4,
  month_per_year: 12,
  out_usdt_per_month: 8000,
  init_shark_count: 11,
  sea_profit_per_shark_per_day: 14.3625,
  min_shark_count: 1,
  day_length: 306,
  begin_date: new Date('2022-03-01')
})

const calState = reactive({
  total_cost: 0,
  total_income: 0,
  current_shark_count: 0,
  out_usdt_profit: 0,
  current_usdt_profit: 0,
})

const detailState = reactive({
  list: [] as any[]
})



const f = () => {
  let {
    bnb_usdt_price,
    sea_usdt_price,
    shark_bnb_price,
    shark_sea_price,
    income_usdt_per_week,
    day_per_week,
    week_per_month,
    month_per_year,
    out_usdt_per_month,
    init_shark_count,
    sea_profit_per_shark_per_day,
    min_shark_count,
    day_length,
  } = state;

  bnb_usdt_price = +bnb_usdt_price;
  sea_usdt_price = +sea_usdt_price;
  shark_bnb_price = +shark_bnb_price;
  shark_sea_price = +shark_sea_price;
  income_usdt_per_week = +income_usdt_per_week;
  day_per_week = +day_per_week;
  week_per_month = +week_per_month;
  month_per_year = +month_per_year;
  out_usdt_per_month = +out_usdt_per_month;
  init_shark_count = +init_shark_count;
  sea_profit_per_shark_per_day = +sea_profit_per_shark_per_day;
  min_shark_count = +min_shark_count;
  day_length = +day_length;

  const res = [] as any[];
  let c = 0;
  let d = 0;
  for (let i = 0; i < day_length; i++) {
    c += 1;
    // 变量设定
    let current_shark_count = 0;
    let total_usdt_profit = 0;
    let out_usdt_profit = 0;
    let total_cost = 0;
    let item = {} as any;

    // 当前鲨鱼数量
    if (i === 0) {
      current_shark_count = +init_shark_count;
      total_cost = state.init_shark_count * state.shark_bnb_price * state.bnb_usdt_price;
    } else {
      current_shark_count = res[i - 1].current_shark_count;
      total_usdt_profit = res[i - 1].total_usdt_profit;
      out_usdt_profit = res[i - 1].out_usdt_profit;
      total_cost = res[i - 1].total_cost;
    }

    item.current_shark_count = current_shark_count;
    item.out_usdt_profit = out_usdt_profit;
    item.total_cost = total_cost;

    const is_week_day = c === day_per_week;
    // 更新计数器
    if (is_week_day) {
      item.total_cost = item.total_cost + income_usdt_per_week;
      c = 0;
      d += 1;
    }

    const is_month_day = d === week_per_month;
    if (is_month_day) {
      d = 0;
    }

    const is_add_day = true;
    const is_out_day = is_month_day;

    // 当前总利润
    const today_usdt_profit = current_shark_count * sea_profit_per_shark_per_day * sea_usdt_price + (is_week_day ? income_usdt_per_week : 0);
    item.total_usdt_profit = total_usdt_profit + today_usdt_profit;

    // 求可增加的鲨鱼数量
    let more_usdt_profit = is_out_day ? item.total_usdt_profit - out_usdt_per_month : item.total_usdt_profit;

    const more_bnb_profit = more_usdt_profit / bnb_usdt_price;
    const add_shark_count = Math.floor(more_bnb_profit / shark_bnb_price);

    let temp_add_shark_count = 0;

    // 更新鲨鱼数量和总利润
    if (is_add_day && add_shark_count >= 1) {
      temp_add_shark_count = add_shark_count;
      item.current_shark_count = current_shark_count + add_shark_count;
      item.total_usdt_profit = item.total_usdt_profit - add_shark_count * shark_bnb_price * bnb_usdt_price;
      item.add = {
        prev: current_shark_count,
        add: add_shark_count,
        next: item.current_shark_count
      }
    }

    if (is_out_day) {
      // 求需要卖掉的鲨鱼数量
      if (item.total_usdt_profit < out_usdt_per_month) {
        const sale_shark_count = Math.ceil((out_usdt_per_month - item.total_usdt_profit) / shark_bnb_price / bnb_usdt_price);
        if (item.current_shark_count - min_shark_count < sale_shark_count) {
          throw new Error(`鲨鱼数量不足，仅有${item.current_shark_count}条，需至少保留${min_shark_count}条，无法卖出${sale_shark_count}条`)
        }
        item.current_shark_count = item.current_shark_count - sale_shark_count;
        item.total_usdt_profit = item.total_usdt_profit + sale_shark_count * shark_bnb_price * bnb_usdt_price;
        item.add = {
          prev: item.current_shark_count + sale_shark_count,
          add: sale_shark_count * -1,
          next: item.current_shark_count
        }
      }

      item.total_usdt_profit = item.total_usdt_profit - out_usdt_per_month;
      item.out_usdt_profit = out_usdt_profit + out_usdt_per_month;
    }
    res.push(item);
  }

  return res;
}

const handleClick = () => {
  try {
    const res = f()
    console.log(res)
    const newRes = res.map((item, idx) => {
      let tempItem = {
        ...item,
        current_usdt_profit: item.total_usdt_profit.toFixed(0),
        total_income: (item.out_usdt_profit + item.total_usdt_profit + item.current_shark_count * state.shark_bnb_price * state.bnb_usdt_price).toFixed(0),
        date: moment(state.begin_date).add(idx, 'days').format('L'),
        per_day_usdt_profit: (item.current_shark_count * state.sea_profit_per_shark_per_day * state.sea_usdt_price).toFixed(0),
        shark_usdt_value: (item.current_shark_count * state.shark_bnb_price * state.bnb_usdt_price).toFixed(0)
      }
      tempItem.total_profit = (tempItem.total_income - tempItem.total_cost).toFixed(0);
      return tempItem;
    })
    detailState.list = newRes;
    const lastItem = res[res.length - 1];
    calState.current_shark_count = lastItem.current_shark_count;
    calState.current_usdt_profit = lastItem.total_usdt_profit;
    calState.out_usdt_profit = lastItem.out_usdt_profit;
    calState.total_cost = lastItem.total_cost;
    calState.total_income = lastItem.out_usdt_profit + lastItem.total_usdt_profit + lastItem.current_shark_count * state.shark_bnb_price * state.bnb_usdt_price;
  } catch (e) {
    console.error(e)
  }
}

handleClick()

</script>
<style lang="less" scoped>
.p1 {
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

  .cal-box-list {
    display: flex;
  }
  .cal-box-item {
    flex: 1;
  }
}
</style>
