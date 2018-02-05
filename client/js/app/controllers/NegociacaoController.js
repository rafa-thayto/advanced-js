class NegociacaoController {

    constructor() { 

        // Fazendo o vanilla parecer com JQuery
        const $ = document.querySelector.bind(document)
        // ou
        // const $ = target => document.querySelector(target)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._negociacoesView.update(this._listaNegociacoes)
        Object.freeze(this)
    }

    adiciona(event) {
        event.preventDefault()
        
        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._negociacoesView.update(this._listaNegociacoes)
        this._limpaFormulario()
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
