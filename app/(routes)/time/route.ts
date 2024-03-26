export const dynamic = "force-dynamic"; //default value is 'auto'
/**
 * Retrieves the comments data.
 * @returns {Promise<Response>} A promise that resolves to the comments data.
 */
export async function GET(): Promise<Response> {

    return Response.json({
        time: new Date().toLocaleTimeString()
    });
}