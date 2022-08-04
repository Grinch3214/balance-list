<template>
	<div
		class="total-value"
		:class="{'negative-balance': isNegativeTotalBalance,
		'positive-balance': isPositiveTotalBalance,
		'neutral-balance': isNetralTotalBalance}"
	>
		Balance: {{ totalBalanceList }}
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'TotalBalance',
	computed: {
		...mapGetters(['totalBalanceList']),
		isNegativeTotalBalance() {
			return this.total < 0
		},
		isPositiveTotalBalance() {
			return this.total > 0
		},
		isNetralTotalBalance() {
			return this.total === 0
		}
	},
}
</script>

<style scoped>
.total-value {
	font-size: 26px;
	text-transform: uppercase;
	padding: 20px;
	text-align: center;
}
.neutral-balance {
	color: black;
}
.negative-balance {
	color: red;
}
.positive-balance {
	color: green;
}
</style>