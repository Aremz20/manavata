
import { Button } from "@/components/ui/button";

const Gallery = () => {
  // In a real application, these would be actual images
  const galleryImages = [
    "/media/1b5b042f-2c90-4522-a56d-e14a74134b33.jpeg",
    "/media/1cfd5f9c-0a32-4c27-8305-9473591bd624.jpeg",
    "/media/9fc04fb2-4254-4818-81c2-ff613895737d.jpeg",
    "/media/31dd079d-1e8e-4b7e-b0ed-da0e0a28cc89.jpeg",
    "/media/a5a957da-125e-47fe-b226-dde0cd57c233.jpeg",
    "/media/4933074e-840b-4031-baee-0a6f0d6ca0c2.jpeg",
    "/media/d16acbe4-0a46-4623-8257-274e2b67653f.jpeg",
    "/media/ae0ae72a-f824-4eed-947b-723de7df1b57.jpeg",
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
        <Button className="bg-brand-gold text-brand-blue font-medium text-lg py-6 px-8">
              View More Photos
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
