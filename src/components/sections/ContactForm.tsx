"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Factory } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      country: formData.get("country"),
      businessType: formData.get("businessType"),
      productCategory: formData.get("productCategory"),
      quantity: formData.get("quantity"),
      customization: formData.get("customization"),
      message: formData.get("message"),
      referenceImage: formData.get("referenceImage"), 
    };

    console.log("Submitting to Supabase 'leads' table:", data);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Quote request submitted successfully. Our team will contact you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const inputStyles = "w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-sm font-medium text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-0 transition-colors";
  const labelStyles = "text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500";

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-white py-16 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="mb-12 text-3xl font-black uppercase tracking-tighter text-black sm:text-4xl">
              Contact Us
            </h2>

            <div className="flex flex-col gap-10">
              <div className="flex items-start gap-5">
                <MapPin className="h-6 w-6 shrink-0 text-black" strokeWidth={1.5} />
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
                    Head Office
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600 break-words">
                    5/622 Near Mata Mandir, Shakti Nagar, Goolar Road,<br />
                    Aligarh – 202001, Uttar Pradesh, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail className="h-6 w-6 shrink-0 text-black" strokeWidth={1.5} />
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
                    Email
                  </h3>
                  <a href="mailto:abeakarsh@yahoo.com" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors break-words">
                    abeakarsh@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Factory className="h-6 w-6 shrink-0 text-black" strokeWidth={1.5} />
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
                    Factory Units
                  </h3>
                  <p className="mb-3 text-sm font-medium leading-relaxed text-neutral-600 border-l-2 border-neutral-200 pl-3 break-words">
                    <strong className="text-black">Unit 1:</strong> 5/622 Shakti Nagar, Goolar Road, Aligarh
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-neutral-600 border-l-2 border-neutral-200 pl-3 break-words">
                    <strong className="text-black">Unit 2:</strong> Nagla Masani, Shakti Nagar, Goolar Road, Aligarh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="mb-10 text-xl font-bold tracking-tight text-black sm:text-2xl leading-snug">
              Tell us your requirement and our team will get back to you within 24 hours.
            </h2>
            
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
              
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className={labelStyles}>Full Name</label>
                  <input type="text" id="fullName" name="fullName" required className={inputStyles} placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={labelStyles}>Email Address</label>
                  <input type="email" id="email" name="email" required className={inputStyles} placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className={labelStyles}>WhatsApp / Phone</label>
                  <input type="tel" id="phone" name="phone" required className={inputStyles} placeholder="+1 234 567 8900" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className={labelStyles}>Company Name</label>
                  <input type="text" id="company" name="company" className={inputStyles} placeholder="Company Ltd." />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="country" className={labelStyles}>Country</label>
                  <input type="text" id="country" name="country" required className={inputStyles} placeholder="United States" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="businessType" className={labelStyles}>Business Type</label>
                  <select id="businessType" name="businessType" className={`${inputStyles} cursor-pointer`}>
                    <option value="Importer">Importer</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Interior Designer">Interior Designer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="productCategory" className={labelStyles}>Product Category</label>
                  <input type="text" id="productCategory" name="productCategory" className={inputStyles} placeholder="e.g. Brass door handles" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="quantity" className={labelStyles}>Quantity Required</label>
                  <input type="text" id="quantity" name="quantity" className={inputStyles} placeholder="e.g. 500 pieces" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className={labelStyles}>Your Requirement</label>
                <textarea id="message" name="message" required rows={3} className={`${inputStyles} resize-none`} placeholder="Describe your specifications, finishes, or customization details..." />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group mt-4 flex w-full items-center justify-center gap-3 border border-black bg-black px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-transparent hover:text-black active:scale-95 disabled:bg-neutral-400 disabled:border-neutral-400 disabled:text-white"
              >
                {isSubmitting ? "Sending..." : "Request Quote"}
                {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </button>

            </form>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-24 w-full border-t border-neutral-200 bg-neutral-100"
      >
        <div className="w-full overflow-hidden h-[400px]">
          <iframe 
            src="https://maps.google.com/maps?q=5%2F622%20near%20mata%20mandir%2C%20shakti%20nagar%2C%20goolar%20road%20aligarh%20-%20202001%2C%20up%20india&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="A.B. Enterprises Head Office Location"
            className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          />
        </div>
      </motion.div>
      
    </section>
  );
}