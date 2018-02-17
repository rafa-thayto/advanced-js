class NegociacoesView extends View{
    constructor(elemento) { 
        // Manada o atributo para o elemento pai
        super(elemento)
    }

    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="negociacaoController.ordena('data')">DATA</th>
                    <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                    <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                    <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map((neg) => `
                        <tr>
                            <td>${DateHelper.dataParaTexto(neg.data)}</td>
                            <td>${neg.quantidade}</td>
                            <td>${neg.valor}</td>
                            <td>${neg.volume}</td>
                        </tr>
                    `).join('')}
            </tbody>
            
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${ 
                        model.negociacoes.reduce((total, neg) => total + neg.volume, 0.0)
                    }</td>
                </tr>
            </tfoot>
        </table>    
        `        
    }
    
} 
