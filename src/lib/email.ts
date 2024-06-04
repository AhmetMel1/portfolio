'use server';

import * as nodemailer from 'nodemailer';

import { MailResponse } from './types';

import { TFormSchema } from '@/lib/form-schema';

export const sendEmail = async ({
  email,
  message,
}: TFormSchema): Promise<MailResponse> => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    return await transporter
      .sendMail({
        from: email,
        to: process.env.MAIL_USERNAME,
        subject: `New message from ${email}`,
        text: message,
      })
      .then(() => {
        return {
          data: 'Email sent successfully!',
        };
      })
      .catch(() => {
        return {
          error: 'Something went wrong!',
        };
      });
  } catch (error) {
    return {
      error: 'Something went wrong!',
    };
  }
};
