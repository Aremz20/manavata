import { Button } from "@/components/ui/button";

const Learn = () => {
  return (
    <section
      className="min-h-screen bg-gray-50 py-16 flex flex-col justify-center items-center"
      id="about"
    >
      <div className="container mx-auto px-5">
        <h2 className="section-title mb-8 text-center">Learn About Manavata</h2>
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div>
            <p className="text-gray-700 mb-6">
              Manavata — A foundation for succour…

Founded in 2023, Manavata was born out of a deep desire to bring hope, dignity, and support to those most in need — abused children, orphans, widows, and the marginalized. With a vision to create a sustainable and impactful charitable organization, Manavata is built on the pillars of integrity, empathy, professionalism, and inclusivity.

We are driven by a simple but powerful mission:

To efficiently and effectively reach out to the vulnerable and provide meaningful support.

At Manavata, every action is rooted in understanding — understanding the pain of a child left alone, the silence of a grieving widow, and the silent struggles of the abandoned. Our team is committed to walking alongside these individuals, offering not just aid, but dignity, respect, and opportunity.

What makes Manavata unique?
Our values. From transparent operations to inclusive programs, we prioritize ethics, collaboration, and quality service. Our team is not only professionally equipped but also emotionally aligned with our mission, ensuring our work goes beyond charity — it touches lives.

We believe in diversity, open communication, and delivering services that meet international standards, ensuring that every person we reach is treated with care and fairness.

As we grow, we continue to adapt, innovate, and stay accountable — not just to our mission, but to every life that depends on it.

Manavata is more than an NGO. It’s a movement. A promise. A foundation for succour.
            </p>
            <p className="text-gray-700 mb-6">
              We work closely with local communities to understand their unique
              needs and develop programs that address immediate concerns while
              building long-term resilience and self-sufficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {/* Reserved space for future content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
