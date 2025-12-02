import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // God Mode: Geo-Personalization
  const city = request.headers.get('x-vercel-ip-city')
  const country = request.headers.get('x-vercel-ip-country')

  if (city) {
    response.headers.set('x-user-city', city)
  }
  if (country) {
    response.headers.set('x-user-country', country)
  }

  return response
}

export const config = {
  matcher: '/:path*',
}
