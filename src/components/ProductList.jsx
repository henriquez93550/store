import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

import { ProductConsumer } from '../context';

class ProductList extends Component {
  
  render() {
      //console.log(this.state.products); //reveals APIs
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />

            <div className="row" />
            {/* returns from context.js */}
            <ProductConsumer>
                {(value) => {
                    return value.products.map(product => {
                        return <Product key={product.id} product={product}/>;
                    })
                }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
      
    );
  }
}

export default ProductList;
