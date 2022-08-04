<template>
  <div id="app">
		<form-balance />
		<total-balance />
    <budget-list />
  </div>
</template>

<script>
import BudgetList from './components/BudgetList.vue'
import TotalBalance from './components/TotalBalance.vue'
import FormBalance from './components/FormBalance.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
		BudgetList,
		TotalBalance,
		FormBalance,
  },
	data:() => ({}),
	computed: {
		...mapGetters(['totalBalanceList']),
	},
	methods: {
		// onDeleteItem(id) {
		// 	this.$delete(this.list, id)
		// },
		// onSubmit(data) {
		// 	const newObj = {
		// 		...data,
		// 		id: String(Math.round(Math.random()*100))
		// 	};
		// 	this.$set(this.list, newObj.id, newObj)
		// }
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
