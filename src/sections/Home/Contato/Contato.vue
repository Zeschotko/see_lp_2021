<template lang="pug">
    section#contato
        h2 Contato
        .container
            //- form
                .group
                    input(id="nome", v-model="form.nome" :class="{'notEmpty': form.nome && form.nome != ''}")
                    label(for="nome" ) Nome Sobrenome
                    span erro
                .group
                    input(id="email", v-model="form.email" :class="{'notEmpty': form.email && form.email != ''}")
                    label(for="email") Email
                    span erro
                .group
                    input(id="celular", v-model="form.celular" :class="{'notEmpty': form.celular && form.celular != ''}")
                    label(for="celular") Celular
                    span erro
                .group
                    textarea(id="mensagem", v-model="form.mensagem" :class="{'notEmpty': form.mensagem && form.mensagem != ''}")
                    label(for="mensagem") Mensagem
                    span erro
                button(type="submit", v-html="textButton", ref="btnEnviar")
            .infos
                h4 Telefone e Whatsapp
                a(href="https://wa.me/5511991521367", target="_blank").telefone
                    img(:src="require('@images/icons/whatsapp.png')")
                    span (11) 99152-1367 - Projetos, Laudos Civis, AVCB e CLCB, Obras e Reformas
                a(href="https://wa.me/5511949745230", target="_blank")
                    img(:src="require('@images/icons/whatsapp.png')")
                    span (11) 94974-5230 - Elétrica, Sistemas Fotovoltaico, Laudos de Elétrica e Para Raios
                h4 E-mail
                a(href="mailto:contato@somaedifique.com.br")
                    img(:src="require('@images/icons/mail.png')")
                    span contato@somaedifique.com.br
                h4 Horário de Funcionamento
                p
                    img(:src="require('@images/icons/clock.png')")
                    span
                        |Segunda a Sexta, das 8h às 18h.
                        br
                        |Sábado, das 8h às 12h.
            
</template>

<script>
export default {
    name: "section-contato",
    data() {
        return {
            form: {
                nome: null,
                email: null, 
                celular: null,
                mensagem: null
            },
            textButton: 'Enviar',
            errors: {},
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        // sendForm() {
		// 	this.$refs.btnEnviar.setAttribute("disabled", "disabled");
		// 	this.mensagem = "Enviando";
		// 	if(this.form.entraremcontato)
		// 		this.form.contatar = "sim"
		// 	else
		// 		this.form.contatar = "não"

		// 	this.$axios.post(`${this.publicPath}send_mail.php`, qs.stringify(this.form))
		// 		.then(() => {
		// 			this.mensagem = "Enviado com sucesso!";
		// 			this.$refs.btnEnviar.removeAttribute("disabled");
		// 			this.form.nome = "";
		// 			this.form.email = "";
		// 			this.form.telefone = "";
		// 			this.form.entraremcontato = false;
		// 		})
		// 		.catch(error => {
		// 			this.mensagem = "Enviar";
		// 			if (error.response.status == 422) {
		// 				this.errors = error.response.data.errors;
		// 			}
		// 		})
		// 		.finally(() => {
		// 			this.$refs.btnEnviar.removeAttribute("disabled");
		// 			setTimeout(() => {
		// 				this.mensagem = "Enviar";
		// 			}, 4000);
		// 		});
		// },
    }
}
</script>

<style lang="stylus" scoped src="./Contato.styl"></style>