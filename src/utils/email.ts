'use server';

import * as nodemailer from 'nodemailer';

import { TFormSchema } from '@/lib/form-schema';

export const sendEmail = async ({ email, message }: TFormSchema) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 507,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USERNAME,
      subject: `New message from ${email}`,
      text: message,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch (error) {
    return {
      error: 'Something went wrong!',
    };
  }
};
