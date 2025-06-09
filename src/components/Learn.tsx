
import { Button } from "@/components/ui/button";

const Learn = () => {
  return (
    <section className="section-padding bg-gray-50" id="about">
      <div className="container mx-auto">
        <h2 className="section-title">Learn About Manavata</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="text-gray-700 mb-6">
              Founded in 2023, Manavata has been at the forefront of humanitarian efforts in regions affected by conflict and natural disasters. Our organization began with a small group of dedicated volunteers and has grown into a global network of partners and supporters committed to making a difference.
            </p>
            <p className="text-gray-700 mb-6">
              We work closely with local communities to understand their unique needs and develop programs that address immediate concerns while building long-term resilience and self-sufficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
             
              
              
              
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-brand-blue mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">5</h3>
                <p className="text-sm text-gray-600">Languages</p>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
