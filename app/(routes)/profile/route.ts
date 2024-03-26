import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

/**
 * Retrieves the comments data.
 * @returns {Promise<Response>} A promise that resolves to the comments data.
 */
export async function GET(request: NextRequest): Promise<Response> {

    cookies().set('theme', 'dark');
    const requestHeaders = request.headers;
    const headerLists = headers();
    console.log('Requested Authorization Header (NextRequest): ' + requestHeaders.get('Authorization'))
    console.log('Requested Authorization Header ({headers}): ' + headerLists.get('Authorization'))
    console.log('Set Cookies : ' + JSON.stringify(cookies().get('theme')));
    return Response.json('<h1>Profile API Data</h1>', {
        headers: {
            'content-type': 'text/html',
            'set-cookie': 'background=blue'
        }
    });
}