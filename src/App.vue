<template>
  <div id="app">
		<form-balance @submitForm="onSubmit" />
		<total-balance :total="totalBalance" />
    <budget-list :list="list" @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from './components/BudgetList.vue'
import TotalBalance from './components/TotalBalance.vue'
import FormBalance from './components/FormBalance.vue'

export default {
  name: 'App',
  components: {
		BudgetList,
		TotalBalance,
		FormBalance,
  },
	data:() => ({
		list: {
			1: {
				type: 'income',
				value: 100,
				comment: 'Some comment',
				id: 1
			},
			2: {
				type: 'outcome',
				value: 50,
				comment: 'Some outcome comment',
				id: 2
			}
		},
	}),
	computed: {
		totalBalance() {
			return Object.values(this.list).reduce((acc, item) => {
				if (item.type === 'outcome' && item.value > 0) {
					return acc - item.value
				} else {
					return acc + item.value
				}
			}, 0)
		},
	},
	methods: {
		onDeleteItem(id) {
			this.$delete(this.list, id)
		},
		onSubmit(data) {
			const newObj = {
				...data,
				id: String(Math.round(Math.random()*100))
			};
			this.$set(this.list, newObj.id, newObj)
		}
	}
}
</script>

<style>
body {
	background: #ccc;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
	text-align: center;
}
</style>
