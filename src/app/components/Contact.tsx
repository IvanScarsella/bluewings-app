"use client";

import { useState } from "react";

export default function Contact() {
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [status, setStatus] = useState("");
   const [isError, setIsError] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      setStatus("Enviando...");
      setIsError(false);

      try {
         const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, message }),
         });

         if (res.ok) {
            setStatus("Mensaje enviado con éxito");
            setEmail("");
            setMessage("");
         } else {
            setStatus("Error enviando el mensaje. Por favor, intenta nuevamente.");
            setIsError(true);
         }
      } catch (error) {
         console.error(error);
         setStatus("Error enviando el mensaje. Por favor, intenta nuevamente.");
         setIsError(true);
      }
   };

   return (
      <div className="max-w-4xl mx-auto mt-20 p-6 bg-gray-800 text-white rounded-md shadow-lg">
         <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
            <p className="text-lg mb-6">
               Por contrataciones, completa el formulario y un representante se estará contactando contigo a la brevedad.
            </p>
         </div>
         <form
            onSubmit={handleSubmit}
            className="space-y-6 flex flex-col items-center md:items-stretch"
         >
            <label className="w-full">
               <span className="text-lg font-medium">Correo electrónico:</span>
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Correo electrónico"
                  className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
            </label>
            <label className="w-full">
               <span className="text-lg font-medium">Mensaje:</span>
               <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  aria-label="Mensaje"
                  className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
            </label>
            <button
               type="submit"
               className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
               Enviar
            </button>
            {status && (
               <p
                  className={`mt-4 text-center text-sm ${isError ? "text-red-500" : "text-green-500"
                     }`}
               >
                  {status}
               </p>
            )}
         </form>
      </div>
   );
}
