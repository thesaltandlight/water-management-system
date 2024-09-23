import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState(() => {
        // Retrieve cart from localStorage if it exists, otherwise set it as an empty array
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Whenever the cart state changes, update localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((previousCart) => {
            const existingProduct = previousCart.find(item => item.id === product.id);
            if (existingProduct) {
                return previousCart.map(item =>
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
            }
            return [...previousCart, {...product, quantity: 1}];
        });
    };

    const removeFromCart = (productId) => {
        setCart((previousCart) => previousCart.filter(item => item.id !== productId));
    };

    const incrementQuantity = (productId) => {
        setCart((previousCart) => 
            previousCart.map(item =>
                item.id === productId ? {...item, quantity: item.quantity + 1} : item
            )
        );
    };

    const decrementQuantity = (productId) => {
        setCart((previousCart) => 
            previousCart.map(item =>
                item.id === productId ? {...item, quantity: Math.max(1, item.quantity - 1)} : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
