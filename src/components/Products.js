import { Component } from "react"
import Product from "./Product"

const styles = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Products extends Component {
    render() {
        const { products, addToShoppingCart } = this.props
        console.log(this.props);
        return (
            <div style={ styles.products }>
                { products.map( product =>
                    <Product
                        addToShoppingCart={ addToShoppingCart }
                        key={ product.name }
                        product={ product }
                    />
                )}
            </div>
        )
    }
}

export default Products