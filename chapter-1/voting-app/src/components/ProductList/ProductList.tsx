import Product from "../Product/Product";
import {Seed} from "../../data/seed"

const ProductList = () => {

    const handleProductUpVote = (productId: number) => {
        console.log(productId + ' was up-voted.');
    }

    const sortedProducts = Seed.products.sort((a, b) => (
       b.votes - a.votes
    ));
    const productComponents = sortedProducts.map((product) => (
        <Product
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            imageName={product.imageName}
            onUpVote={handleProductUpVote}
        />
    ))

    return (
        <div className='ui unstackable items'>
            {productComponents}
        </div>
    )
}

export default ProductList