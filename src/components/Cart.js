import { Component } from "react";

const styles = {
    cart: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    }
}

class Cart extends Component {
    render() {
        return (
            <button style={ styles.cart }>
                Carrito
            </button>
        )
    }   
}

export default Cart