export const generateVoteCount = () => {
    return Math.floor(Math.random() * 100);
}

export const Seed: {
    products: (
        {
            productImageUrl: string;
            submitterAvatarUrl: string;
            description: string;
            votes: number;
            id: number;
            title: string;
            url: string
        }
    )[]
    } = {
    products: [
        {
            id: 0,
            title: 'Fort Knight',
            description: 'Authentic renaissance actors, delivered in just two weeks',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'images/avatars/daniel.jpg',
            productImageUrl: 'images/products/fort-knight.jpg'
        },
        {
            id: 1,
            title: 'Yellow Pail',
            description: 'On-demand sand castle construction expertise.',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'images/avatars/daniel.jpg',
            productImageUrl: 'images/products/yellow-pail.jpg'
        }
    ],
}