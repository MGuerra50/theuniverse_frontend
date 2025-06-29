import { useState } from "react";
import { createContext } from "react";

export type ItemCarrinho = {
    id: number;
    nome: string;
    preco: number;
    imagem: string;
    quantidade: number;
};

type CarrinhoProviderProps = {
    children: React.ReactNode;
};

export const CarrinhoContext = createContext<CarrinhoContextData>({} as CarrinhoContextData);

export const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
    const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

    const adicionarItem = (item: Omit<ItemCarrinho, 'quantidade'>) => {
        setCarrinho(prev => {
            const itemExistente = prev.find(i => i.id === item.id);
            if (itemExistente) {
                return prev.map(i =>
                    i.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i
                );
            }
            return [...prev, { ...item, quantidade: 1 }];
        });
    };

    const removerItem = (id: number) => {
        setCarrinho(prev => prev.filter(item => item.id !== id));
    };

    const incrementarQuantidade = (id: number) => {
        setCarrinho(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
            )
        );
    };

    const decrementarQuantidade = (id: number) => {
        setCarrinho(prev => prev
            .map(item =>
                item.id === id ? { ...item, quantidade: Math.max(item.quantidade - 1, 0) } : item
            )
            .filter(item => item.quantidade > 0)

        )
    };

    const totalCarrinho = carrinho.reduce((total, item) =>
        total + item.preco * item.quantidade, 0
    );

    return (
        <CarrinhoContext.Provider value={{
            carrinho,
            adicionarItem,
            removerItem,
            incrementarQuantidade,
            decrementarQuantidade,
            totalCarrinho
        }}>
            {children}
        </CarrinhoContext.Provider>
    );
};
type CarrinhoContextData = {
    carrinho: ItemCarrinho[];
    adicionarItem: (item: Omit<ItemCarrinho, 'quantidade'>) => void;
    removerItem: (id: number) => void;
    incrementarQuantidade: (id: number) => void;
    decrementarQuantidade: (id: number) => void;
    totalCarrinho: number;
};