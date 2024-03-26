import { NextResponse, type NextRequest } from "next/server";

export default function Middleware(request: NextRequest) {
    // Approach II
    if (request.nextUrl.pathname === '/profile') {
        //return NextResponse.redirect(new URL('/comments/1', request.url)); // will override the redirect url
        //return NextResponse.rewrite(new URL('/comments/1', request.url)); // will persist the url

    }
    //return NextResponse.redirect(new URL('/', request.url));
}

// Approach I
/*
    export const config = {
        matcher: '/profile'
    }
*/