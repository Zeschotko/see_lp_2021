<template lang="pug">
    article#home
        Header
        Banner
        Servicos
        Imagem
        QuemSomos
        Contato
        Footer
        Whatsapp
</template>

<script>
import Banner from '@sections/Home/Banner/Banner'
import Servicos from '@sections/Home/Servicos/Servicos'
import QuemSomos from '@sections/Home/QuemSomos/QuemSomos'
import Contato from '@sections/Home/Contato/Contato'
import Header from '@components/Header/Header'
import Imagem from '@components/Imagem/Imagem'
import Footer from '@components/Footer/Footer'
import Whatsapp from '@components/Whatsapp/Whatsapp'

export default {
    name: "view-home",
    components: {
        Header,
        Banner,
        Servicos,
        Imagem,
        QuemSomos,
        Contato,
        Footer,
        Whatsapp
    }
}
</script>

<style lang="stylus" scoped src="./Home.styl"></style>