import Product from "./Product";
import {Seed} from "../data/seed"

const ProductList = () => {
    const product = Seed.products[0];

    return (
        <div className='ui unstackable items'>
            <Product />
        </div>
    )
}

export default ProductList