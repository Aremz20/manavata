
import { Button } from "@/components/ui/button";

const Gallery = () => {
  // In a real application, these would be actual images
  const galleryImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <section className="section-padding bg-gray-50" id="gallery">
      <div className="container mx-auto">
        <h2 className="section-title">Our Gallery</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          A glimpse into our work and the communities we serve around the world.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="border border-brand-blue text-brand-blue font-medium">View More Photos</Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
