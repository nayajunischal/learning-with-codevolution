import { Metadata } from 'next'

type TProps = {
    params: {
        id: string;
    }
}

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
    const mTitle = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Solo Leveling Chapter ${params?.id}`)
        }, 100);
    })
    return { title: `${mTitle}` }
}

export default function Post({ params }: {
    params: {
        id: string
    }
}) {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error(`Error while loading post ${params.id}`);
    }
    return (
        <div> Blog Details {params.id}</div>
    )
}
