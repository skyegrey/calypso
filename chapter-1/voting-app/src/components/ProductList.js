import React from "react";
import Product from "../components/Product"

class ProductList extends React.Component {
    render() {
        return (
            <div className='ui unstackable items'>
                <Product />
            </div>
        )
    }
}

export default ProductList