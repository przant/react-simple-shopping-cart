import { Component } from "react";

const styles = {
    cartDetails: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: 5,
        width: 300,
        right: 50
    },
    list: {
        margin: 0,
        padding: 0,
    },
    item: {
        listDisplayType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
    }
}



class CartDetails extends Component {
    render() {
        const { cart } = this.props
        console.log(cart)
        return (
            <div style={ styles.cartDetails }>
                <ul style={ styles.list }>
                    {cart.map(item => 
                        <li style={ styles.item } key={ item.name }>
                            <img alt={ item.name } src={ item.img } width='50' height='32' />
                            { item.name } <span> { item.quantity } </span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default CartDetails;