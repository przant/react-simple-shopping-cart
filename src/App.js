import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import './App.css'

class App extends Component {
  state = {
    products: [
      { name: 'Tomates', price: 25, img: '/products/tomate.jpg' },
      { name: 'Chicharos', price: 30, img: '/products/chicharos.jpg'},
      { name: 'Lechuga', price:  15, img: '/products/lechuga.jpg'},
    ]
  }
  render() {
    return (
      <div>
        <Layout>
          <Products
            addToShoppingCart={ () => console.log('Do nothing') }
            products={ this.state.products }
          />
        </Layout>
      </div>
    )
  }
}

export default App