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
                    titulo: 'Projetos',
                    items: [
                        "Projeto de Edificações;",
                        "Projeto de Arquitetura;",
                        "Projeto de ventilação e ar condicionado;",
                        "Projeto Elétrico;",
                        "Projeto de tubulações;",
                        "Projeto Fotovoltaico."
                    ]
                },
                {
                    titulo: 'Construção Civil',
                    items: [
                        "Fundações;",
                        "Pavimentação;",
                        "Estrutura de Concreto;",
                        "Estrutura Metálica;",
                        "Instalação elétrica;",
                        "Instalação hidrossanitária;",
                        "Instalação hidráulica e de reuso;",
                        "Acabamento depisos, paedes, forros, tetos, esquadrias, fachadas, etc...;",
                        "Reformas em residências, condomínios, comércios e industrias;",
                    ]
                },
                {
                    titulo: 'Gestão de Obras',
                    items: [
                        "Estudo de viabilidade;",
                        "Orçamento;",
                        "Estudo Temporal;",
                        "Certidões iniciais;",
                        "Preparação de canteiros;",
                        "Desenvolvimento de cronograma de construção;",
                        "Gerenciamento logístico e operacional;",
                        "Administração diária de obras.",
                    ]
                },
                {
                    titulo: 'Laudos e Vistorias',
                    items: [
                        "AVCB (Auto de Vistoria do Corpo de Bombeiros);",
                        "CLCB (Certificado de Licença do Corpo de Bombeiroas);",
                        "ART (Anotação de Responsabilidade Técnica)."
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped src="./Servicos.styl"></style>