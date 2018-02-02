class NegociacaoController {

    constructor() { }

    adiciona(event) {
        event.preventDefault()
        
        // Fazendo o vanilla parecer com JQuery
        const $ = document.querySelector.bind(document)
        // ou
        // const $ = target => document.querySelector(target)
        const $inputData = $('#data')
        const $inputQuantidade = $('#quantidade')
        const $inputValor = $('#valor')

        console.log($inputData.value)
        console.log($inputQuantidade.value)
        console.log($inputValor.value)
        

    }

}
