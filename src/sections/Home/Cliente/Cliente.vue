<template lang="pug">
    section#cliente
        h2 Nossos Clientes
        ul
            li
                img(:src="require('@images/clientes/sabesp.png')")
            li
                img(:src="require('@images/clientes/bic.png')")
            li
                img(:src="require('@images/clientes/logo_dam.png')")
            li
                img(:src="require('@images/clientes/arquidiocese.png')")
            li
                img(:src="require('@images/clientes/logo-copafer.png')")
</template>

<script>
export default {
    name: "section-cliente",
}
</script>

<style lang="stylus" scoped src="./Cliente.styl"></style>