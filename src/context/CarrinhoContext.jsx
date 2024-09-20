
import { createContext, useEffect, useMemo,useReducer, useState } from "react";
import { carrinhoReducer } from "../reduces/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho"
const estadoInicial = [];

// context provider para compartilha dados de componetes entre camadas
/** 
A Context API é uma maneira de compartilhar dados globalmente entre componentes sem a necessidade 
de passar propriedades manualmente. Ela ajuda a evitar a "prop drilling", 
tornando o compartilhamento de informações mais direto.
*/
export const CarrinhoProvider = ({children}) => { 
  const [carrinho, dispatch] = useReducer(carrinhoReducer,estadoInicial) // estado inicial vazio  
  const [quantidade, setQuantidade] = useState(0);
  const[valorTotal, setValorTotal] = useState(0);
  const { totalTemp, quantidadeTemp } = useMemo(() => {
    return carrinho.reduce(
      (acumulador, produto) => ({
        quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
        totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
      }),
      {
        quantidadeTemp: 0,
        totalTemp: 0,
      }
    );
  }, [carrinho]);

  useEffect(() => {
    setQuantidade(quantidadeTemp);
    setValorTotal(totalTemp);
  }); 





    return (
      <CarrinhoContext.Provider value={{ carrinho, dispatch, quantidade, valorTotal}}>
        {children}
      </CarrinhoContext.Provider>
    )
  }