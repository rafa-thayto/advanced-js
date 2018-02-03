class NegociacaoController {

    constructor() { 

        // Fazendo o vanilla parecer com JQuery
        const $ = document.querySelector.bind(document)
        // ou
        // const $ = target => document.querySelector(target)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        Object.freeze(this)
    }

    adiciona(event) {
        event.preventDefault()

        let date = new Date(...
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        )
        console.log(date)

        /* const negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        ) */

        // console.log(negociacao)
        

    }

}
