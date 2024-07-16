import { render } from "@react-email/render";
// import { EmailTemplate } from '../../../../emails/index.jsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST( request, Response) {
  const { email, userFirstName} = await request.json();

  const { data, error } = await resend.emails.send({
    from: "Acme <OnBoarding2@resend.dev>",
    to: {email},
    subject: 'Thank you for your message!',
    html: EmailTemplate({ userFirstName }),
  });
if (error) {
  return Response.json(error);
}

  return Response.json({message: 'Email sent successfully!'});

}
