
import { NextResponse, type NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const sessionToken = request.cookies.get("next-auth.session-token")?.value;
    if(sessionToken){
        return NextResponse.next();
    }else{
        return NextResponse.redirect(new URL('/signin', request.url))
    }
}
export const config = {
    matcher: ['/admin/:path*'],
  }
