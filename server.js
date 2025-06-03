import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message, serviceType, to } = req.body;

    if (!name || !email || !message || !to) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Zackwebpro <${process.env.EMAIL_USER}>`,
      to: to,
      subject: `New Contact Form Submission from ${name} from zackwebpro.com`,
      html: `
        <h2>New Contact Form Submission from zackwebpro.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${serviceType ? `<p><strong>Service Type:</strong> ${serviceType}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 