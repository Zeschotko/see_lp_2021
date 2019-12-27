<template lang="pug">
	div.button(:class="{'animate': $props.icon, 'action': $props.buttonAction}", :data-tooltip="$props.tooltip")
		button(:type="$props.type", :disabled="$props.disabled", ref="button", @click="$emit('click', $event)", v-if='$props.buttonAction').action
			img(:src='$props.icon')
		button(:type="$props.type", :disabled="$props.disabled", ref="button", @click="$emit('click', $event)", v-else)
			span.texto {{ $props.text }}
</template>

<script>
export default {
	props: {
		tooltip: {
			type: String,
		},
		type: {
			type: String,
			default: 'button',
			validator: function(val) {
				return ["submit", "reset", "button"].indexOf(val) !== -1;
			}
		},
		buttonAction: {
			type: Boolean,
			default: false,
		},
		disabled: Boolean,
		text: {
			type: String,
			default: "Enviar"
		},
		icon: String
	},
	mounted() {
		if(!this.$props.buttonAction){
			if (this.$props.icon)
				this.$refs.button.style.backgroundImage = `url(${this.$props.icon})`;
		}
	}
};
</script>

<style lang="stylus" scoped src="@lib/etoolsComponents/formulario/EtoButton/EtoButton.styl"></style>
