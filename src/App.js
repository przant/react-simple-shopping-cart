import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    products: [
      { name: 'Tomates', price: 25, img: '/products/tomate.jpg' },
      { name: 'Chicharos', price: 30, img: '/products/chicharos.jpg'},
      { name: 'Lechuga', price:  15, img: '/products/lechuga.jpg'},
    ],
    cart: [],
    isCartVisible: false,
  }

  addToShoppingCart = (product) => {
    const { cart } = this.state
    if (cart.find( element => element.name === product.name)) {
      const newCart = cart.map( 
        elt => elt.name === product.name? (
          {...elt, quantity: elt.quantity + 1}) : elt )
      return this.setState({ cart: newCart }) 
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })
  }

  displayCart = () => {
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render() {
    const { isCartVisible } = this.state
    return (
      <div>
        <Navbar 
          cart={ this.state.cart } 
          isCartVisible={ isCartVisible } 
          displayCart={ this.displayCart }
        />
        <Layout>
          <Title />
          <Products
            addToShoppingCart={ this.addToShoppingCart }
            products={ this.state.products }
          ></Products>
        </Layout>
      </div>
    )
  }
}

export default App