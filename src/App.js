import { Component } from 'react'
import Products from './components/Products'
import './App.css'

class App extends Component {
  state = {
    products: [
      { name: 'Tomates', price: 1500, img: '/products/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/products/arbejas.jpg'},
      { name: 'Lechuga', price:  500, img: '/products/lechuga.jpg'},
    ]
  }
  render() {
    return (
      <div>
        <Products
          addToShoppingCart={ () => console.log('Do nothing') }
          products={ this.state.products }
        >

        </Products>
      </div>
    )
  }
}

export default App