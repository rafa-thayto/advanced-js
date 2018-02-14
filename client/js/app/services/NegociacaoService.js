class NegociacaoService {

    obterNegociacoesDaSemana(callback) {
        
        const xhr = new XMLHttpRequest

        // Preparando ambiente
        xhr.open('GET', 'negociacoes/semana')

        xhr.onreadystatechange = () => {

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {

                    callback(null, JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
                } else {
                    console.log(xhr.responseText)
                    callback('Não foi possível obter as negociações da semana!')
                }
            }

        }

        xhr.send()
        
    }
    obterNegociacoesDaSemanaAnterior(callback) {
        
        const xhr = new XMLHttpRequest

        // Preparando ambiente
        xhr.open('GET', 'negociacoes/anterior')

        xhr.onreadystatechange = () => {

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {

                    callback(null, JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
                } else {
                    console.log(xhr.responseText)
                    callback('Não foi possível obter as negociações da semana!')
                }
            }

        }

        xhr.send()
        
    
    }
    obterNegociacoesDaSemanaRetrasada(callback) {
        
        const xhr = new XMLHttpRequest

        // Preparando ambiente
        xhr.open('GET', 'negociacoes/retrasada')

        xhr.onreadystatechange = () => {

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {

                    callback(null, JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)))
                } else {
                    console.log(xhr.responseText)
                    callback('Não foi possível obter as negociações da semana!')
                }
            }

        }

        xhr.send()
        
    }
}
