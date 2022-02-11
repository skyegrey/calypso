export const generateVoteCount = () => {
    return Math.floor(Math.random() * 100);
}

export const Seed: {
    products: (
        {
            id: number;
            title: string;
            description: string;
            url: string
            votes: number;
            submitterAvatarUrl: string;
            imageName: string;
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
            submitterAvatarUrl: 'daniel.jpg',
            imageName: 'fort-knight.jpg'
        },
        {
            id: 1,
            title: 'Yellow Pail',
            description: 'On-demand sand castle construction expertise.',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'daniel.jpg',
            imageName: 'yellow-pail.jpg'
        }
    ],
}