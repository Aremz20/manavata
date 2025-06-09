import { Button } from "@/components/ui/button";

const Learn = () => {
  return (
    <section
      className="min-h-screen bg-gray-50 py-16 flex items-center"
      id="about"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 text-center">Learn About Manavata</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              Founded in 2023, Manavata has been at the forefront of humanitarian
              efforts in regions affected by conflict and natural disasters. Our
              organization began with a small group of dedicated volunteers and has
              grown into a global network of partners and supporters committed to
              making a difference.
            </p>
            <p className="text-gray-700 mb-6">
              We work closely with local communities to understand their unique
              needs and develop programs that address immediate concerns while
              building long-term resilience and self-sufficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {/* Future content (e.g. stats or images) can go here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
