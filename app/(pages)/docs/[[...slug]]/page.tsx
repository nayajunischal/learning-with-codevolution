import { notFound } from "next/navigation"

export default function Docs({ params }: {
    params: {
        slug: string[]
    }
}) {

    if (params.slug?.length == 2) {
        if (parseInt(params.slug[1]) > 5) {
            notFound();
        }
        return (
            <h5> Concept Routing definition for {params.slug[1]} / feature {params.slug[0]}</h5>
        )
    }
    if (params.slug?.length == 1) {
        return (
            <h5> Feature Routing definition for {params.slug[0]} </h5>
        )
    }

    return (
        <>
            <h1>Catch all Segment Routing Example</h1>
            <h3>Docs Segment</h3>
        </>
    )
}