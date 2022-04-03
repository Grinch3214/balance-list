<template>
  <el-card class="form-card">
		<el-form :model="formData" ref="addItemForm" :rules="rules" label-position="left">
			<el-form-item label="Type" prop="type">
				<el-select class="type-select" v-model="formData.type" placeholder="Choose type...">
					<el-option label="Income" value="income"></el-option>
					<el-option label="Outcome" value="outcome"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="Comment" prop="comment">
				<el-input v-model="formData.comment"></el-input>
			</el-form-item>
			<el-form-item label="Value" prop="value">
				<el-input v-model.number="formData.value"></el-input>
			</el-form-item>
			<el-button @click="onSubmit" type="primary">Submit</el-button>
		</el-form>
	</el-card>
</template>

<script>
export default {
	name: 'FormBalance',
	data() {
		const checkValue = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('Please input the value'))
			}
			if(!Number.isInteger(value)) {
				callback(new Error('Please input digits'))
			} else {
				if (value < 0) {
					callback(new Error('Value must be greater than 0'))
				} else {
					callback()
				}
			}
		}
		return {
			formData: {
				type: 'income',
				comment: '',
				value: 0
			},
			rules: {
				type: [{ required: true, message: 'Please select type', trigger: 'blur' }],
				comment: [{ required: true, message: 'Please input comment', trigger: 'blur' }],
				value: [
					{ required: true, message: 'Please input value', trigger: 'change' },
					{ type: 'number', message: 'Value must be a number', trigger: 'change' },
					{ validator: checkValue, trigger: 'blur' }
				],
			}
		}
	},
	methods: {
		onSubmit() {
			this.$refs.addItemForm.validate((valid) => {
				if (valid) {
					this.$emit('submitForm', {...this.formData})
					this.$refs.addItemForm.resetFields()
				}
			})
		}
	}
}
</script>

<style scoped>
.form-card{
	max-width: 600px;
	margin: 0 auto;
}
.type-select {
	width: 100%;
}
</style>