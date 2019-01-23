import React, { Component } from 'react';
import Product from './components/Product';
import { storeProducts, detailProduct } from './data';



// creating context object
const ProductContext = React.createContext();
//Provider provides information for application
//Consumer uses information for application

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];

        })
        this.setState(() => { 
            return {products: tempProducts}
        });
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
      };
    //   allows for details to be gathered by id and be shown to user
      handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return { detailProduct: product };
        });
      };

    addToCart = (id) => {
        // gives access to all the products in state
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        },
        () => {
            console.log(this.state);
        }
        );
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        });
    };
    
    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        });
    };

    increment = (id) => {
        console.log('this is the increment');
    };

    decrement = (id) => {
        console.log('this is the decrement');
    };

    removeItem = (id) => {
        console.log('item removed');
    };

    clearCart = () => {
        console.log('cart was cleared');
    };

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.0825;
        // toFixed adds decimal points
        const tax = parseFloat(tempTax.toFixed(2));
    }

    render() {
        return (
            <ProductContext.Provider 
                value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};