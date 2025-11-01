import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function sendSimpleMessage() {
  const key = process.env.MAILGUN_API_KEY;
  const sandbox = process.env.MAILGUN_SANDBOX;
  if (!key || !sandbox) {
    console.error("Mail GUN not setup correctly.");
    return;
  }
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({ username: "api", key });
  try {
    const data = await mg.messages.create(sandbox, {
      from: `Mailgun Sandbox <postmaster@${sandbox}>`,
      to: ["Carlton Joseph <carlton.joseph@gmail.com>"],
      subject: "Hello Carlton Joseph",
      text: "Congratulations Carlton Joseph, you just sent an email with Mailgun! You are truly awesome!",
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

type EmailParamsT = {
  to: string;
  subject: string;
  text: string;
};

export async function sendEmail({ to, subject, text }: EmailParamsT) {
  const key = process.env.MAILGUN_API_KEY;
  const sandbox = process.env.MAILGUN_SANDBOX;
  if (!key || !sandbox) {
    console.error("Mail GUN not setup correctly.");
    return;
  }
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({ username: "api", key });

  const messageData = {
    from: `Mailgun Sandbox <postmaster@${sandbox}>`,
    to,
    subject,
    text,
  };
  try {
    const data = await mg.messages.create(sandbox, messageData);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
