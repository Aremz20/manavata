
import { Button } from "@/components/ui/button";

const Mission = () => {
  return (
    <section className="section-padding bg-white" id="mission">
      <div className="container mx-auto">
        <h2 className="section-title">Our Mission</h2>
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-lg text-gray-700 mb-6">
            At Manarahta, we are driven by a simple but powerful mission: to provide immediate relief and long-term support to communities in need. 
            We believe in the dignity of every person and work to create sustainable solutions that empower individuals and strengthen communities.
          </p>
          <Button className="bg-brand-blue text-white font-medium">
            Read More About Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
