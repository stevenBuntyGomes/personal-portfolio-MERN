import { createTransport } from "nodemailer";

export const sendMail = async ({userMessage, email}) => {
  const transporter = createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
    service: process.env.SMPT_SERVICE,
  });

  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM Stephen PORTFOLIO",
    to: process.env.SMPT_MAIL,
    from: process.env.SMPT_MAIL,
    text: userMessage,
  });
  await transporter.sendMail({
    subject: "Contact Sent Success",
    to: email,
    from: process.env.SMPT_MAIL,
    text: "Hey! I am Stephen Bunty. Thank you for contacting me. I will send you mail as soon as possible.",
  });
};
