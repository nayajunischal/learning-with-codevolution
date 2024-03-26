"use client"
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function Comment({ params }: {
    params: {
        id: string,
        cid: string
    }
}) {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error(`Error while loading comment ${params.cid}`);
    }
    return (
        <>
            <h1>Post : {params.id}</h1>
            <h2> Comment : {params.cid} </h2>
        </>

    )
};