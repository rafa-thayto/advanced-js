class NegociacaoController {

    constructor() { 

        // Fazendo o vanilla parecer com JQuery
        const $ = document.querySelector.bind(document)
        // ou
        // const $ = target => document.querySelector(target)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        // Pode colocar também uma arrow function que aí o this recebe o contexto lexico 
        // de onde está ou seja o this é a própria classe, não a classe do pai
        // this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model) )

        this._listaNegociacoes = ProxyFactory.create(
            new ListaNegociacoes(), 
            ['adiciona', 'esvazia'],
            model => this._negociacoesView.update(model))

        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._negociacoesView.update(this._listaNegociacoes)
        
        this._mensagem = ProxyFactory.create(
            new Mensagem(),
            ['texto'],
            model => this._mensagemView.update(model))
            
        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagemView.update(this._mensagem);
        Object.freeze(this)
    }

    adiciona(event) {
        event.preventDefault()
        
        this._listaNegociacoes.adiciona(this._criaNegociacao())

        this._mensagem.texto = 'Negociação adicionada com sucesso!'
        this._limpaFormulario()
    }

    apaga(event) {
        event.preventDefault()

        this._listaNegociacoes.esvazia()

        this._mensagem = 'Negociações apagadas com sucesso!'
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    // O underline na frente é para dizer que esse método só
    // pode ser chamado pela própria classe
    _limpaFormulario() {
        
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0
        
        this._inputData.focus()
    }

}
