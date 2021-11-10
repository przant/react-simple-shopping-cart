import { Component } from "react";
import Logo from "./Logo";

const styles = {
    navbar: {
        display: 'flex',
        displayDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}

class Navbar extends Component {
    render() {
        return (
            <nav style={ styles.navbar }>
                <Logo />
                <p>Carrito</p>
            </nav>
        )
    }
}

export default Navbar