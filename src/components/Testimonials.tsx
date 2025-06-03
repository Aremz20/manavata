
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Distributing food with Manavata showed me how many families are suffering silently. I’m proud to be part of a team that brings real hope and help",
      name: "Princess",
      location: "Abuja",
      image: "/media/Profile Photo.jpg"
    },
    {
      quote: "We are forever grateful to Manavata .",
      name: "Abdul Rahman",
      location: "Abuja",
      image: "/media/Profile Photo.jpg"
    },
    {
      quote: "Thanks to Manavata My hospital bills have been sorted out.",
      name: "Maria",
      location: "Abuja",
      image: "/media/Profile Photo.jpg"
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
