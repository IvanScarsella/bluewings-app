import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method !== "POST") {
      return res.status(405).json({ error: "Método no permitido" });
   }

   const { email, message } = req.body;

   if (!email || !message) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
   }

   try {
      const transporter = nodemailer.createTransport({
         service: "SendGrid",
         auth: {
            user: process.env.SENDGRID_USERNAME,
            pass: process.env.SENDGRID_API_KEY,
         },
      });

      await transporter.sendMail({
         from: `"Contacto Web" bluewings.partyband@gmail.com`, // Cambia este correo
         to: "bluewings.partyband@gmail.com", // Cambia al correo donde recibirás los mensajes
         subject: "Nuevo mensaje desde el formulario de contacto",
         text: message,
         html: `<p><strong>Correo del remitente:</strong> ${email}</p><p><strong>Mensaje:</strong> ${message}</p>`,
      });

      return res.status(200).json({ success: true });
   } catch (error) {
      console.error("Error enviando correo:", error);
      return res.status(500).json({ error: "Error enviando el correo" });
   }
}
