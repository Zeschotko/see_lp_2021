<template lang="pug">
    #header(:class="{'ativo': menuAtivo}")
        h1 Soma e Edifique | Engenharia Elétrica e Civil
            img(:src="require('@images/logo.png')")
        button(@click="toggleMenu()").menu
            i.first
            i.second
        ul.nav
            li
                button(@click="scrollTo('#banner')") Home
            li
                button(@click="scrollTo('#servicos')") Serviços
            li
                button(@click="scrollTo('#quemSomos')") Quem Somos
            li
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
        toggleMenu() {
            this.menuAtivo = !this.menuAtivo
        },
        fecharMenu() {
            this.menuAtivo = false
        },
        scrollTo(target, offset = 0) {
            const element = document.querySelector(target)
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - offset,
                    left: 0,
                    behavior: 'smooth'
                })
            }
            this.menuAtivo = false
        }
    }
}
</script>

<style lang="stylus" scoped src="./Header.styl"></style>