class Mensagem {

    constructor(texto) {
        this._texto = texto || '' // caso o primeiro parâmetro seja undefined ele poe ''
    }

    get texto() {
        return this._texto
    }

    set texto(texto) {
        this._texto = texto
    }
}
