import type { APIRoute } from "astro"
import { Resend } from 'resend';


export const GET: APIRoute = ( context) => {
    console.log(context.locals.runtime)
    return new Response(JSON.stringify({
        message: "¡Esto es un GET!"
      })
    )
  }
  
  export const POST: APIRoute = async ( context ) => {
   

    const {API_RESEND, TO_RESEND,FROM_RESEND} = context.locals.runtime.env
    let from =  FROM_RESEND
    let to = TO_RESEND 
    let subject = "prueba desde cloudflare"
    let html =  "hola mundo!!!" 
    let text ="hola mundo" 
    const resend: Resend = new Resend(API_RESEND);
    const send = await resend.emails.send({ from , to, subject , html , text});

    return new Response(JSON.stringify({
        message: "¡Esto es un POST!"
      })
    )
  }
  
  export const DELETE: APIRoute = ({ request }) => {
    return new Response(JSON.stringify({
        message: "¡Esto es un DELETE!"
      })
    )
  }
  
  export const ALL: APIRoute = ({ request }) => {
    return new Response(JSON.stringify({
        message: `¡Esto fue un ${request.method}!`
      })
    )
  }