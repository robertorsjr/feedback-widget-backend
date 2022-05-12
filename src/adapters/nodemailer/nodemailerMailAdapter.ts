import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e2f10fdce2e864",
    pass: "9961eff04e541a"
  }
})


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({body, subject}: SendMailData){
    
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Roberto Junior <beto.rodriguesds@gmail.com>',
      subject,
      html: body
    })
  };
}