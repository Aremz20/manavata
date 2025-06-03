import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // Replace with your actual EmailJS Service ID
        "YOUR_TEMPLATE_ID",    // Replace with your EmailJS Template ID
        form.current,
        "YOUR_USER_ID"         // Replace with your EmailJS Public Key
      )
      .then(() => {
        setMessageSent(true);
        setIsSending(false);
        form.current?.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setIsSending(false);
      });
  };

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <Input name="firstName" id="firstName" placeholder="Your first name" className="w-full" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <Input name="lastName" id="lastName" placeholder="Your last name" className="w-full" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input name="email" id="email" type="email" placeholder="Your email address" className="w-full" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea name="message" id="message" placeholder="How can we help you?" className="w-full min-h-[150px]" required />
              </div>

              <Button type="submit" className="primary-button" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </Button>

              {messageSent && <p className="text-green-600">Your message has been sent!</p>}
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-700 mb-8">
                Have questions about our work or how you can get involved? 
                Reach out to us using the contact form or through the information below.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 text-brand-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Our Headquarters</h4>
                    <p className="text-gray-600">Jabi, Abuja</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 text-brand-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">Manavata.succour@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 text-brand-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+234 807-918-8889</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a href="#" className="bg-brand-blue text-white p-2 rounded-full hover:bg-opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>

                {/* Twitter */}
                <a href="#" className="bg-brand-blue text-white p-2 rounded-full hover:bg-opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/manavata_succour_foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-brand-blue text-white p-2 rounded-full hover:bg-opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" className="bg-brand-blue text-white p-2 rounded-full hover:bg-opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
