<template lang="pug">
	div.input(:class="{ 'search': $props.type.toLowerCase() == 'search' }")
		label(:for="nameComp", :class="{ 'ativo': labelAtivo }") {{ label }}
		input(v-if="$props.mask",
			:type="$props.type", 
			:id="nameComp", 
			:name="nameComp", 
			v-model="value", 
			@input="$emit('update:customValue', value)",
			@focus="labelAtivo = true",
			@blur="blurAtivo()",
			:disabled="$props.disabled",
			autocomplete="off",
			v-mask="$props.mask")
		input(v-else,
			:type="$props.type", 
			:id="nameComp", 
			:name="nameComp", 
			v-model="value", 
			@input="$emit('update:customValue', value)",
			@focus="labelAtivo = true",
			@blur="blurAtivo()",
			:disabled="$props.disabled",
			autocomplete="off")
		button(@click="$emit('doSearch', $event)", v-if="$props.type.toLowerCase() == 'search'")
			i.material-icons search
		span.message {{ message }}
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
	directives: {mask},
	props: {
		customValue: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			required: true
		},
		customMessage: String,
		label: {
			type: String,
			required: true
		},
		mask:{
			default: ''
		},
		disabled: Boolean,
		type: {
			type: String,
			default: 'text',
			validator: function(val) {
				return (
					[
						"text",
						"tel",
						"email",
						"password",
						"number",
						"search",
						"url"
					].indexOf(val) !== -1
				);
			}
		}
	},
	data() {
		return {
			value: "",
			message: "",
			labelAtivo: false
		};
	},
	computed: {
		nameComp: function() {
			if (this.$props.name.search(/^input_/) > 0)
				return this.$props.name;
			return `input_${this.$props.name}`;
		},
	},
	created() {
		this.value = this.$props.customValue;
		this.message = this.$props.customMessage;
		if (this.value) this.labelAtivo = true;
	},
	watch: {
		'$props.customValue': function() {
			this.value = this.$props.customValue;
			if (this.value) this.labelAtivo = true;
		},
		'$props.customMessage': function() {
			this.message = this.$props.customMessage;
		}
	},
	methods: {
		blurAtivo() {
			!this.value ? this.labelAtivo = false : this.labelAtivo = true
			this.$emit('blur')
		}
	},
};
</script>

<style lang="stylus" scoped src="./EtoInput.styl"></style>
