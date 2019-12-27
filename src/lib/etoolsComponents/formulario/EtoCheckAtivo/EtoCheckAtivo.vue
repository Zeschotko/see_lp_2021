<template lang="pug">
	div.checkbox
		span {{ $props.nomeCheckbox }}
		label
			input(
				type='checkbox', 
				@change="$emit('update:checkboxValue', checkValue); $emit('change')",
				:disabled="$props.disabledCheckbox",
				v-model='checkValue')
			i
</template>

<script>
export default {
	props: {
		nomeCheckbox: {
			type: String,
			required: true
		},
		disabledCheckbox: Boolean,
		checkboxValue: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			checkValue: false
		};
	},
	created() {
		this.checkValue = this.$props.checkboxValue;
	},
	watch: {
		'$props.checkboxValue': function() {
			this.checkValue = this.$props.checkboxValue;
		}
	}
};
</script>

<style lang="stylus" scoped src="./EtoCheckAtivo.styl"></style>
