import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	
  state: {
		lists: {
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
		labelSort: 'all',
	},
  getters: {
		testList: ({lists}) => lists,
		totalBalanceList: ({ lists }) => Object.values(lists).reduce((acc, item) => {
			if (item.type === 'outcome' && item.value > 0) {
				return acc - item.value
			} else {
				return acc + item.value
			}
		}, 0),
	},
  mutations: {
		ADD_BALANCE(state, transaction) {
			Vue.set(state.lists, transaction.id, transaction)
		},
		DELETE_ITEM(state, id) {
			Vue.delete(state.lists, id)
		}
	},
  actions: {
		addNewTransaction({ commit }, transaction) {
			const newTransaction = { ...transaction, id: String(Math.random()) }
			commit('ADD_BALANCE', newTransaction)
		},
		deleteItem({ commit }, id) {
			commit('DELETE_ITEM', id)
		}
	}
})
