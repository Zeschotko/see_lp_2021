<template lang="pug">
    transition(name="mensagem")
        div.mensagem(v-if="ativo", :class="classCard")
            p {{ mensagemCard }}
</template>

<script>
export default {
    data() {
        return {
            mensagens: {
                sucesso: "Salvo com sucesso.",
                erro: "Ocorreu um erro ao salvar.",
                aviso: ""
            },
            mensagemCard: '',
            ativo: false,
            classCard: ''
        }
    },
    methods: {
        showSucesso(mensagem = '') {
            this.mensagemCard = mensagem || this.mensagens.sucesso;
            this.classCard = 'success';
            this.ativo = true;
        },
        showErro(mensagem = '') {
            this.mensagemCard = mensagem || this.mensagens.erro;
            this.classCard = 'error';
            this.ativo = true;
        },
        showAviso(mensagem = '') {
            this.mensagemCard = mensagem || this.mensagens.erro;
            this.classCard = 'warning';
            this.ativo = true;
        },
        hide() {
            this.ativo = false;
            this.classCard = '';
        },
        toTop(scrollDuration = 300) {
            let mainContent = document.querySelector('.mainContent .content');
            let scrollStep = -mainContent.scrollTop / (scrollDuration / 15);
            let scrollInterval = setInterval(() => {
                if ( mainContent.scrollTop != 0 )
                    mainContent.scrollBy( 0, scrollStep );
                else 
                    clearInterval(scrollInterval); 
            }, 15);
        }
    }
};
</script>

<style lang="stylus" scoped src="./EtoMensagem.styl"></style>
