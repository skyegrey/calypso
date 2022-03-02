interface ProductProps {
    id: number;
    title: string;
    description: string;
    url: string
    votes: number;
    submitterAvatarUrl: string;
    imageName: string;
    onUpVote: (productId: number) => void;
}

const Product = (props: ProductProps) => {

    const handleUpVoteClicked = () => {
        props.onUpVote(props.id)
    }

    return (
        <div className='item'>
            <div className='image'>
                <img src={require("../../images/products/" + props.imageName)} alt='Image not found'/>
            </div>
            <div className='middle aligned content'>
                <div className='header'>
                    <a onClick={handleUpVoteClicked}>
                        <i className={'large caret up icon'} />
                    </a>
                    {props.votes}
                </div>
                <div className={'description'}>
                    <a href={props.url}>
                        {props.title}
                    </a>
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className='extra'>
                    <span>Submitted by:</span>
                    <img
                        className='ui avatar image'
                        src={require('../../images/avatars/' + props.submitterAvatarUrl)}
                        alt='Image not found'
                    />
                </div>
            </div>
        </div>
    )
}

export default Product;