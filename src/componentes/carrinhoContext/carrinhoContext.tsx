import { useState } from "react";
import { createContext } from "react";

type ItemCarrinho = {
    id: number;
    nome: string;
    quantidade: number
};

export const CarrinhoContext = createContext({});

export const CarrinhoProvider = ({ children }: any) => {
    const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};