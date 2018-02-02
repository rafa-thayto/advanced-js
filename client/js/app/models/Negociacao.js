class Negociacao {
    /* Underline antes do nome é tipo private mais não deixa privado */
    constructor(data, quantidade, valor) { 

        this._data = new Date(data)
        this._quantidade = quantidade
        this._valor = valor
        
        // Congelando o objeto
        Object.freeze(this)
    }

    get volume() {
        return this._quantidade * this._valor
    }

    get data() {
        // Fazendo com que o usuário não possa mecher usando atributos de uma instância Date
        return new Date(this._data.getTime())
    }
    get quantidade() {
        return this._quantidade
    }
    get valor() {
        return this._valor
    }
    
}
