import { useState } from "react";
import Button from "../UI/Button";

export default function ContactForm({ territory }) {
  const isAiml = territory === "aiml";
  const [status, setStatus] = useState("IDLE"); // IDLE, SUBMITTING, SUCCESS, ERROR

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    const formData = new FormData(e.target);
    
    // Web3Forms endpoint
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus("SUCCESS");
        e.target.reset();
        setTimeout(() => setStatus("IDLE"), 5000);
      } else {
        setStatus("ERROR");
        setTimeout(() => setStatus("IDLE"), 5000);
      }
    } catch (err) {
      setStatus("ERROR");
      setTimeout(() => setStatus("IDLE"), 5000);
    }
  };

  if (isAiml) {
    return (
      <div className="bg-m-surface-lowest ghost-border p-8 lg:p-12 relative group max-w-2xl w-full mx-auto">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-aiml-glow/50 to-transparent" />
        <div className="flex items-center gap-2 mb-8 opacity-50">
          <span className="font-display text-[10px] text-aiml-matrix tracking-widest font-bold uppercase">
            root@core:~/transmit# ./secure_link.sh
          </span>
          <span className="w-2 h-3 bg-aiml-glow animate-[terminal-blink_1s_infinite]" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* USER GENERATE ACCESS KEY */}
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
          
          <div className="flex flex-col gap-2">
            <label className="font-display text-[10px] text-m-outline-variant uppercase tracking-widest">
              [ TARGET_NAME ]
            </label>
            <input 
              type="text" 
              name="name" 
              required
              className="bg-transparent border border-m-outline-variant/30 text-aiml-glow p-3 font-display focus:border-aiml-glow focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-display text-[10px] text-m-outline-variant uppercase tracking-widest">
              [ RETURN_ADDRESS ]
            </label>
            <input 
              type="email" 
              name="email" 
              required
              className="bg-transparent border border-m-outline-variant/30 text-aiml-glow p-3 font-display focus:border-aiml-glow focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-display text-[10px] text-m-outline-variant uppercase tracking-widest">
              [ PAYLOAD ]
            </label>
            <textarea 
              name="message" 
              required
              rows={4}
              className="bg-transparent border border-m-outline-variant/30 text-aiml-glow p-3 font-display focus:border-aiml-glow focus:outline-none transition-colors resize-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={status === "SUBMITTING"}
            className="mt-4 font-display text-[12px] text-aiml-void bg-aiml-glow py-4 uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors disabled:opacity-50"
          >
            {status === "IDLE" && "INITIATE_TRANSFER()"}
            {status === "SUBMITTING" && "UPLOADING..."}
            {status === "SUCCESS" && "PAYLOAD_RECEIVED_"}
            {status === "ERROR" && "TRANSFER_FAILED"}
          </button>
        </form>
      </div>
    );
  }

  // FULLSTACK MODE
  return (
    <div className="relative bg-white/60 backdrop-blur-[40px] shadow-[0_40px_100px_rgba(0,219,233,0.05)] p-12 lg:p-16 border border-white rounded-[2rem] w-full max-w-2xl mx-auto overflow-hidden">
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white to-transparent" />
      
      <div className="text-center mb-12">
        <h2 className="font-body text-[2rem] text-neutral-900 tracking-tight font-light mb-4">
          Establish Connection
        </h2>
        <p className="font-body text-neutral-500 font-light">
          Fill out the form below to initiate communication.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />

        <div className="relative group">
          <input 
            type="text" 
            name="name" 
            id="fs-name"
            required
            className="w-full bg-transparent border-b border-black/10 text-neutral-800 p-3 font-body focus:border-fs-cyan focus:outline-none transition-colors peer placeholder-transparent"
            placeholder="Name"
          />
          <label htmlFor="fs-name" className="absolute left-3 -top-5 text-[11px] text-fs-cyan uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-fs-cyan peer-focus:font-bold">
            Full Name
          </label>
        </div>

        <div className="relative group">
          <input 
            type="email" 
            name="email" 
            id="fs-email"
            required
            className="w-full bg-transparent border-b border-black/10 text-neutral-800 p-3 font-body focus:border-rose-400 focus:outline-none transition-colors peer placeholder-transparent"
            placeholder="Email"
          />
          <label htmlFor="fs-email" className="absolute left-3 -top-5 text-[11px] text-rose-400 uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-rose-400 peer-focus:font-bold">
            Email Address
          </label>
        </div>

        <div className="relative group pt-4">
          <textarea 
            name="message" 
            id="fs-message"
            required
            rows={4}
            className="w-full bg-black/[0.02] border border-black/5 rounded-xl text-neutral-800 p-4 font-body focus:border-yellow-400 focus:bg-white focus:outline-none transition-colors peer placeholder-transparent resize-none"
            placeholder="Message"
          />
          <label htmlFor="fs-message" className="absolute left-4 top-0 text-[11px] text-yellow-500 uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-8 peer-placeholder-shown:font-normal peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-yellow-500 peer-focus:font-bold">
            Your Message
          </label>
        </div>

        <button 
          type="submit" 
          disabled={status === "SUBMITTING"}
          className="mt-4 w-full relative overflow-hidden bg-neutral-900 text-white rounded-full py-4 px-8 font-body font-medium tracking-wide hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 duration-300 disabled:opacity-50"
        >
          <span className="relative z-10 block">
            {status === "IDLE" && "Send Message"}
            {status === "SUBMITTING" && "Sending..."}
            {status === "SUCCESS" && "Message Sent!"}
            {status === "ERROR" && "Error Sending."}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-yellow-400 to-fs-cyan opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </button>
      </form>
    </div>
  );
}
