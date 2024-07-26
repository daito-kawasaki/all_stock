import { NextResponse } from 'next/server';

export const config = {
    matcher: '/(.*)', // すべてのパスに対してミドルウェアを適用
};

export default function middleware(request) {
    console.log('Middleware is running');
    console.log('Request URL:', request.url);
    console.log('BASIC_AUTH_USER:', process.env.BASIC_AUTH_USER);
    console.log('BASIC_AUTH_PASSWORD:', process.env.BASIC_AUTH_PASSWORD);

    const authorizationHeader = request.headers.get('authorization');
    console.log('Authorization header:', authorizationHeader);

    if (authorizationHeader) {
        const basicAuth = authorizationHeader.split(' ')[1];
        const [user, password] = Buffer.from(basicAuth, 'base64').toString('ascii').split(':');
        console.log('User:', user);
        console.log('Password:', password);

        if (user === process.env.BASIC_AUTH_USER && password === process.env.BASIC_AUTH_PASSWORD) {
            console.log('Authentication successful');
            return NextResponse.next();
        }
    }

    console.log('Authentication failed');
    return new Response('Basic Auth required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    });
}
