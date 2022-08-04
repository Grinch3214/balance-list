<template>
  <div>
		<div class="filter-list">
    <el-radio-group v-model="labelSort" size="mini">
      <el-radio-button label="all"></el-radio-button>
      <el-radio-button label="income"></el-radio-button>
      <el-radio-button label="outcome"></el-radio-button>
    </el-radio-group>
  </div>
    <div class="list-item" v-for="(item, prop) in sortBalanceList" :key="prop">
      <span class="budget-comment">{{ item.comment }}</span>
      <span
				class="budget-value"
				:class="{'positive-balance': isPositiveBalance(item.type),
				'negative-balance': isNegativeBalance(item.type)}"
			>
				{{ item.value }}
				<i v-if="item.type === 'income'" class="el-icon-top"></i>
				<i v-if="item.type === 'outcome'" class="el-icon-bottom"></i>
			</span>
			<el-button @click="confimForDelete(item.id)" type="danger" size="mini">
        Delete
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "BudgetListItem",
  data: () => ({
		labelSort: 'all',
	}),
	computed: {
		...mapGetters(['testList']),
		sortBalanceList() {
			return Object.values(this.testList).filter(elem => {
				if (elem.type === this.labelSort) {
					return elem.type === this.labelSort
				} else if (this.labelSort === 'all') {
					return elem
				}
			})
		},
	},
  methods: {
		...mapActions(['deleteItem']),
		confimForDelete(id) {
			if(confirm('Are you sure? ')) {
				return this.deleteItem(id)
			} else {
				return false
			}
		},
		isPositiveBalance(item) {
			return item === 'income'
		},
		isNegativeBalance(item) {
			return item === 'outcome'
		}
  },
};
</script>

<style>
div.el-dialog--center .el-dialog__body {
	text-align: center;
}
</style>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin: 0 20px 0 auto;
}
.positive-balance {
	color: green;
}
.negative-balance {
	color: red;
}
</style>