<template lang="pug">
	div.select
		multiselect(
			:value="$emit('update:sValue', value)",
			v-model="value",
			:options="options", 
			:close-on-select="true", 
			:allowEmpty="$props.empty",
			:searchable="$props.sSearchable", 
			:track-by="$props.sTrack", 
			:label="$props.sLabel",
			:placeholder="$props.sPlaceholder",
			:selectLabel="$props.selectLabel",
			:deselectLabel="$props.deselectLabel",
			:selectedLabel="$props.selectedLabel",
			:name="$props.name",
			:multiple="$props.multiple"
			:selectGroupLabel="$props.selectGroupLabel",
			:deselectGroupLabel="$props.deselectGroupLabel",
			:showLabels="$props.showLabels",
			:limit="$props.limit",
			:maxHeight="$props.maxHeight",
			:limitText="$props.limitText",
			:loading="$props.loading",
			:openDirection="$props.openDirection",
			:showNoOptions="$props.showNoOptions",
			:showNoResults="$props.showNoResults",
			:tabindex="$props.tabindex",
			:disabled="$props.disabled",
			@select="$emit('change', $event)",
			@remove="$emit('remove', $event)",
			@close="blurAtivo()")
			
			template(v-slot:noResult) Nenhum elemento encontrado.
			template(v-slot:noOptions) Lista vazia.
		span.message {{ message }}
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
	props: {
		selectMessage: String,
		multiple: {
			type: Boolean,
			default: false,
		},
		sValue: {
			type: null,
			default() {
				return [];
			}
		},
		sSearchable: {
			type: Boolean,
			default: true
		},
		sOptions: {
			type: Array,
			default: () => []
		},
		sTrack: {
			type: String,
			default: ""
		},
		sLabel: {
			type: String,
			default: ""
		},
		sPlaceholder: {
			type: String,
			default: "Selecione uma opção"
		},
		name: {
			type: String,
			default: ""
		},
		selectLabel: {
			type: String,
			default: ""
		},
		selectGroupLabel: {
			type: String,
			default: ""
		},
		selectedLabel: {
			type: String,
			default: "Selecionado"
		},
		deselectLabel: {
			type: String,
			default: ""
		},
		deselectGroupLabel: {
			type: String,
			default: ""
		},
		showLabels: {
			type: Boolean,
			default: true
		},
		limit: {
			type: Number,
			default: 99999
		},
		maxHeight: {
			type: Number,
			default: 300
		},
		limitText: {
			type: Function,
			default: count => `and ${count} more`
		},
		loading: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		openDirection: {
			type: String,
			default: "bottom"
		},
		showNoOptions: {
			type: Boolean,
			default: true
		},
		showNoResults: {
			type: Boolean,
			default: true
		},
		tabindex: {
			type: Number,
			default: 0
		},
		empty: {
			type: Boolean,
			default: false
		}
	},
	components: {
		Multiselect
	},
	computed: {
		options: function() {
			return this.$props.sOptions;
		}
	},
	data() {
		return {
			value: null,
			labelAtivo: false,
			message: ''
		};
	},
	created() {
		// if(typeof this.$props.sValue === "object" && Object.entries(this.$props.sValue).length > 0)
			this.value = this.$props.sValue;
		this.message = this.$props.selectMessage;
	},
	watch: {
		'$props.sValue': function() {
			this.value = this.$props.sValue;
		},
		'$props.selectMessage': function() {
			this.message = this.$props.selectMessage;
		}
	},methods:{
		blurAtivo(){
			this.$emit('blur')
		}
	}
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="stylus" src="./EtoSelect.styl"></style>
