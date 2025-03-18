import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import nodemailer from "nodemailer";

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the submission
      console.log("Contact form submission received:");
      console.log(`Name: ${validatedData.name}`);
      console.log(`Email: ${validatedData.email}`);
      console.log(`Subject: ${validatedData.subject}`);
      console.log(`Message: ${validatedData.message}`);
      
      // Send email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to your own email
        subject: `New Contact Form Submission: ${validatedData.subject}`,
        text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}
Message: ${validatedData.message}
        `,
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${validatedData.name}</p>
  <p><strong>Email:</strong> ${validatedData.email}</p>
  <p><strong>Subject:</strong> ${validatedData.subject}</p>
  <div style="margin-top: 20px;">
    <h3 style="color: #555;">Message:</h3>
    <p style="background: #f9f9f9; padding: 15px; border-radius: 4px;">${validatedData.message}</p>
  </div>
  <p style="margin-top: 30px; font-size: 12px; color: #777; text-align: center;">
    This email was sent from your portfolio website contact form.
  </p>
</div>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Server error, please try again later"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
