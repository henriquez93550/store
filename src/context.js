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
        detailProduct: detailProduct
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
        })
    }
    handleDetail = () => {
        console.log('hello from detail');
    }
    addToCart = () => {
        console.log('hello from  add to cart');
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};