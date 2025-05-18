
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import DonationModal from './DonationModal';


const Hero = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const openDonationModal = () => {
      setIsDonationModalOpen(true);
    };
  
    const closeDonationModal = () => {
      setIsDonationModalOpen(false);
    };
  
  return (
    <section 
      className="relative bg-brand-blue min-h-[75vh] flex items-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(14, 51, 86, 0.85), rgba(14, 51, 86, 0.85)), url('/media/heroimage.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Bringing Hope To Those Who Need It Most</h1>
          <p className="text-lg md:text-xl mb-8">Our nonprofit organization is dedicated to bringing hope through humanitarian aid, education, and community development projects in areas affected by conflict and poverty.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
            className="bg-brand-gold text-brand-blue font-medium text-lg py-6 px-8"
            onClick={openDonationModal}
          >
            Donate Now
          </Button>
          {/* Donation Modal */}
      <DonationModal isOpen={isDonationModalOpen} onClose={closeDonationModal} />
            <Button className="bg-brand-gold text-brand-blue font-medium text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
