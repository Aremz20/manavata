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
        "YOUR_SERVICE_ID",     // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",    // Replace with your EmailJS Template ID
        form.current,
        "YOUR_USER_ID"         // Replace with your EmailJS Public Key (User ID)
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
                    <p className="text-gray-600">123 Hope Street, Global City, 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 text-brand-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@Manavata.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 text-brand-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { href: "#", iconPath: "M18 2h-3a5 5..." }, // Facebook
                  { href: "#", iconPath: "M22 4s-.7 2.1..." }, // Twitter
                  { href: "#", iconPath: "M16 11.37A4..." }, // Instagram
                  { href: "#", iconPath: "M16 8a6 6..." }  // LinkedIn
                ].map(({ href, iconPath }, i) => (
                  <a key={i} href={href} className="bg-brand-blue text-white p-2 rounded-full hover:bg-opacity-90 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={iconPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
