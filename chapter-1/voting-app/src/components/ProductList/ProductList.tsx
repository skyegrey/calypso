import Product from "../Product/Product";
import {Seed} from "../../data/seed"

const ProductList = () => {
    const product = Seed.products[0];

    return (
        <div className='ui unstackable items'>
            <Product
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                imageName={product.imageName}
            />
        </div>
    )
}

export default ProductList