class DateHelper {
    
    constructor() { 
        throw new Error('DateHelper não pode ser instânciada')
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`
    }
    
    static textoParaData(texto) {
        if (!/\d{2}\/\d{2}\/\d{4}/.test(texto)) 
            throw new Error('O formato da data deve estar em dd/mm/aaaa')
        return new Date(...texto.split('/')
                        .reverse()
                        .map((item, indice) => item - indice % 2))
    }

}
