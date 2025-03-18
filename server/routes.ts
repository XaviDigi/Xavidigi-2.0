import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
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
      
      // Send email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'ismaelkf@gmail.com',
        subject: `New Contact Form Submission: ${validatedData.subject}`,
        text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}
Message: ${validatedData.message}
        `
      };

      await transporter.sendMail(mailOptions);
      
      return res.status(200).json({ 
        success: true, 
        message: "Message received" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Server error, please try again later"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
