import { useState } from "react";
import { Button } from "@/components/ui/button";
import DonationModal from "./DonationModal";

const GetInvolved = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const openDonationModal = () => setIsDonationModalOpen(true);
  const closeDonationModal = () => setIsDonationModalOpen(false);

  const ways = [
    {
      title: "Volunteer With Us",
      description:
        "Join our team of dedicated volunteers and make a direct impact in our programs around the world.",
      buttonText: "Apply Now",
      buttonVariant: "secondary",
      image: "/media/Volunteer With Us.png",
      href: "#contact", // anchor scroll
    },
    {
      title: "Make a Donation",
      description:
        "Your financial contribution helps us provide essential services to communities in need.",
      buttonText: "Donate Now",
      buttonVariant: "secondary",
      image: "/media/Make a Donation.png",
      onClick: openDonationModal,
    },
    {
      title: "Become a Partner",
      description:
        "Organizations can join forces with us to amplify our impact through strategic partnerships.",
      buttonText: "Contact Us",
      buttonVariant: "secondary",
      image: "/media/Become a Partner.png",
      href: "#contact", // anchor scroll
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Get Involved</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          There are many ways you can support our mission and help bring hope to communities in need.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={way.image}
                alt={way.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-3">
                  {way.title}
                </h3>
                <p className="text-gray-700 mb-6">{way.description}</p>

                {way.href ? (
                  <Button
                    asChild
                    className={
                      way.buttonVariant === "secondary"
                        ? "bg-brand-gold text-brand-blue font-medium"
                        : "border border-brand-blue text-brand-blue font-medium"
                    }
                  >
                    <a
                      href={way.href}
                      className="hover:text-brand-gold transition-colors"
                    >
                      {way.buttonText}
                    </a>
                  </Button>
                ) : (
                  <Button
                    className={
                      way.buttonVariant === "secondary"
                        ? "bg-brand-gold text-brand-blue font-medium"
                        : "border border-brand-blue text-brand-blue font-medium"
                    }
                    onClick={way.onClick}
                  >
                    {way.buttonText}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DonationModal isOpen={isDonationModalOpen} onClose={closeDonationModal} />
    </section>
  );
};

export default GetInvolved;
