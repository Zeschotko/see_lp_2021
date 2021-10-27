<template lang="pug">
    section#quemSomos
        h2 Quem somos
        p.texto
            |Somos o resultado da fusão de duas grandes empresas na área da construção civil: Soma Service Fire e Edifique Planejamento e Construção.
            br
            |Atuamos no setor da construção civil, com pequenas, médias e grandes obras. Trabalhamos com todos os públicos, sejam eles: Empresas, indústrias ou residências.
            br
            |Realizamos  gerenciamento de obras, desde o projeto até a construção de novas edificações.
            br
            |Confeccionamos laudos para o corpo de bombeiros, laudos civis, elétricos e vistorias técnicas.
        ul.cards
            li.card(v-for="card, index in cards", :class="{'ativo': ativo == index}", @click="flipCard(index)")
                .flip
                    .front
                        h3 {{card.titulo}}
                    .back
                        p(v-html="card.texto")

</template>

<script>
export default {
    name: "section-quem-somos",
    data() {
        return {
            ativo: null,
            cards: [
                {
                    titulo: 'Missão',
                    texto: 'Atuar com soluções para gestão de obras, através do gerenciamento inteligente e responsável; atingir metas e cumprir prazos, otimizando os recursos necessários para o excelente desenvolvimento de obras e edificações civis.'
                },
                {
                    titulo: 'Visão',
                    texto: 'Ser referência em gestão de obras e atividades operacionais da construção civil, através da eficiência e eficácia na prestação de serviços. Melhorar e preservar as condições do meio ambiente, saúde, acessibilidade e segurança para contribuir com a boa qualidade de vida das próximas gerações.'
                },
                {
                    titulo: 'Valores',
                    texto: 'Excelência<br>Ordem<br>Inovação<br>parceria<br>pontualidade<br>responsabilidade'
                },
            ]
        }
    },
    methods: {
        flipCard(index){
            if(this.ativo == index)
                this.ativo = null
            else
                this.ativo = index
        }
    }
}
</script>

<style lang="stylus" scoped src="./QuemSomos.styl"></style>