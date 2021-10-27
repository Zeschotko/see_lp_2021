<template lang="pug">
    section#servicos
        h2 Serviços
        ul.cards
            li.card(v-for="servico, index in servicos")
                h3 {{servico.titulo}}
                ul.itens
                    li.item(v-for="item in servico.items")
                        | {{item}}

</template>

<script>
export default {
    name: "section-servicos",
    data() {
        return {
            servicos: [
                {
                    titulo: 'Vistorias e Laudos Técnicos',
                    items: [
                        "Laudo Elétrico;",
                        "Laudo Civil;",
                        "Laudo Pericial;",
                        "AVCB (Auto de Vistoria do Corpo de Bombeiros);",
                        "CLCB (Certificado de Licença do Corpo de Bombeiroas);",
                        "ART (Anotação de Responsabilidade Técnica).",
                    ]
                },
                {
                    titulo: 'Manutenção Elétrica',
                    items: [
                        "Reformas em quadros de energia e padrões;",
                        "Reparos e instalação de todo sistema elétrico;",
                        "SPDA (Sistema de Proteção Contra Descargas Atmosféricas). Para raios, vistorias e certificações.",
                    ]
                },
                {
                    titulo: 'Manutenção Hidráulica',
                    items: [
                        "Limpeza de reservatório de água;",
                        "Individualização de água;",
                        "Reparo em vazamentos;",
                        "Impermeabilizações;",
                        "Instalações hidrossanitárias;",
                        "Tubulações de águas quente e fria;",
                        "Projetos hidráulicos.",
                    ]
                },
                {
                    titulo: 'Pintura e Alvenaria',
                    items: [
                        "Pintura em geral;",
                        "Construção de fundações;",
                        "Instalação de contrapisos;",
                        "Construção de paredes e muros;",
                        "Instalação de revestimentos (todos os tipos);",
                        "Acabamentos em massa (reboco, fina e textura);",
                        "Planejamento e execução de obras e reformas.",
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped src="./Servicos.styl"></style>