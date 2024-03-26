import { NextRequest } from "next/server";
import { comments } from "./data"


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const username = searchParams.get("username");
    const filteredComments = username ? comments.filter((item) => {
        return (item.user.username === username);
    }) : comments;
    return Response.json(filteredComments);
}

export async function POST(request: NextRequest) {
    const comment = await request.json();
    comments.push(comment);

    return new Response(JSON.stringify(comment), {
        headers: {
            "Content-type": "application/json"
        },
        status: 201
    })

}