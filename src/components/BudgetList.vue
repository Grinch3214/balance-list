<template>
	<div class="budget-list-wrap">
		<el-card :header="title">
			<template v-if="!isEmpty">
				<budget-list-item :list="list" @deleteItem="deleteItem" />
			</template>
			<el-alert
				v-else type="info"
				:closable="false"
				:title="alertTitle"
			/>
		</el-card>
	</div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem.vue'

export default {
	name: 'BudgetList',
	components: {
		BudgetListItem,
	},
	props: {
		list: {
			type: Object,
			default:() => ({}),
		},
	},
	data:() => ({
		title: 'Budget List',
		alertTitle: 'Empty list',
	}),
	computed: {
		isEmpty() {
			return !Object.keys(this.list).length
		}
	},
	methods: {
		deleteItem(id) {
			this.$emit('deleteItem', id)
		},
	}
}
</script>

<style scoped>
.budget-list-wrap {
	max-width: 600px;
	margin: 0 auto;
}
.list-item {
	display: flex;
	align-items: center;
	padding: 10px 15px;
}
.budget-value {
	font-weight: bold;
	margin: 0 20px 0 auto;
}
</style>