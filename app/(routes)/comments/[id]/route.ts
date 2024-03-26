import { redirect } from "next/navigation";
import { comments } from "../data";

/**
 * Retrieves the comments data.
 * @returns {Promise<Response>} A promise that resolves to the comments data.
 */
export async function GET(_request: Request, { params }: {
    params: {
        id: string
    }
}) {

    const comment = comments.filter((comment) => {
        return (comment.id == parseInt(params.id))
    })
    console.log(typeof comment);
    if (!!comment && typeof comment === 'object') {
        redirect("/comments");
    }
    
    return Response.json(comment);
}

/**
 * Retrieves the comments data.
 * @returns {Promise<Response>} A promise that resolves to the comments data.
 */
export async function PATCH(request: Request, { params }: {
    params: {
        id: string
    }
}) {
    const requestBody = await request.json();
    const { body } = requestBody;
    const idx = comments.findIndex(comment => comment.id === parseInt(params.id));
    comments[idx].body = body;
    return Response.json(comments[idx]);
}

/**
 * Retrieves the comments data.
 * @returns {Promise<Response>} A promise that resolves to the comments data.
 */
export async function DELETE(_request: Request, { params }: {
    params: {
        id: string
    }
}) {
    const idx = comments.findIndex(comment => comment.id === parseInt(params.id));
    comments.splice(idx, 1);
    return Response.json(comments);
}