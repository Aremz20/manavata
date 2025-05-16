
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import DonationModal from './DonationModal';

const Header = () => {
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
    <header className="bg-brand-blue text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold flex items-center">
            <img src="/media/logo.jpeg" alt="Manavata Logo" className="h-8 w-8 mr-2" />
            Manavata
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-brand-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
          <a href="#programs" className="hover:text-brand-gold transition-colors">Programs</a>
          <a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a>
          <a href="#testimonials" className="hover:text-brand-gold transition-colors">Stories</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
        </nav>

        <div className="hidden md:block">
          <Button 
            className="bg-brand-gold text-brand-blue hover:bg-brand-gold/90 font-medium"
            onClick={openDonationModal}
          >
            Donate Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-blue border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="hover:text-brand-gold transition-colors block py-2">Home</a>
            <a href="#about" className="hover:text-brand-gold transition-colors block py-2">About</a>
            <a href="#programs" className="hover:text-brand-gold transition-colors block py-2">Programs</a>
            <a href="#gallery" className="hover:text-brand-gold transition-colors block py-2">Gallery</a>
            <a href="#testimonials" className="hover:text-brand-gold transition-colors block py-2">Stories</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors block py-2">Contact</a>
            <Button 
              className="bg-brand-gold text-brand-blue hover:bg-brand-gold/90 w-full font-medium"
              onClick={openDonationModal}
            >
              Donate Now
            </Button>
          </div>
        </div>
      )}

      <DonationModal isOpen={isDonationModalOpen} onClose={closeDonationModal} />
    </header>
  );
};

export default Header;
