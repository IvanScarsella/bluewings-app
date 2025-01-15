"use client";

import { useState } from "react";

export default function Contact() {
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [status, setStatus] = useState("");
   const [isError, setIsError] = useState(false); // Nuevo estado para manejar errores

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
      <div className="mx-auto p-6 rounded-md shadow-md flex flex-row w-full justify-around mt-20">
         <div>

            <h1 className="text-4xl font-bold mb-6 ">Contáctanos</h1>
            <p className="w-2/3">Por contrataciones, completa el formulario y un representante se estará contactando con vos a la brevedad.</p>
         </div>
         <form onSubmit={handleSubmit} className="space-y-6 
         ">
            <label className="block">
               <span className="text-lg font-medium">Correo electrónico:</span>
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded text-black"
               />
            </label>
            <label className="block">
               <span className="text-lg font-medium">Mensaje:</span>
               <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 p-2 w-full border rounded text-black"
               />
            </label>
            <button
               type="submit"
               className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
               Enviar
            </button>
            {status && (
               <p
                  className={`mt-2 text-center text-sm ${isError ? "text-red-500" : "text-green-500"
                     }`}
               >
                  {status}
               </p>
            )}
         </form>
      </div>
   );
}
