const image = require('../images/avatars/daniel.jpg')
const fortKnightImage = require('../images/products/fort-knight.jpg')

const Product = () => {
    return (
        <div className='item'>
            <div className='image'>
                <img src={fortKnightImage} alt='Image not found'/>
            </div>
            <div className='middle aligned content'>
                <div className='description'>
                    <a>Fort Knight</a>
                    <p>Authentic renaissance actors, delivered in just two weeks</p>
                </div>
                <div className='extra'>
                    <img
                        className='ui avatar image'
                        src={image}
                        alt='Image not found'
                    />
                </div>
            </div>
        </div>
    )
}

export default Product;