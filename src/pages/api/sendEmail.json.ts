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
    const request = context.request
    const body = await request.json();
    
    const {  html, subject, text } = body;
    let from =  FROM_RESEND
    let to = TO_RESEND 
    const resend: Resend = new Resend(API_RESEND);

    if ( !html || !subject || !text) {
        return new Response(null, {
          status: 404,
          statusText: "No proporcionó los datos correctos.",
        });
    }
    
    const send = await resend.emails.send({ from , to, subject , html , text});

    if (send.data) {
        return new Response(
          JSON.stringify({
            message: send.data,
          }),
          {
            status: 200,
            statusText: "success",
          }
        );
      } else {
        return new Response(
          JSON.stringify({
            message: send.error,
          }),
          {
            status: 500,
            statusText: "Internal Server Error",
          }
        );
      }
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