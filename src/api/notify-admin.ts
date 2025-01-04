import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, adminEmail } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: 'New Waitlist Registration',
      text: `New registration for MARC waitlist from: ${email}`,
      html: `
        <h2>New Waitlist Registration</h2>
        <p>A new user has joined the MARC waitlist:</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    });

    return res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending notification:', error);
    return res.status(500).json({ message: 'Failed to send notification' });
  }
}