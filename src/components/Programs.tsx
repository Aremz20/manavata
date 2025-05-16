import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Programs = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const programs = [
    {
      title: "Emergency Food Relief",
      description: "Providing immediate food assistance to communities affected by conflict and natural disasters, reaching over 10,000 families annually.",
      image: "/media/31dd079d-1e8e-4b7e-b0ed-da0e0a28cc89.jpeg",
      additionalImages: ["/media/103c8f88-506c-4c97-aa95-6288ac08ad0e.jpeg", "/media/d16acbe4-0a46-4623-8257-274e2b67653f.jpeg", "/media/8e4bf7d2-f460-46f8-be7d-47e93f75823f.jpeg"],
      videoFile: "/media/4b124e3b-dff5-4421-9980-d35a8ccfe85b.mp4.mp4", 
    },
    {
      title: "Education Programs",
      description: "Supporting schools and educational initiatives to ensure children in underserved areas have access to quality education and learning materials.",
      image: "/placeholder.svg",
      additionalImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Health & Sanitization",
      description: "Implementing health clinics and sanitization projects to improve health outcomes and prevent disease in vulnerable communities.",
      image: "/placeholder.svg",
      additionalImages: ["/placeholder.svg", "/placeholder.svg"],
      // videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube embed URL
      videoFile: "/videos/health-sanitization.mp4", // Local video file in public/videos folder
    },
    {
      title: "Agricultural Support",
      description: "Training and equipping local farmers with sustainable farming techniques and resources to improve food security and income.",
      image: "/placeholder.svg",
      additionalImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    }
  ];

  const openProjectDetails = (index: number) => {
    setSelectedProject(index);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="section-padding bg-white" id="programs">
      <div className="container mx-auto">
        <h2 className="section-title">Our Impact In Action</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group relative"
            >
              <div className="relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <Button 
                    className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue font-medium flex items-center gap-1"
                    onClick={() => openProjectDetails(index)}
                  >
                    View More <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-3">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <Button 
                  variant="link" 
                  className="text-brand-blue p-0 h-auto hover:text-brand-blue/80 hover:underline"
                  onClick={() => openProjectDetails(index)}
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium">
            View All Programs
          </Button>
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectDetailsModal 
          isOpen={true}
          onClose={closeProjectDetails}
          project={programs[selectedProject]}
        />
      )}
    </section>
  );
};

export default Programs;