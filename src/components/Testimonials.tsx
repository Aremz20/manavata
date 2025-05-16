
const Testimonials = () => {
  const testimonials = [
    {
      quote: "The support from Manavata has transformed our village. We now have clean water and our children can attend school regularly.",
      name: "Sarah Ahmed",
      location: "Yemen",
      image: "/media/Sarah Ahmed.png"
    },
    {
      quote: "When the floods destroyed our home, Manavata was there with emergency supplies and helped us rebuild. We are forever grateful.",
      name: "Abdul Rahman",
      location: "Pakistan",
      image: "/media/Abdul Rahman.png"
    },
    {
      quote: "Thanks to the agricultural training from Manavata, our community now grows enough food to feed ourselves and generate income.",
      name: "Maria Santos",
      location: "Honduras",
      image: "/media.Maria Santos.png"
    }
  ];

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container mx-auto">
        <h2 className="section-title">Voices of Impact</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
