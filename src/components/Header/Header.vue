<template lang="pug">
    #header
        h1 Soma e Edifique | Engenharia Elétrica e Civil
            img(:src="require('@images/logo.png')")
        button(@click="openMenu()").menu
        ul.nav
            li(@click="fecharMenu()")
                button(@click="scrollTo('#banner')") Home
            li(@click="fecharMenu()")
                button(@click="scrollTo('#servicos')") Serviços
            li(@click="fecharMenu()")
                button(@click="scrollTo('#quemSomos')") Quem Somos
            li(@click="fecharMenu()")
                button(@click="scrollTo('#contato')") Contato
</template>

<script>
export default {
    name: "component-header",
    data() {
        return {
            menuAtivo: false
        }
    },
    methods: {
        fecharMenu() {
            this.menuAtivo = false
        },
        scrollTo(target, offset = 0) {
            const element = document.querySelector(target)
            if (element) {
                window.scrollTo(element.offsetLeft - offset, 0)
            }
        },
    }
}
</script>

<style lang="stylus" scoped src="./Header.styl"></style>