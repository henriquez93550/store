import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';


class Details extends Component {
    render() {
        return (
          <ProductConsumer>
              {(value) => {
                //   id and company comes from API 
                 const {id, company, img, info, price, title, inCart} = 
                 value.detailProduct;
                 return (
                     <div className="container py-5">
                     {/* title */}
                     <div className="row">
                     <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                     </div>
                     </div>
                    {/* end title */}
                    {/* product infor */}
                    <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={img} className="img-fluid" alt="product" />
                    </div>
                        {/* product text */}
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h1>model : {title}</h1>
                    </div>
                    </div>
                    
                     </div>
                 )
              }}
          </ProductConsumer>
        );
    }
}

export default Details;