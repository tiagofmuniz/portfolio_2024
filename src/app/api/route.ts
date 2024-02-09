import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request, res: Response) {


  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SHIPPING_EMAIL,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    transport.sendMail({
      from: email,
      to: process.env.DESTINATION_EMAIL,
      subject: subject,
      html: `
        <p>Remetente: <b>${name} ${email} </b> </p>
        <p>Assunto: <b>${subject}</b></p>
        <p>Mensagem: <b>${message}</b></p>`,
      text: `<p>Mensagem: ${message}</p>`,
    });
    return NextResponse.json({
      message: 'Mensagem enviada com sucesso.',
    });
  } catch (error) {
    return NextResponse.error();
  }
}
