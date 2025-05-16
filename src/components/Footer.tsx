
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <img src="/placeholder.svg" alt="Manarahta Logo" className="h-8 w-8 mr-2" />
              MANARAHTA
            </div>
            <p className="text-gray-300 mb-4">
              Bringing hope to those who need it most through humanitarian aid, education, and community development.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-brand-gold transition-colors">About</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-brand-gold transition-colors">Programs</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Emergency Relief</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Education Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Healthcare Access</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Water & Sanitation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">Agricultural Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Hope Street, Global City, 10001</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <span>info@manarahta.org</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>+1 (123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-gray-300 text-sm">
                © {currentYear} Manarahta. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
