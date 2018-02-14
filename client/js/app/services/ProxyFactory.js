class ProxyFactory {

    static create(objeto, props, acao) {
    
        return new Proxy(objeto, {
            
            get(target, prop, receiver) {

                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])) {

                    return function() {
                        console.log(`Interceptando ${prop}`)
                        Reflect.apply(target[prop], target, arguments)
                        return acao(target)
                    }

                }

                return Reflect.get(target, prop, receiver)
            },

            set(target, prop, value, receiver) {

                const retorno = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)) acao(target);    // só executa acao(target) se for uma propriedade monitorada
                return retorno; 
                
            }

        })
    }

    static _isFunction(func) {
        return typeof(func) == typeof(Function)
    }

}
