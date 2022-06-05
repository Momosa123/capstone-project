import React, {useContext, useState} from "react"
import {Context} from "../context"
import CartItem from "../components/CartItem"

function Cart() {
  const [placeOrder, setPlaceOrder]=useState("Place Order")
    const {cartItems, setCartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    function placeAnOrder(){
                setPlaceOrder("...Ordering")
                setTimeout(
                  ()=>{
                    console.log("Order placed")
                    setCartItems([])
                    setPlaceOrder("Place Order")
                  }, 3000
                )
                
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalCostDisplay} </p>
            <div className="order-button">
                {cartItems.length!==0 && <button onClick={placeAnOrder}>{placeOrder}</button>}
            </div>
        </main>
    )
}

export default Cart