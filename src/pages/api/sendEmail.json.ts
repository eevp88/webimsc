import type { APIRoute } from "astro";
import { Resend } from "resend";

interface JsonRequest {
  // Tus otras propiedades
  name: string;
  email: string;
  message: string;
  disclaimer: string;
}

export const POST: APIRoute = async ({ locals, request }) => {
  const { API_RESEND, TO_RESEND, FROM_RESEND } = locals.runtime.env;

  const data: JsonRequest = await request.json();
  let { name, email, message } = data;
  let subject = `Mensaje de contacto ${name} `;

  let html = JSON.stringify(data);
  let text = JSON.stringify(data);

  if (!name || !email || !message) {
    return new Response(null, {
      status: 404,
      statusText: "No proporcionó los datos correctos.",
    });
  }

  let from = FROM_RESEND;
  let to = TO_RESEND;
  const resend: Resend = new Resend(API_RESEND);

  const send = await resend.emails.send({ from, to, subject, html, text });

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
};
