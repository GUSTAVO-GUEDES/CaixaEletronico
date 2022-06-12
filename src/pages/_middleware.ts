import { NextResponse, NextRequest, NextFetchEvent } from 'next/server'

export async function middleware(req: NextRequest, ev:NextFetchEvent) {
    const id_conta = req.cookies['id_conta']

    const { pathname } = req.nextUrl

    const parsedPathname = pathname.split('/')

    if (!parsedPathname.includes('login') && !parsedPathname.includes('bgcaixa.jpg') && (id_conta == '' || !id_conta)) {
        const url = req.nextUrl.clone()
        url.pathname = '/login'

        return NextResponse.redirect(url)
    }else if(parsedPathname.includes('login') && id_conta != '' && id_conta){
        const url = req.nextUrl.clone()
        url.pathname = '/'

        return NextResponse.redirect(url)
    }
    return NextResponse.next()
}