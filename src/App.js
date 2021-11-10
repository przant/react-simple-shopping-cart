import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
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
        <Navbar />
        <Layout>
          <Title />
          <Products
            addToShoppingCart={ () => console.log('Do nothing') }
            products={ this.state.products }
          ></Products>
        </Layout>
      </div>
    )
  }
}

export default App