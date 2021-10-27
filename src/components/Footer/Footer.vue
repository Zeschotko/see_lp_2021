<template lang="pug">
    #footer
        p {{year}} Copyright - Todos os direitos reservados.
</template>

<script>
export default {
    name: "component-footer",
    data() {
        return {
            year: 2021
        }
    },
    mounted() {
        let today = new Date()
        this.year = today.getFullYear()
    }
}
</script>

<style lang="stylus" scoped src="./Footer.styl"></style>