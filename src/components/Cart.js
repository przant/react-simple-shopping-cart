import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CartDetails from './CartDetails';

const styles = {
    cart: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Cart extends Component {
    render() {
        const { cart, isCartVisible, displayCart } = this.props
        const quantity = cart.reduce((total, item) => total + item.quantity, 0)
        return (
            <div>
                <span style={ styles.bubble }>
                    { quantity !== 0 ? <BubbleAlert value={ quantity }/> : null}
                </span>
                <button style={ styles.cart } onClick={ displayCart }>
                    Carrito
                </button>
                { isCartVisible? <CartDetails cart={ cart }/> : null}
            </div>
        )
    }   
}

export default Cart