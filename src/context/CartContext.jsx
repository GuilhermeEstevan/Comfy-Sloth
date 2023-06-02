import { useEffect } from "react";
import { useContext, createContext, useState } from "react";


const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const getLocalStorage = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        return cart
    }


    const [cart, setCart] = useState(getLocalStorage())
    const [totalItems, setTotalItems] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [shipping, setShipping] = useState(534)

    const addToCart = (id, color, amount, product) => {
        // VERIFY IF ITEM IS IN CART
        const tempItem = cart.find((item) => {
            return item.id === id + color
        })
        if (tempItem) {
            const tempCart = cart.map((cartItem) => {
                if (cartItem.id === id + color) {
                    let newAmount = cartItem.amount + amount
                    if (newAmount > cartItem.max) {
                        newAmount = cartItem.max
                    }
                    return { ...cartItem, amount: newAmount }
                }
            })
            setCart(tempCart)
        }
        else {
            const newItem = {
                id: id + color,
                name: product.name,
                color,
                amount,
                Image: product.images[0].url,
                price: product.price,
                max: product.stock
            }
            const tempCart = [...cart, newItem]
            setCart(tempCart)
        }
    }

    const removeItem = (id) => {

    }

    const toggleAmount = (id, value) => {

    }

    const clearCart = () => {

    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            totalItems,
            totalAmount,
            shipping,
            cart,
            addToCart,
            removeItem,
            toggleAmount,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext = () => {
    return useContext(CartContext)
}