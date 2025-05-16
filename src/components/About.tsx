
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="section-padding bg-gray-50" id="about">
      <div className="container mx-auto">
        <h2 className="section-title">About Manavata</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/media/1cfd5f9c-0a32-4c27-8305-9473591bd624.jpeg" 
              alt="People working together" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
          <div>
            <p className="text-gray-700 mb-6">
              Founded in 2010, Manavata has been at the forefront of humanitarian efforts in regions affected by conflict and natural disasters. Our organization began with a small group of dedicated volunteers and has grown into a global network of partners and supporters committed to making a difference.
            </p>
            <p className="text-gray-700 mb-6">
              We work closely with local communities to understand their unique needs and develop programs that address immediate concerns while building long-term resilience and self-sufficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-brand-blue mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">15+ Years</h3>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-brand-blue mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="M17 11h1a3 3 0 0 1 0 6h-1"/>
                    <path d="M9 12v6"/>
                    <path d="M13 12v6"/>
                    <path d="M14 7.4v1.7a1 1 0 0 1-1 .9h-2a1 1 0 0 1-1-.9V7.4"/>
                    <path d="M5.8 11h1.2a1 1 0 1 0 0-2H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">12</h3>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-brand-blue mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">8</h3>
                <p className="text-sm text-gray-600">Languages</p>
              </div>
            </div>
            
            <Button className="outline-button mt-8">Learn Our Story</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
