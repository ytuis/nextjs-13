import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
export { default } from "next-auth/middleware"

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.SECRET })
  const url = req.url

  if (url.includes("/auth/login")) {
    if (session) return NextResponse.redirect(new URL('/dashboard', url))
    else return NextResponse.next()
  }

  if (!session) return NextResponse.redirect(new URL('/auth/login', url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/auth/:path*', '/dashboard/'],
}