import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <p>Hello world!</p>
      </div>
    )
  }
}

export default App;