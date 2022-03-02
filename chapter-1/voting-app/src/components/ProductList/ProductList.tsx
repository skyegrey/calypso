import Product from "../Product/Product";
import {Seed} from "../../data/seed"
import {useEffect, useState} from "react";


interface product {
    id: number;
    title: string;
    description: string;
    url: string
    votes: number;
    submitterAvatarUrl: string;
    imageName: string;
}

const ProductList = () => {

    const [products, setProducts] = useState([] as product[])

    const handleProductUpVote = (productId: number) => {
        const nextProducts = products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        })
        setProducts(nextProducts)
    }

    const sortedProducts = products.sort((a, b) => (
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

    useEffect(() => {
        setProducts(Seed.products)
    }, [])

    return (
        <div className='ui unstackable items'>
            {productComponents}
        </div>
    )
}

export default ProductList