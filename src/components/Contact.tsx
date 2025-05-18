import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "your_service_id",    // Replace with your EmailJS service ID
        "your_template_id",   // Replace with your EmailJS template ID
        formRef.current,
        "your_public_key"     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <Input id="firstName" name="first_name" placeholder="Your first name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <Input id="lastName" name="last_name" placeholder="Your last name" className="w-full" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" name="user_email" type="email" placeholder="Your email address" className="w-full" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="How can we help you?" className="w-full min-h-[150px]" />
              </div>

              <Button type="submit" className="primary-button">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Details section remains unchanged */}
          <div className="flex flex-col justify-between">
            {/* ... same as your original contact details JSX ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
